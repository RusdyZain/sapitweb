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

type JambanProps = {
  data: DataItem[];
};

export default function Jamban({ data }: JambanProps) {
  // Initialize an object to hold the count for each type of jamban
  const jambanCount: { [key: string]: number } = {};
  let tidakPunyaJambanCount = 0;

  // Iterate over the data to sum occurrences
  data.forEach((item) => {
    const jamban = item.dataTambahan.jamban;
    if (jamban) {
      if (jamban === "Tidak Punya Jamban") {
        tidakPunyaJambanCount++;
      } else {
        // Increment count for existing jamban types
        if (jambanCount[jamban]) {
          jambanCount[jamban]++;
        } else {
          jambanCount[jamban] = 1;
        }
      }
    }
  });

  // Calculate the total count of all jamban types
  const totalCount =
    Object.values(jambanCount).reduce((sum, count) => sum + count, 0) +
    tidakPunyaJambanCount;

  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <div className="text-base font-medium mb-4 border border-primary-200 p-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Kepemilikan Jamban
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Jenis Jamban
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
            {Object.entries(jambanCount).map(([jamban, count]) => (
              <tr key={jamban}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {jamban}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {count}
                </td>
              </tr>
            ))}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Tidak Punya Jamban
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tidakPunyaJambanCount}
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Jumlah
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {totalCount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
