import React from "react";

export default function MapsAbout() {
  return (
    <>
      {/* New Section with 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {/* Left Column for Map */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Peta Desa Sapit</h2>
          <div className="w-full h-60 sm:h-80 md:h-96 lg:h-[500px] rounded-lg">
            {/* Replace the following div with actual map integration */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79585.11273840627!2d116.5101313960744!3d-8.463428743639614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc312565152099%3A0x5030bfbcaf7df10!2sSapit%2C%20Kec.%20Suela%2C%20Kabupaten%20Lombok%20Timur%2C%20Nusa%20Tenggara%20Bar.!5e1!3m2!1sid!2sid!4v1724268962990!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column for About Desa Sapit */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Apa itu Desa Sapit</h2>
          <p className="text-lg leading-relaxed">
            Tersembunyi di antara hamparan hijau perbukitan Lombok Timur, Desa
            Sapit menyimpan sejuta pesona alam dan budaya yang memukau. Sejak
            tahun 2004, Desa Sapit telah diubah menjadi bagian dari Kecamatan
            Suela, sebelumnya merupakan bagian dari Kecamatan Pringgabaya.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Secara budaya, Desa Sapit memiliki kekayaan tradisi yang beragam,
            seperti Maulid Bleq (Maulid Adad), Bebubus Batu, Reban Yelamet,
            Ngayu-Ayu, dan Tolak Bahla, yang juga dikenal di daerah lain. Nama
            Desa Sapit sendiri masih menjadi misteri, namun menurut babad, nama
            Sapit sudah ada jauh sebelum runtuhnya Kerajaan Pamatan, menandakan
            bahwa desa ini adalah salah satu yang tertua di wilayah Sasak
            Lombok.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Dengan keindahan alam yang luar biasa dan kekayaan budaya yang
            mendalam, Desa Sapit terus berkembang menjadi tujuan wisata yang
            lestari dan berdaya saing, memadukan keindahan alam dengan
            nilai-nilai tradisional yang masih dijunjung tinggi oleh
            masyarakatnya.
          </p>
        </div>
      </div>
    </>
  );
}
