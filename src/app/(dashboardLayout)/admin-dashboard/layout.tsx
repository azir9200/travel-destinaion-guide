import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Apollo Gears",
  description: "Next Level Riding Sharing Service",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}