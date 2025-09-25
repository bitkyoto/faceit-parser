import { MapTable } from "@/components/MapTable/MapTable";
import { Navbar } from "@/components/Navbar/Navbar";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import React from "react";

export const MapsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-4 flex flex-col gap-y-4">
        <div className="flex justify-center items-center">
          <Navbar />
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-start">
          <ProfileCard />
          <MapTable />
        </div>
      </div>
    </div>
  );
};
