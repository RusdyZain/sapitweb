import { useState } from "react";

interface FormDataProps {
  formData: {
    jenisBantuan: string;
    jenisUsulan: string;
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
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    formSetter: React.Dispatch<React.SetStateAction<any>>
  ) => void;
  formSetter: React.Dispatch<React.SetStateAction<any>>;
  onPrev: () => void;
  onSubmit: () => void;
}

const FormData: React.FC<FormDataProps> = ({
  formData,
  handleInputChange,
  formSetter,
  onPrev,
  onSubmit,
}) => {
  const [jumlahKendaraan, setJumlahKendaraan] = useState("");
  const [isTki, setIsTki] = useState(false);
  const [negara, setNegara] = useState("");

  const handleTkiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "Ya") {
      setIsTki(true);
      formSetter((prevState: any) => ({
        ...prevState,
        tki: "",
      }));
    } else {
      setIsTki(false);
      formSetter((prevState: any) => ({
        ...prevState,
        tki: value,
      }));
    }
  };

  const handleNegaraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNegara(value);
    formSetter((prevState: any) => ({
      ...prevState,
      tki: value,
    }));
  };

  const handleKendaraanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleInputChange(e, formSetter);
  };

  const handleJumlahChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setJumlahKendaraan(value);
    formSetter((prevState: any) => ({
      ...prevState,
      kendaraan: `${formData.kendaraan} - ${value}`,
    }));
  };

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          htmlFor="jenisBantuan"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Jenis Bantuan
        </label>
        <select
          id="jenisBantuan"
          value={formData.jenisBantuan}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="PKH">PKH</option>
          <option value="BPNP">BPNP</option>
          <option value="BST">BST</option>
          <option value="BLT DD">BLT DD</option>
          <option value="BLT BBM">BLT BBM</option>
          <option value="PBI">PBI</option>
          <option value="PKH dan BPNT Non-Aktif">PKH dan BPNT Non-Aktif</option>
          <option value="Belum Dapat">Belum Dapat</option>
          <option value="Tidak Dapat">Tidak Dapat</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="jenisUsulan"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Jenis Usulan
        </label>
        <select
          id="jenisUsulan"
          value={formData.jenisUsulan}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Tidak Ada Usulan">Tidak Ada Usulan</option>
          <option value="PKH">PKH</option>
          <option value="BPNP">BPNP</option>
          <option value="BST">BST</option>
          <option value="BLT DD">BLT DD</option>
          <option value="BLT BBM">BLT BBM</option>
          <option value="PBI">PBI</option>
          <option value="PKH dan BPNT Non-Aktif">PKH dan BPNT Non-Aktif</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="anakYatim"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Anak Yatim
        </label>
        <select
          id="anakYatim"
          value={formData.anakYatim}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Ya">Ya</option>
          <option value="Tidak">Tidak</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="kendaraan"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Kendaraan
        </label>
        <select
          id="kendaraan"
          value={formData.kendaraan.split(" - ")[0]} // Ambil jenis kendaraan tanpa jumlah
          onChange={handleKendaraanChange}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Motor">Motor</option>
          <option value="Mobil">Mobil</option>
          <option value="Lain-lain">Lain-lain</option>
          <option value="Tidak Punya Kendaraan">Tidak Punya Kendaraan</option>
        </select>
        {(formData.kendaraan.startsWith("Motor") ||
          formData.kendaraan.startsWith("Mobil") ||
          formData.kendaraan.startsWith("Lain-lain")) && (
          <div>
            <label
              htmlFor="jumlahKendaraan"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900"
            >
              Jumlah Kendaraan
            </label>
            <input
              type="number"
              id="jumlahKendaraan"
              value={jumlahKendaraan}
              onChange={handleJumlahChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Jumlah Kendaraan"
            />
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="jamban"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Jamban
        </label>
        <select
          id="jamban"
          value={formData.jamban}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Milik Sendiri">Milik Sendiri</option>
          <option value="Tidak Memiliki">Tidak Memiliki</option>
          <option value="Numpang">Numpang</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="statusRumah"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Status Rumah
        </label>
        <select
          id="statusRumah"
          value={formData.statusRumah}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Tembok">Tembok</option>
          <option value="Setengah Pagar">Setengah Pagar</option>
          <option value="Pagar">Pagar</option>
          <option value="Numpang">Numpang</option>
          <option value="Lain-lain">Lain-lain</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="ternak"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ternak
        </label>
        <select
          id="ternak"
          value={formData.ternak}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Tidak Ada">Tidak Ada</option>
          <option value="Simental">Simental</option>
          <option value="Limosin">Limosin</option>
          <option value="Local">Local</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="bpjs"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          BPJS
        </label>
        <select
          id="bpjs"
          value={formData.bpjs}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="PBI">PBI</option>
          <option value="NON-PBI">NON-PBI</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="tki"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          TKI
        </label>
        <select
          id="tki"
          value={isTki ? "Ya" : formData.tki}
          onChange={handleTkiChange}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Ya">Ya</option>
          <option value="Tidak">Tidak</option>
        </select>
        {isTki && (
          <div>
            <label
              htmlFor="negara"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900"
            >
              Negara Arah TKI
            </label>
            <input
              type="text"
              id="negara"
              value={negara}
              onChange={handleNegaraChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Masukkan Negara"
            />
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="umkm"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          UMKM
        </label>
        <select
          id="umkm"
          value={formData.umkm}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Bakulan">Bakulan</option>
          <option value="Kios">BPNP</option>
          <option value="Pabrik Tahu">Pabrik Tahu</option>
          <option value="Penggilingan Padi">Penggilingan Padi</option>
          <option value="Lain-Lain">Lain-Lain</option>
          <option value="Bukan UMKM">Bukan UMKM</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="jandaDuda"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Janda Duda
        </label>
        <select
          id="jandaDuda"
          value={formData.jandaDuda}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Lajang">Lajang</option>
          <option value="Janda">Janda</option>
          <option value="Duda">Duda</option>
          <option value="Tidak Janda/Duda">Tidak Janda/Duda</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="ibuHamil"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ibu Hamil
        </label>
        <select
          id="ibuHamil"
          value={formData.ibuHamil}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Pilih</option>
          <option value="Masih Hamil">Masih Hamil</option>
          <option value="Sudah Melahirkan">Sudah Melahirkan</option>
          <option value="Tidak Hamil">Tidak Hamil</option>
          <option value="Bukan Ibu/Perempuan">Bukan Ibu/Perempuan</option>
        </select>
      </div>

      <div className="col-span-2 flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-warning-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-warning-500"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default FormData;
