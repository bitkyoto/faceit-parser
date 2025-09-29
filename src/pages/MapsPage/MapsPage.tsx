import { MapTable } from "@/components/MapTable/MapTable";
import { Navbar } from "@/components/Navbar/Navbar";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { findPlayer, getStats, getStatsByMap } from "@/utils/requests";
import { useStore } from "@/components/zustand/store";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const MapsPage = () => {
  const { setProfile, profile, setMapStats, setStats } = useStore(
    (store) => store
  );
  const [searchParams] = useSearchParams();
  const id = searchParams.get("player");

  useEffect(() => {
    if (!id) return;
    if (!profile || profile.id !== id) {
      findPlayer(id, setProfile);
    }
  }, [id]);
  useEffect(() => {
    if (profile) {
      getStats(profile.player_id, setStats);
      getStatsByMap(profile.player_id, setMapStats);
    }
  }, [profile]);
  return (
    <div className="w-full mt-4 flex flex-col gap-y-4">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-start">
        <ProfileCard />
        <MapTable />
      </div>
    </div>
  );
};
