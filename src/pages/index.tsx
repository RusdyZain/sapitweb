import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import BerandaLayout from "@/layout/layoutBeranda";
import MapsAbout from "@/components/beranda/mapsAbout";

export default function Home() {
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition((prevTransition) => (prevTransition + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BerandaLayout>
      {/* Section for Background Image with Welcome Text */}
      <div
        className={`relative bg-cover bg-fixed ${
          transition === 0
            ? "bg-[url('/images/bg1.jpg')]"
            : "bg-[url('/images/bg2.jpg')]"
        } ease-in-out duration-500`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <div className="bg-white h-4 w-full"></div>
          <div className="bg-gradient-to-b from-white to-transparent h-32 w-full mb-36"></div>
          <div className="grid justify-items-center text-white animate-fade">
            <h4 className="font-CoveredByYourGrace text-3xl md:text-xl">
              SELAMAT DATANG DI DESA SAPIT
            </h4>
            <h1 className="font-Roboto font-bold text-6xl w-[40%] md:w-[70%] sm:w-full text-center my-6 md:text-5xl sm:text-4xl">
              KEINDAHAN DI LERENG GUNUNG RINJANI
            </h1>
            <p className="w-[35%] md:w-[50%] sm:w-full font-Roboto text-center md:text-md">
              Desa Sapit terletak di ketinggian 700 hingga 1100 meter di atas
              permukaan laut, di lereng Gunung Rinjani, dengan pemandangan alam
              yang memukau dan udara yang sejuk. Terletak di Kecamatan Suela,
              Kabupaten Lombok Timur, Nusa Tenggara Barat.
            </p>
          </div>
          <div className="h-[26vh]"></div>
          <div className="bg-gradient-to-t from-white to-transparent h-64 w-full"></div>
          <div className="z-10 bg-white h-1 w-full mt-[-5px]"></div>
        </div>
      </div>

      <MapsAbout />
    </BerandaLayout>
  );
}
