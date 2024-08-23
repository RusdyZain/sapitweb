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

type KendaraanProps = {
  data: DataItem[];
};

export default function Kendaraan({ data }: KendaraanProps) {
  // Initialize an object to hold the sum of counts for each vehicle type
  const kendaraanCount: { [key: string]: number } = {};
  let tidakPunyaKendaraanCount = 0;

  // Iterate over the data to sum occurrences
  data.forEach((item) => {
    const kendaraan = item.dataTambahan.kendaraan;
    if (kendaraan) {
      if (kendaraan === "Tidak Punya Kendaraan") {
        tidakPunyaKendaraanCount++;
      } else {
        const [type, countStr] = kendaraan.split(" - ");
        const count = parseInt(countStr, 10);

        // Check if the type already exists in the object
        if (kendaraanCount[type]) {
          kendaraanCount[type] += count;
        } else {
          kendaraanCount[type] = count;
        }
      }
    }
  });

  // Calculate the total count of all vehicles
  const totalCount =
    Object.values(kendaraanCount).reduce((sum, count) => sum + count, 0) +
    tidakPunyaKendaraanCount;

  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <div className="text-base font-medium mb-4 border border-primary-200 p-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Jumlah Kepemilikan Kendaraan
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Jenis Kendaraan
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
            {Object.entries(kendaraanCount).map(([kendaraan, count]) => (
              <tr key={kendaraan}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {kendaraan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {count}
                </td>
              </tr>
            ))}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Tidak Punya Kendaraan
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tidakPunyaKendaraanCount}
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
