import Link from "next/link";
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
};

type TabelProps = {
  data: DataItem[];
  currentPage: number;
  itemsPerPage: number;
};

const calculateAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return age - 1;
  }
  return age;
};

const Tabel: React.FC<TabelProps> = ({ data, currentPage, itemsPerPage }) => {
  return (
    <>
      <div className="font-primary">
        <table className="table-auto w-full text-sm ">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-primary-600 text-white rounded-tl-lg">
                No
              </th>
              <th className="px-4 py-2 bg-primary-600 text-white">Nama</th>
              <th className="px-4 py-2 bg-primary-600 text-white">KK</th>
              <th className="px-4 py-2 bg-primary-600 text-white">NIK</th>
              <th className="px-4 py-2 bg-primary-600 text-white">
                Jenis Kelamin
              </th>
              <th className="px-4 py-2 bg-primary-600 text-white">
                Status Perkawinan
              </th>
              <th className="px-4 py-2 bg-primary-600 text-white">
                Tempat Lahir
              </th>
              <th className="px-4 py-2 bg-primary-600 text-white">
                Tanggal Lahir
              </th>

              <th className="px-4 py-2 bg-primary-600 text-white">Pekerjaan</th>
              <th className="px-4 py-2 bg-primary-600 text-white">
                Alamat Lengkap
              </th>
              <th className="px-4 py-2 bg-primary-600 text-white">
                Kedudukan dalam Keluarga
              </th>
              <th className="px-4 py-2 bg-primary-600 text-white">Umur</th>

              <th className="px-4 py-2 bg-primary-600 text-white rounded-tr-lg">
                Data Lengkap
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-primary-50" : "bg-primary-100"}
              >
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {currentPage * itemsPerPage + index + 1}{" "}
                  {/* Adjust numbering */}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.nama}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.nikKk}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.nik}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.jenisKelamin}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.statusPerkawinan}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.tempatLahir}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.tanggalLahir}
                </td>

                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.pekerjaan}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.alamatLengkap}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {entry.kedudukanDalamKeluarga}
                </td>
                <td className="border border-primary-600 px-4 py-2 text-center">
                  {calculateAge(entry.tanggalLahir)}
                </td>

                <td className="border border-primary-600 px-4 py-2 text-center">
                  <Link
                    href={`detail/${entry._id}`}
                    className="text-information-600 underline hover:text-primary-600"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabel;
