import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("SapitDB");

      const { kawilId, formDataUtama, formDataTambahan } = req.body;

      if (!formDataUtama || !formDataTambahan) {
        res.status(400).json({ error: "Missing form data" });
        return;
      }

      if (!kawilId) {
        res.status(400).json({ error: "Missing Kawil ID" });
        return;
      }

      const { nik } = formDataUtama;

      if (!nik) {
        res.status(400).json({ error: "Missing NIK" });
        return;
      }

      await db
        .collection("DataWarga")
        .updateOne(
          { nik },
          { $set: { ...formDataUtama, kawilId } },
          { upsert: true }
        );

      await db
        .collection("DataTambahan")
        .updateOne(
          { wargaId: nik },
          { $set: { ...formDataTambahan, wargaId: nik, kawilId } },
          { upsert: true }
        );

      res.status(200).json({ message: "Data submitted successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
