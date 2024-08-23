import { FaEdit } from "react-icons/fa";
import React from "react";

type DataTambahan = {
  anakYatim?: string;
  kendaraan?: string;
  jamban?: string;
  statusRumah?: string;
  ternak?: string;
  bpjs?: string;
  tki?: string;
  umkm?: string;
  jandaDuda?: string;
  ibuHamil?: string;
};

type LainLainEditFormProps = {
  dataTambahan: DataTambahan;
  editMode: { [key: string]: boolean };
  handleEditToggle: (key: string) => void;
  handleChange: (key: string, value: string) => void;
};

const LainLainEditForm: React.FC<LainLainEditFormProps> = ({
  dataTambahan,
  editMode,
  handleEditToggle,
  handleChange,
}) => {
  return (
    <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
      <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
        Lain-Lain
      </h2>
      <div className="space-y-2 text-gray-900 font-medium leading-loose">
        {/* Anak Yatim */}
        <div className="flex items-center">
          <span className="w-60">Anak Yatim</span>:
          {editMode.anakYatim ? (
            <input
              type="text"
              value={dataTambahan.anakYatim || ""}
              onChange={(e) =>
                handleChange("dataTambahan.anakYatim", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan.anakYatim || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("anakYatim")}
          />
        </div>

        {/* Kendaraan */}
        <div className="flex items-center">
          <span className="w-60">Kendaraan</span>:
          {editMode.kendaraan ? (
            <input
              type="text"
              value={dataTambahan.kendaraan || ""}
              onChange={(e) =>
                handleChange("dataTambahan.kendaraan", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan.kendaraan || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("kendaraan")}
          />
        </div>

        <div className="flex items-center">
          <span className="w-60">Jamban</span>:{" "}
          {editMode.jamban ? (
            <input
              type="text"
              value={dataTambahan?.jamban || ""}
              onChange={(e) =>
                handleChange("dataTambahan.jamban", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.jamban || "Tidak Ada" || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("jamban")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">Status Rumah</span>:{" "}
          {editMode.statusRumah ? (
            <input
              type="text"
              value={dataTambahan?.statusRumah || ""}
              onChange={(e) =>
                handleChange("dataTambahan.statusRumah", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.statusRumah || "Tidak Ada"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("statusRumah")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">Ternak</span>:{" "}
          {editMode.ternak ? (
            <input
              type="text"
              value={dataTambahan?.ternak || ""}
              onChange={(e) =>
                handleChange("dataTambahan.ternak", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.ternak || "Tidak Ada" || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("ternak")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">BPJS</span>:{" "}
          {editMode.bpjs ? (
            <input
              type="text"
              value={dataTambahan?.bpjs || ""}
              onChange={(e) =>
                handleChange("dataTambahan.bpjs", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.bpjs || "Tidak Ada" || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("bpjs")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">TKI</span>:{" "}
          {editMode.tki ? (
            <input
              type="text"
              value={dataTambahan?.tki || ""}
              onChange={(e) => handleChange("dataTambahan.tki", e.target.value)}
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.tki || "Tidak Ada" || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("tki")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">UMKM</span>:{" "}
          {editMode.umkm ? (
            <input
              type="text"
              value={dataTambahan?.umkm || ""}
              onChange={(e) =>
                handleChange("dataTambahan.umkm", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.umkm || "Tidak Ada" || "Tidak ada data"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("umkm")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">Janda/Duda</span>:{" "}
          {editMode.jandaDuda ? (
            <input
              type="text"
              value={dataTambahan?.jandaDuda || ""}
              onChange={(e) =>
                handleChange("dataTambahan.jandaDuda", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.jandaDuda || "Tidak Ada"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("jandaDuda")}
          />
        </div>
        <div className="flex items-center">
          <span className="w-60">Ibu Hamil</span>:{" "}
          {editMode.ibuHamil ? (
            <input
              type="text"
              value={dataTambahan?.ibuHamil || ""}
              onChange={(e) =>
                handleChange("dataTambahan.ibuHamil", e.target.value)
              }
              className="ml-2 border border-primary-200 rounded px-2 py-1"
            />
          ) : (
            <span className="ml-2">
              {dataTambahan?.ibuHamil || "Tidak Ada"}
            </span>
          )}
          <FaEdit
            className="ml-2 text-primary-600 cursor-pointer"
            onClick={() => handleEditToggle("ibuHamil")}
          />
        </div>
      </div>
    </div>
  );
};

export default LainLainEditForm;
