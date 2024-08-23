import React, { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Tabel from "@/components/subcomponents/tabel";

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

interface LaporanProps {
  searchQuery: string;
  searchType: string;
}

export default function Laporan({ searchQuery, searchType }: LaporanProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("/api/data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = data.filter((item) => {
    if (searchType === "nama") {
      return item.nama.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchType === "nik") {
      return item.nik.includes(searchQuery);
    }
    return true;
  });

  const startIndex = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (startIndex + itemsPerPage < filteredData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="font-primary">
      <Tabel
        data={currentPageData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <div className="flex justify-between mt-4">
        {currentPage > 0 && (
          <button
            onClick={handlePreviousPage}
            className="border border-black px-2 flex items-center justify-center py-1 text-white bg-blue-500 rounded-lg hover:bg-secondary-100"
          >
            <GrFormPrevious className="text-black text-lg" />
            <span className="ml-2 text-black text-sm">Previous</span>
          </button>
        )}
        {startIndex + itemsPerPage < filteredData.length && (
          <button
            onClick={handleNextPage}
            className="border border-black px-2 flex items-center justify-center py-1 text-white bg-blue-500 rounded-lg hover:bg-secondary-100"
          >
            <span className="mr-2 text-black text-sm">Next</span>
            <GrFormNext className="text-black text-lg" />
          </button>
        )}
      </div>
    </div>
  );
}
