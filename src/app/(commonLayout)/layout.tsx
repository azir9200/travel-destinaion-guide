import type { Metadata } from "next";
import React from "react";
import NavBar from "./components/shared/Navbar";

export const metadata: Metadata = {
  title: "Travel-Guide",
  description: "Next Travel Destination Guide Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    
      <NavBar />
      {children}
      <h2> Footer </h2>
    </div>
  );
}
