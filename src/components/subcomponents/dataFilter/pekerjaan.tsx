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

type PekerjaanProps = {
  data: DataItem[];
};

export default function Pekerjaan({ data }: PekerjaanProps) {
  const pekerjaanCount: { [key: string]: number } = {};

  data.forEach((item) => {
    if (pekerjaanCount[item.pekerjaan]) {
      pekerjaanCount[item.pekerjaan]++;
    } else {
      pekerjaanCount[item.pekerjaan] = 1;
    }
  });

  const totalPekerjaan = Object.values(pekerjaanCount).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <div className="text-base font-medium mb-4 border border-primary-200 p-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Jumlah Pekerjaan
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Pekerjaan
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
            {Object.entries(pekerjaanCount).map(([pekerjaan, count]) => (
              <tr key={pekerjaan}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pekerjaan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {count}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                Jumlah
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                {totalPekerjaan}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
