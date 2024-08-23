import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method !== "PATCH") {
    res.setHeader("Allow", ["PATCH"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      nama,
      nikKk,
      nik,
      jenisKelamin,
      statusPerkawinan,
      tempatLahir,
      tanggalLahir,
      pendidikanTerakhir,
      pekerjaan,
      alamatLengkap,
      kedudukanDalamKeluarga,
      namaIbuKandung,
      dataTambahan,
    } = req.body;

    const updatedWarga = await prisma.dataWarga.update({
      where: { id: id as string },
      data: {
        ...(nama && { nama }),
        ...(nikKk && { nikKk }),
        ...(nik && { nik }),
        ...(jenisKelamin && { jenisKelamin }),
        ...(statusPerkawinan && { statusPerkawinan }),
        ...(tempatLahir && { tempatLahir }),
        ...(tanggalLahir && { tanggalLahir }),
        ...(pendidikanTerakhir && { pendidikanTerakhir }),
        ...(pekerjaan && { pekerjaan }),
        ...(alamatLengkap && { alamatLengkap }),
        ...(kedudukanDalamKeluarga && { kedudukanDalamKeluarga }),
        ...(namaIbuKandung && { namaIbuKandung }),
      },
    });

    const existingTambahan = await prisma.dataTambahan.findUnique({
      where: { wargaId: nik as string },
    });

    if (!existingTambahan) {
      return res
        .status(404)
        .json({ error: "DataTambahan not found for the given wargaId." });
    }

    const updatedTambahan = await prisma.dataTambahan.update({
      where: { wargaId: nik as string },
      data: {
        ...(dataTambahan.anakYatim !== undefined && {
          anakYatim: dataTambahan.anakYatim,
        }),
        ...(dataTambahan.bpjs !== undefined && { bpjs: dataTambahan.bpjs }),
        ...(dataTambahan.jamban !== undefined && {
          jamban: dataTambahan.jamban,
        }),
        ...(dataTambahan.jenisBantuan !== undefined && {
          jenisBantuan: dataTambahan.jenisBantuan,
        }),
        ...(dataTambahan.jenisUsulan !== undefined && {
          jenisUsulan: dataTambahan.jenisUsulan,
        }),
        ...(dataTambahan.kendaraan !== undefined && {
          kendaraan: dataTambahan.kendaraan,
        }),
        ...(dataTambahan.prasarana !== undefined && {
          prasarana: dataTambahan.prasarana,
        }),
        ...(dataTambahan.saranaUmum !== undefined && {
          saranaUmum: dataTambahan.saranaUmum,
        }),
        ...(dataTambahan.statusRumah !== undefined && {
          statusRumah: dataTambahan.statusRumah,
        }),
        ...(dataTambahan.ternak !== undefined && {
          ternak: dataTambahan.ternak,
        }),
        ...(dataTambahan.tki !== undefined && { tki: dataTambahan.tki }),
        ...(dataTambahan.umkm !== undefined && { umkm: dataTambahan.umkm }),
      },
    });

    res.status(200).json({ updatedWarga, updatedTambahan });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Error updating data" });
  }
}
