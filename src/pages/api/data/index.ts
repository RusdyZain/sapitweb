import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import { jwtDecode } from "jwt-decode";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("SapitDB");

      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Token not provided" });
      }

      interface DecodedToken {
        id: string;
      }

      const decodedToken: DecodedToken = jwtDecode(token);

      const kawilId = decodedToken.id;

      if (!kawilId) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const dataWarga = await db
        .collection("DataWarga")
        .find({ kawilId })
        .toArray();

      const nikList = dataWarga.map((warga) => warga.nik);
      const dataTambahan = await db
        .collection("DataTambahan")
        .find({ wargaId: { $in: nikList } })
        .toArray();

      const combinedData = dataWarga.map((warga) => {
        const tambahan = dataTambahan.find(
          (item) => item.wargaId === warga.nik
        );
        return {
          ...warga,
          dataTambahan: tambahan || {},
        };
      });

      res.status(200).json(combinedData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
