import Navbar from "@/ui/shared/navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default CommonLayout;
