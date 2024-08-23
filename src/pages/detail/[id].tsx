import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LainLainEditForm from "@/components/editForm/LainLainEditForm";

const MySwal = withReactContent(Swal);

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

const DetailPage: React.FC = () => {
  const [data, setData] = useState<DataItem | null>(null);
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/data/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  const handleEditToggle = (key: string) => {
    setEditMode((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key: string, value: string) => {
    if (data) {
      if (key.startsWith("dataTambahan.")) {
        const subKey = key.split(".")[1];
        setData({
          ...data,
          dataTambahan: {
            ...data.dataTambahan,
            [subKey]: value,
          },
        });
      } else {
        setData({ ...data, [key]: value });
      }
    }
  };

  const handleEdit = async () => {
    if (!data) return;

    try {
      const response = await fetch(`/api/data/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      const updatedData = await response.json();
      setData(updatedData);

      MySwal.fire({
        title: "Success",
        text: "Data berhasil diperbarui!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/beranda");
      });
    } catch (error) {
      console.error("Error updating data:", error);
      MySwal.fire({
        title: "Error",
        text: "Gagal memperbarui data.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-8xl mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-primary-500 mb-2">{data.nama}</h2>

      <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
        Haloo admin sapit, selamat mengelola data warga
      </h2>

      {/* Kategori: Informasi Pribadi */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Informasi Pribadi
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex items-center mb-2">
            <span className="w-60">Nama</span>:
            {editMode.nama ? (
              <input
                type="text"
                value={data.nama}
                onChange={(e) => handleChange("nama", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.nama}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("nama")}
            />
          </div>
          {/* NIK KK */}
          <div className="flex items-center mb-2">
            <span className="w-60">NIK KK</span>:
            {editMode.nikKk ? (
              <input
                type="text"
                value={data.nikKk}
                onChange={(e) => handleChange("nikKk", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.nikKk}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("nikKk")}
            />
          </div>

          {/* NIK */}
          <div className="flex items-center mb-2">
            <span className="w-60">NIK</span>:
            {editMode.nik ? (
              <input
                type="text"
                value={data.nik}
                onChange={(e) => handleChange("nik", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.nik}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("nik")}
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="flex items-center mb-2">
            <span className="w-60">Jenis Kelamin</span>:
            {editMode.jenisKelamin ? (
              <input
                type="text"
                value={data.jenisKelamin}
                onChange={(e) => handleChange("jenisKelamin", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.jenisKelamin}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("jenisKelamin")}
            />
          </div>

          {/* Tempat Lahir */}
          <div className="flex items-center mb-2">
            <span className="w-60">Tempat Lahir</span>:
            {editMode.tempatLahir ? (
              <input
                type="text"
                value={data.tempatLahir}
                onChange={(e) => handleChange("tempatLahir", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.tempatLahir}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("tempatLahir")}
            />
          </div>

          {/* Tanggal Lahir */}
          <div className="flex items-center mb-2">
            <span className="w-60">Tanggal Lahir</span>:
            {editMode.tanggalLahir ? (
              <input
                type="date"
                value={data.tanggalLahir}
                onChange={(e) => handleChange("tanggalLahir", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.tanggalLahir}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("tanggalLahir")}
            />
          </div>

          {/* Nama Ibu Kandung */}
          <div className="flex items-center mb-2">
            <span className="w-60">Nama Ibu Kandung</span>:
            {editMode.namaIbuKandung ? (
              <input
                type="text"
                value={data.namaIbuKandung}
                onChange={(e) => handleChange("namaIbuKandung", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.namaIbuKandung}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("namaIbuKandung")}
            />
          </div>
        </div>
      </div>

      {/* Kategori: Status */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Status
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex items-center">
            <span className="w-60">Status Perkawinan</span>:
            {editMode.statusPerkawinan ? (
              <input
                type="text"
                value={data.statusPerkawinan}
                onChange={(e) =>
                  handleChange("statusPerkawinan", e.target.value)
                }
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.statusPerkawinan}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("statusPerkawinan")}
            />
          </div>
          <div className="flex items-center">
            <span className="w-60">Kedudukan dalam Keluarga</span>:
            {editMode.kedudukanDalamKeluarga ? (
              <input
                type="text"
                value={data.kedudukanDalamKeluarga}
                onChange={(e) =>
                  handleChange("kedudukanDalamKeluarga", e.target.value)
                }
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.kedudukanDalamKeluarga}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("kedudukanDalamKeluarga")}
            />
          </div>
        </div>
      </div>

      {/* Kategori: Pendidikan dan Pekerjaan */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Pendidikan dan Pekerjaan
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex items-center">
            <span className="w-60">Pendidikan Terakhir</span>:
            {editMode.pendidikanTerakhir ? (
              <input
                type="text"
                value={data.pendidikanTerakhir}
                onChange={(e) =>
                  handleChange("pendidikanTerakhir", e.target.value)
                }
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.pendidikanTerakhir}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("pendidikanTerakhir")}
            />
          </div>
          <div className="flex items-center">
            <span className="w-60">Pekerjaan</span>:
            {editMode.pekerjaan ? (
              <input
                type="text"
                value={data.pekerjaan}
                onChange={(e) => handleChange("pekerjaan", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.pekerjaan}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("pekerjaan")}
            />
          </div>
        </div>
      </div>

      {/* Kategori: Alamat */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Alamat
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex items-center">
            <span className="w-60">Alamat Lengkap</span>:
            {editMode.alamatLengkap ? (
              <input
                type="text"
                value={data.alamatLengkap}
                onChange={(e) => handleChange("alamatLengkap", e.target.value)}
                className="ml-2 border border-primary-200 rounded px-2 py-1"
              />
            ) : (
              <span className="ml-2">{data.alamatLengkap}</span>
            )}
            <FaEdit
              className="ml-2 text-primary-600 cursor-pointer"
              onClick={() => handleEditToggle("alamatLengkap")}
            />
          </div>
        </div>
      </div>

      {/* Data Lain-Lain */}
      {data.dataTambahan && (
        <LainLainEditForm
          dataTambahan={data.dataTambahan}
          editMode={editMode}
          handleEditToggle={handleEditToggle}
          handleChange={handleChange}
        />
      )}

      <div className="flex justify-between">
        <button
          onClick={() => router.push("/beranda")}
          className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
        >
          Back to List
        </button>
        <button
          onClick={handleEdit}
          className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
        >
          Update Data
        </button>
      </div>
    </div>
  );
};

export default DetailPage;

function calculateAge(birthdate: string) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
