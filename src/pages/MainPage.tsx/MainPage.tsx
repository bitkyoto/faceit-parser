import { GameTable } from "@/components/GameTable/GameTable";
import { MapTable } from "@/components/MapTable/MapTable";
import { Navbar } from "@/components/Navbar/Navbar";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { getStatsByMap } from "@/components/utils/requests";
import { useStore } from "@/components/zustand/store";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const { profile, setMapStats } = useStore((store) => store);
  const [currentPage, setCurrentPage] = useState("main");
  useEffect(() => {
    if (profile) {
      getStatsByMap(profile["player_id"], setMapStats);
    }
  }, [profile]);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-4 flex flex-col gap-y-4">
        <div className="flex justify-center items-center">
          <Navbar setCurrentOption={setCurrentPage} />
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-start">
          <ProfileCard />
          {currentPage === "main" && <GameTable />}
          {currentPage === "maps" && <MapTable />}
        </div>
      </div>
    </div>
  );
};
