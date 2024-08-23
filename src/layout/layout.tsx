import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex bg-gray-100">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="w-full">
          <Header
            title="Dashboard"
            userName="Sapit"
            userStatus="Admin"
            profilePicture="/logo.png"
          />
          <div className={`duration-300 p-5 w-full`}>{children}</div>
        </div>
      </div>
    </>
  );
}
