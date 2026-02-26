import { NavbarOption } from "@/components/Navbar/NavbarOption";
import { SearchBar } from "./Searchbar/SearchBar";
import { ChartColumnIncreasing } from "lucide-react";

export const StartPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col gap-y-2 items-center justify-center">
        <SearchBar />
        <NavbarOption title="Leaderboard" icon={<ChartColumnIncreasing size={20}/>} link="/leaderboard"/>
      </div>
    </>
  );
};
