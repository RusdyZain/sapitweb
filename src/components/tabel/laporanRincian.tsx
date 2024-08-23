import React, { useState, useEffect } from "react";
import KepalaKeluarga from "@/components/subcomponents/dataFilter/kepalakeluarga";
import JumlahJiwa from "@/components/subcomponents/dataFilter/jumlahjiwa";
import Pekerjaan from "../subcomponents/dataFilter/pekerjaan";
import Bantuan from "../subcomponents/dataFilter/jenisbantuan";
import Pendidikan from "../subcomponents/dataFilter/pendidikan";
import JandaDuda from "../subcomponents/dataFilter/jandaduda";
import AnakYatim from "../subcomponents/dataFilter/anayatim";
import Umur from "../subcomponents/dataFilter/umur";
import Kendaraan from "../subcomponents/dataFilter/kendaraan";
import Jamban from "../subcomponents/dataFilter/jamban";
import StatusRumah from "../subcomponents/dataFilter/situsrumah";
import Ternak from "../subcomponents/dataFilter/ternak";
import BPJS from "../subcomponents/dataFilter/bpjs";
import TKI from "../subcomponents/dataFilter/tki";
import UMKM from "../subcomponents/dataFilter/umkm";

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

export default function LaporanRincian() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("/api/data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="font-primary">
      <KepalaKeluarga data={data} />
      <JumlahJiwa data={data} />
      <Pekerjaan data={data} />
      <Bantuan data={data} />
      <Pendidikan data={data} />
      <JandaDuda data={data} />
      <AnakYatim data={data} />
      <Umur data={data} />
      <Kendaraan data={data} />
      <Jamban data={data} />
      <StatusRumah data={data} />
      <Ternak data={data} />
      <BPJS data={data} />
      <TKI data={data} />
      <UMKM data={data} />
    </div>
  );
}
