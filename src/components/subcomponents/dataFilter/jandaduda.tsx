import React from "react";

type DataItem = {
  _id: string;
  nama: string;
  nikKk: string;
  nik: string;
  jenisKelamin: string;
  statusPerkawinan: string;
  tempatLahir: string;
  tanggalLahir: string;
  pendidikanTerakhir: string;
  pekerjaan: string;
  alamatLengkap: string;
  kedudukanDalamKeluarga: string;
  namaIbuKandung: string;
  dataTambahan: {
    anakYatim: string;
    kendaraan: string;
    jamban: string;
    statusRumah: string;
    ternak: string;
    bpjs: string;
    tki: string;
    umkm: string;
    jandaDuda: string;
    ibuHamil: string;
    jenisBantuan: string;
    jenisUsulan: string;
  };
};

type JandaDudaProps = {
  data: DataItem[];
};

export default function JandaDuda({ data }: JandaDudaProps) {
  const jandaCount = data.filter(
    (item) => item.dataTambahan.jandaDuda === "Janda"
  ).length;

  const dudaCount = data.filter(
    (item) => item.dataTambahan.jandaDuda === "Duda"
  ).length;

  const totalJandaDuda = jandaCount + dudaCount;

  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <div className="text-base font-medium mb-4 border border-primary-200 p-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Janda & Duda
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Janda
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {jandaCount}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Duda
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dudaCount}
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                Jumlah
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {totalJandaDuda}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
