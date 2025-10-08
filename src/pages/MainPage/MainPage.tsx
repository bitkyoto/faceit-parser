import { GameTable } from "@/components/GameTable/GameTable";
import { Navbar } from "@/components/Navbar/Navbar";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { findPlayer, getStats } from "@/utils/requests";
import { useStore } from "@/components/zustand/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const MainPage = () => {
  const { setProfile, profile, setStats } = useStore((store) => store);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("player");
  const [error, setError] = useState(undefined);
  useEffect(() => {
    if (!id) return;
    if (!profile || profile.id !== id) {
      findPlayer(id, setProfile, setError);
    }
  }, [id]);

  useEffect(() => {
    if (profile) {
      getStats(profile.player_id, setStats);
    }
  }, [profile]);
  return (
    <div className="w-full mt-4 flex flex-col gap-y-4">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex flex-col items-center gap-5 2xl:flex-row 2xl:items-start 2xl:justify-center">
        {error && (
          <div className="text-destructive">Не удалось найти игрока</div>
        )}
        <ProfileCard />
        <GameTable />
      </div>
    </div>
  );
};
