import { LeaderBoardTable } from "@/components/LeaderBoardTable/LeaderBoardTable";
import { Navbar } from "@/components/Navbar/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getLeaderBoard } from "@/utils/requests";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const LeaderboardPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("EU");
  const [params, setParams] = useSearchParams();
  const [data, setData] = useState();
  useEffect(() => {
    if (!params.get("region")) {
      setParams({ region: selectedRegion });
    }
  }, [params]);
  useEffect(() => {
    setParams({ region: selectedRegion });
    getLeaderBoard(selectedRegion, setData);
  }, [selectedRegion]);
  return (
    <div className="w-full mt-4 flex flex-col gap-y-4">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <Select
          value={selectedRegion}
          onValueChange={(value) => setSelectedRegion(value)}
        >
          <SelectTrigger className="w-[180px] dark bg-card text-white">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent className="dark">
            <SelectItem value="EU">EU</SelectItem>
            <SelectItem value="NA">NA</SelectItem>
          </SelectContent>
        </Select>
        <LeaderBoardTable data={data} />
      </div>
    </div>
  );
};
