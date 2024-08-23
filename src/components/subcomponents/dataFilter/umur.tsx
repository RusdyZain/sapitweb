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

type AgeGroup = {
  label: string;
  range: [number, number];
};

type GenderCountByAgeGroup = {
  [key: string]: {
    lakiLaki: number;
    perempuan: number;
  };
};

type GenderByAgeProps = {
  data: DataItem[];
};

export default function Umur({ data }: GenderByAgeProps) {
  const ageGroups: AgeGroup[] = [
    { label: "0-5 Bayi/Balita", range: [0, 5] },
    { label: "6-11 Anak-anak", range: [6, 11] },
    { label: "12-18 Remaja", range: [12, 18] },
    { label: "19-44 Usia Subur", range: [19, 44] },
    { label: "45-59 Tidak Produktif", range: [45, 59] },
    { label: "60< Lansia", range: [60, Infinity] },
  ];

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  const genderCountByAgeGroup: GenderCountByAgeGroup = ageGroups.reduce(
    (acc, group) => {
      acc[group.label] = {
        lakiLaki: 0,
        perempuan: 0,
      };
      return acc;
    },
    {} as GenderCountByAgeGroup
  );

  let totalLakiLaki = 0;
  let totalPerempuan = 0;

  data.forEach((item) => {
    const age = calculateAge(item.tanggalLahir);
    const gender = item.jenisKelamin;
    const ageGroup = ageGroups.find(
      (group) => age >= group.range[0] && age <= group.range[1]
    );

    if (ageGroup) {
      if (gender === "Laki-laki") {
        genderCountByAgeGroup[ageGroup.label].lakiLaki++;
        totalLakiLaki++;
      } else if (gender === "Perempuan") {
        genderCountByAgeGroup[ageGroup.label].perempuan++;
        totalPerempuan++;
      }
    }
  });

  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <div className="text-base font-medium mb-4 border border-primary-200 p-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Jumlah Gender Berdasarkan Umur
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Kelompok Umur
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Laki-Laki
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Perempuan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(genderCountByAgeGroup).map(([ageGroup, counts]) => (
              <tr key={ageGroup}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {ageGroup}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {counts.lakiLaki}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {counts.perempuan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {counts.lakiLaki + counts.perempuan}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Jumlah
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {totalLakiLaki}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {totalPerempuan}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {totalLakiLaki + totalPerempuan}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
