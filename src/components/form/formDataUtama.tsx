import React from "react";

interface FormDataProps {
  formData: {
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
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    formSetter: React.Dispatch<React.SetStateAction<any>>
  ) => void;
  formSetter: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}

const FormData: React.FC<FormDataProps> = ({
  formData,
  handleInputChange,
  formSetter,
  onNext,
}) => {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          htmlFor="nama"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nama
        </label>
        <input
          type="text"
          id="nama"
          value={formData.nama}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Nama"
        />
      </div>
      <div>
        <label
          htmlFor="nikKk"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          NO. KK
        </label>
        <input
          type="text"
          id="nikKk"
          value={formData.nikKk}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="NIK KK"
        />
      </div>
      <div>
        <label
          htmlFor="nik"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          NIK
        </label>
        <input
          type="text"
          id="nik"
          value={formData.nik}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="NIK"
        />
      </div>
      <div>
        <label
          htmlFor="jenisKelamin"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Jenis Kelamin
        </label>
        <select
          id="jenisKelamin"
          value={formData.jenisKelamin}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="statusPerkawinan"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Status Perkawinan
        </label>
        <select
          id="statusPerkawinan"
          value={formData.statusPerkawinan}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Belum Kawin">Belum Kawin</option>
          <option value="Kawin">Kawin</option>
          <option value="Cerai Hidup">Cerai Hidup</option>
          <option value="Cerai Mati">Cerai Mati</option>
          <option value="Belum Tercatat">Belum Tercatat</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="tempatLahir"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Tempat Lahir
        </label>
        <input
          type="text"
          id="tempatLahir"
          value={formData.tempatLahir}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Tempat Lahir"
        />
      </div>
      <div>
        <label
          htmlFor="tanggalLahir"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Tanggal Lahir
        </label>
        <input
          type="date"
          id="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor="pendidikanTerakhir"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Pendidikan Terakhir
        </label>
        <select
          id="pendidikanTerakhir"
          value={formData.pendidikanTerakhir}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Belum Sekolah">Tidak/Belum Sekolah</option>
          <option value="Belum Tamat SD">Belum Tamat SD/Sederajat</option>
          <option value="Tamat SD">Tamat SD/Sederajat</option>
          <option value="Belum Tamat SMP">Belum Tamat SLTP/SMP</option>
          <option value="Tamat SMP">Tamat SLTP/SMP</option>
          <option value="Belum Tamat SMA">Belum Tamat SLTA/SMA</option>
          <option value="Tamat SMA">Tamat SLTA/SMA</option>
          <option value="Sarjana">Diploma IV/Strata I</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="pekerjaan"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Pekerjaan
        </label>
        <input
          type="text"
          id="pekerjaan"
          value={formData.pekerjaan}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Pekerjaan"
        />
      </div>
      <div>
        <label
          htmlFor="alamatLengkap"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Alamat Lengkap
        </label>
        <input
          id="alamatLengkap"
          value={formData.alamatLengkap}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Alamat Lengkap"
        ></input>
      </div>
      <div>
        <label
          htmlFor="kedudukanDalamKeluarga"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Kedudukan dalam Keluarga
        </label>
        <input
          type="text"
          id="kedudukanDalamKeluarga"
          value={formData.kedudukanDalamKeluarga}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Kedudukan dalam Keluarga"
        />
      </div>
      <div>
        <label
          htmlFor="namaIbuKandung"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nama Ibu Kandung
        </label>
        <input
          type="text"
          id="namaIbuKandung"
          value={formData.namaIbuKandung}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Nama Ibu Kandung"
        />
      </div>

      <div className="col-span-2 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-warning-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormData;
