import { useEffect, useState, type KeyboardEvent } from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";
import { findPlayer } from "../utils/requests";
import { useStore } from "../zustand/store";

export const SearchBar = () => {
  const [nickname, setNickname] = useState<string>("");
  const [response, setResponse] = useState<any>();
  const { setProfile } = useStore((state) => state);

  const handleSearch = () => {
    if (nickname.trim()) {
      findPlayer(nickname, setResponse);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (response) {
      setProfile(response);
    }
  }, [response, setProfile]);

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="searchbar__container">
          <input
            className="searchbar__input"
            type="text"
            placeholder="Никнейм игрока"
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
