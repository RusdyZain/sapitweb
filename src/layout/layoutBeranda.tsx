import { useState } from "react";

import Navbar from "@/components/navbar";

export default function BerandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-20 fixed w-full">
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
}
