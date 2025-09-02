import { useEffect, useState } from "react";
import "./App.css";
import { GameTable } from "./components/GameTable/GameTable";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { SearchBar } from "./components/searchbar/SearchBar";

function App() {
  return (
    <div className="flex flex-col items-center py-2">
      <SearchBar />
      <div className="w-full mt-5">
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-start">
          <ProfileCard />
          <GameTable />
        </div>
      </div>
    </div>
  );
}

export default App;
