import { useState } from "react";
import FormDataUtama from "../../components/form/formDataUtama";
import FormDataTambahan from "../../components/form/formDataTambahan";
import DashboardLayout from "@/layout/layout";
import { jwtDecode } from "jwt-decode";

export default function InputData() {
  const [formDataUtama, setFormDataUtama] = useState({
    nama: "",
    nikKk: "",
    nik: "",
    jenisKelamin: "",
    statusPerkawinan: "",
    tempatLahir: "",
    tanggalLahir: "",
    pendidikanTerakhir: "",
    pekerjaan: "",
    alamatLengkap: "",
    kedudukanDalamKeluarga: "",
    namaIbuKandung: "",
  });

  const [formDataTambahan, setFormDataTambahan] = useState({
    jenisBantuan: "",
    jenisUsulan: "",
    anakYatim: "",
    kendaraan: "",
    jamban: "",
    statusRumah: "",
    ternak: "",
    bpjs: "",
    tki: "",
    umkm: "",
    ibuHamil: "",
    jandaDuda: "",
  });

  const [currentForm, setCurrentForm] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    formSetter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { id, value } = e.target;
    formSetter((prevState: any) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleNextForm = () => {
    setCurrentForm(2);
  };

  const handlePrevForm = () => {
    setCurrentForm(1);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }

      const decodedToken: { id: string } = jwtDecode(token);
      const kawilId = decodedToken?.id;

      const response = await fetch("/api/submitData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kawilId,
          formDataUtama,
          formDataTambahan,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DashboardLayout>
      {currentForm === 1 && (
        <FormDataUtama
          formData={formDataUtama}
          handleInputChange={handleInputChange}
          formSetter={setFormDataUtama}
          onNext={handleNextForm}
        />
      )}
      {currentForm === 2 && (
        <FormDataTambahan
          formData={formDataTambahan}
          handleInputChange={handleInputChange}
          formSetter={setFormDataTambahan}
          onPrev={handlePrevForm}
          onSubmit={handleSubmit}
        />
      )}
    </DashboardLayout>
  );
}
