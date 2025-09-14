import { useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { StatsTable } from "../StatsTable/StatsTable";
import { useStore } from "../zustand/store";
import { getStats } from "../utils/requests";
import lvl1 from "../../assets/1.png";
import lvl2 from "../../assets/2.png";
import lvl3 from "../../assets/3.png";
import lvl4 from "../../assets/4.png";
import lvl5 from "../../assets/5.png";
import lvl6 from "../../assets/6.png";
import lvl7 from "../../assets/7.png";
import lvl8 from "../../assets/8.png";
import lvl9 from "../../assets/9.png";
import lvl10 from "../../assets/10.png";
import user from "../../assets/user.png";

const levelImages: Record<string, string> = {
  "1": lvl1,
  "2": lvl2,
  "3": lvl3,
  "4": lvl4,
  "5": lvl5,
  "6": lvl6,
  "7": lvl7,
  "8": lvl8,
  "9": lvl9,
  "10": lvl10,
};

export const ProfileCard = () => {
  const { profile, setGames } = useStore((state) => state);

  useEffect(() => {
    if (profile) {
      getStats(profile["player_id"], setGames);
    }
  }, [profile]);

  if (!profile) {
    return null;
  }

  const cs2Game = profile.games?.cs2;
  const lvl = cs2Game?.skill_level?.toString() || "1";

  const handleAvatarClick = () => {
    if (profile.faceit_url) {
      const url = profile.faceit_url.replace("{lang}", "en");
      window.open(url, "_blank");
    }
  };

  return (
    <Card className="max-w-[700px] dark">
      <CardContent>
        <div className="flex gap-x-20">
          <div className="flex flex-col items-center justify-center">
            <div>{profile.nickname}</div>
            <div className="relative">
              <img
                src={profile.avatar ? profile.avatar : user}
                alt="avatar"
                className="w-25 rounded-full cursor-pointer"
                onClick={handleAvatarClick}
              />
              <img
                src={levelImages[lvl]}
                alt="lvl"
                className="absolute -top-1 -right-1 w-8 h-8"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col border-[1px] rounded-[10px]">
            <span className="text-center py-2">Статистика</span>
            <StatsTable />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
