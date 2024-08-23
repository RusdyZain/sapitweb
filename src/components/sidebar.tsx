import { Dispatch, SetStateAction } from "react";
import { FaReadme } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import { useRouter } from "next/router";
import AuthHelper from "@/utils/authHelper";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const router = useRouter();

  const Menus = [
    {
      title: "Dashboard",
      path: "/beranda",
      icon: <MdSpaceDashboard />,
      spacing: false,
    },
    {
      title: "Rincian",
      path: "/rincian",
      icon: <FaReadme />,
      spacing: true,
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        AuthHelper.logout(router);
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div
      className={`bg-primary-600 h-screen fixed left-0 py-5 pt-8 font-poppins duration-300  ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      {/* Title */}
      <IoMdArrowDropleft
        className={`bg-transparent right-4 text-white text-3xl rounded-full absolute top-9 cursor-pointer  ${
          !open && "rotate-180 right-8"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex flex-col px-5 items-center">
        <Image
          src="/logo.png"
          alt="Company Logo"
          className={`cursor-pointer block float-left mr-3 duration-500 ${
            !open && "hidden"
          }`}
          width={200}
          height={50}
        />
        <h1
          className={`text-white text-2xl text-center font-bold duration-500 mt-[0.20rem] ${
            !open && "hidden"
          }`}
        >
          Dashboard Sapit
        </h1>
      </div>

      {/* Sub Menu */}
      <ul className="pt-10 items-center">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`text-white flex items-center gap-x-4 cursor-pointer p-3 ${
              router.pathname === menu.path
                ? "bg-primary-300 text-primary-600"
                : "hover:bg-primary-300 hover:text-primary-600"
            } px-5 mt-2`}
            onClick={() => router.push(menu.path)}
          >
            <span className="text-2xl block float-left">
              {menu.icon ? menu.icon : <GoHomeFill />}
            </span>
            <span className={`text-lg font-medium flex-1 ${!open && "hidden"}`}>
              {menu.title}
            </span>
          </li>
        ))}
        {/* Logout Button */}
        <li
          className={`text-white flex items-center gap-x-4 cursor-pointer p-3 mt-9 hover:bg-primary-300 hover:text-primary-600 px-5`}
          onClick={handleLogout}
        >
          <span className="text-2xl block float-left">
            <CgLogOut />
          </span>
          <span className={`text-lg font-medium flex-1 ${!open && "hidden"}`}>
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
}
