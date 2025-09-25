import { Search } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { findEnemyAndGetStats } from "../utils/requests";
import "./SearchBar.css";
import type { Games } from "@/types/Games";
import type { Stats } from "@/types/Stats";
interface EnemySearchbarProps {
  setEnemyStats: (stats: Stats & { avatar: string; nickname: string }) => void;
}
export const EnemySearchbar = ({ setEnemyStats }: EnemySearchbarProps) => {
  const [nickname, setNickname] = useState<string>("");
  const handleSearch = () => {
    if (nickname.trim()) {
      findEnemyAndGetStats(nickname, setEnemyStats);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-x-2 ">
        <div className="enemy_searchbar__container flex ">
          <input
            autoFocus
            className="searchbar__input w-100"
            type="text"
            placeholder="Ник / Ссылка для сравнения "
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="cursor-pointer">
            <Search color="white" onClick={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
};
