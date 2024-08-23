import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("SapitDB");

      const { id } = req.query;

      const dataWarga = await db
        .collection("DataWarga")
        .findOne({ _id: new ObjectId(id as string) });

      if (!dataWarga) {
        res.status(404).json({ message: "Data not found" });
        return;
      }

      const dataTambahan = await db
        .collection("DataTambahan")
        .findOne({ wargaId: dataWarga.nik });

      res.status(200).json({ ...dataWarga, dataTambahan });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
