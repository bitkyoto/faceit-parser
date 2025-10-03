import { Search } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { findEnemyAndGetStats } from "@/utils/requests";
import "./searchbar.css";
import type { StatsWithAvatarAndNickname } from "@/types/Stats";

interface EnemySearchbarProps {
  setEnemyStats: (stats: StatsWithAvatarAndNickname) => void;
}

export const EnemySearchbar = ({ setEnemyStats }: EnemySearchbarProps) => {
  const [nickname, setNickname] = useState<string>("");

  const handleSearch = () => {
    if (nickname.trim()) {
      findEnemyAndGetStats(nickname, setEnemyStats);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center gap-x-2">
      <div className="enemy_searchbar__container flex">
        <input
          autoFocus
          className="searchbar__input md:w-100"
          type="text"
          placeholder="Ник / Ссылка для сравнения"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="cursor-pointer">
          <Search color="white" onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};
