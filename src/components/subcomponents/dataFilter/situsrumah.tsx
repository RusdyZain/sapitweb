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

type StatusRumahProps = {
  data: DataItem[];
};

export default function StatusRumah({ data }: StatusRumahProps) {
  // Initialize an object to hold the count for each statusRumah type
  const statusRumahCount: { [key: string]: number } = {};

  // Iterate over the data to sum occurrences
  data.forEach((item) => {
    const statusRumah = item.dataTambahan.statusRumah;
    if (statusRumah) {
      // Increment count for existing statusRumah types
      if (statusRumahCount[statusRumah]) {
        statusRumahCount[statusRumah]++;
      } else {
        statusRumahCount[statusRumah] = 1;
      }
    }
  });

  // Calculate the total count of all statusRumah types
  const totalCount = Object.values(statusRumahCount).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <div className="text-base font-medium mb-4 border border-primary-200 p-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Kepemilikan Status Rumah
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status Rumah
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
            {Object.entries(statusRumahCount).map(([statusRumah, count]) => (
              <tr key={statusRumah}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {statusRumah}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {count}
                </td>
              </tr>
            ))}
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
