import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useStore } from "../zustand/store";

type MapColumn = "Winrate" | "KD" | "KR" | "ADR" | "HS" | "Matches";

export const MapTable = () => {
  const { mapStats } = useStore((store) => store);
  const [sortedMapStats, setSortedMapStats] = useState<any[]>([]);
  const [descOrder, setDescOrder] = useState(true);

  useEffect(() => {
    if (mapStats) {
      const sorted = [...mapStats].sort(
        (a, b) => b.stats["Matches"] - a.stats["Matches"]
      );
      setSortedMapStats(sorted);
    }
  }, [mapStats]);

  const sortByColumn = (column: MapColumn) => {
    if (!sortedMapStats.length) return;

    const newDescOrder = !descOrder;
    setDescOrder(newDescOrder);
    let sorted = undefined;
    switch (column) {
      case "Matches":
        sorted = [...sortedMapStats].sort((a, b) =>
          newDescOrder
            ? b.stats["Matches"] - a.stats["Matches"]
            : a.stats["Matches"] - b.stats["Matches"]
        );
        setSortedMapStats(sorted);
        break;
      case "Winrate":
        sorted = [...sortedMapStats].sort((a, b) =>
          newDescOrder
            ? parseFloat(b.stats["Win Rate %"]) -
              parseFloat(a.stats["Win Rate %"])
            : parseFloat(a.stats["Win Rate %"]) -
              parseFloat(b.stats["Win Rate %"])
        );
        setSortedMapStats(sorted);
        break;
      case "ADR":
        sorted = [...sortedMapStats].sort((a, b) =>
          newDescOrder
            ? parseFloat(b.stats["ADR"]) - parseFloat(a.stats["ADR"])
            : parseFloat(a.stats["ADR"]) - parseFloat(b.stats["ADR"])
        );
        setSortedMapStats(sorted);
        break;
      case "HS":
        sorted = [...sortedMapStats].sort((a, b) =>
          newDescOrder
            ? parseFloat(b.stats["Average Headshots %"]) -
              parseFloat(a.stats["Average Headshots %"])
            : parseFloat(a.stats["Average Headshots %"]) -
              parseFloat(b.stats["Average Headshots %"])
        );
        setSortedMapStats(sorted);
        break;
      case "KD":
        sorted = [...sortedMapStats].sort((a, b) =>
          newDescOrder
            ? parseFloat(b.stats["Average K/D Ratio"]) -
              parseFloat(a.stats["Average K/D Ratio"])
            : parseFloat(a.stats["Average K/D Ratio"]) -
              parseFloat(b.stats["Average K/D Ratio"])
        );
        setSortedMapStats(sorted);
        break;
      case "KR":
        sorted = [...sortedMapStats].sort((a, b) =>
          newDescOrder
            ? parseFloat(b.stats["Average K/R Ratio"]) -
              parseFloat(a.stats["Average K/R Ratio"])
            : parseFloat(a.stats["Average K/R Ratio"]) -
              parseFloat(b.stats["Average K/R Ratio"])
        );
        setSortedMapStats(sorted);
        break;
    }
  };

  const handleColors = (col: MapColumn, res: string) => {
    if (col === "Winrate") {
      return parseFloat(res) > 50 ? "text-green-400" : "text-red-500";
    }
    if (col === "KD") {
      return parseFloat(res) >= 1 ? "text-green-400" : "text-red-500";
    }
    if (col === "KR") {
      return parseFloat(res) >= 0.7 ? "text-green-400" : "text-red-500";
    }
    if (col === "ADR") {
      return parseFloat(res) >= 70 ? "text-green-400" : "text-red-500";
    }
    return "";
  };

  const renderStats = () => {
    if (!sortedMapStats.length) {
      return (
        <TableRow>
          <TableCell colSpan={7} className="text-center">
            Нет данных
          </TableCell>
        </TableRow>
      );
    }

    return sortedMapStats.map((map: any) => (
      <TableRow key={map.label} className="text-center">
        <TableCell>{`de_${map.label.toLowerCase()}`}</TableCell>
        <TableCell>{map.stats["Matches"]}</TableCell>
        <TableCell className={handleColors("Winrate", map.stats["Win Rate %"])}>
          {map.stats["Win Rate %"]}
        </TableCell>
        <TableCell
          className={handleColors("KD", map.stats["Average K/D Ratio"])}
        >
          {map.stats["Average K/D Ratio"]}
        </TableCell>
        <TableCell
          className={handleColors("KR", map.stats["Average K/R Ratio"])}
        >
          {map.stats["Average K/R Ratio"]}
        </TableCell>
        <TableCell className={handleColors("ADR", map.stats.ADR)}>
          {map.stats.ADR}
        </TableCell>
        <TableCell>{map.stats["Average Headshots %"]}</TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="dark border rounded-[10px] text-foreground text-center flex flex-col py-2 gap-y-1  bg-card">
      <Table className="lg:w-200">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Map</TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => sortByColumn("Matches")}
            >
              Matches
            </TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => sortByColumn("Winrate")}
            >
              Winrate %
            </TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => sortByColumn("KD")}
            >
              Average K/D
            </TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => sortByColumn("KR")}
            >
              Average K/R
            </TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => sortByColumn("ADR")}
            >
              ADR
            </TableHead>
            <TableHead
              className="text-center cursor-pointer"
              onClick={() => sortByColumn("HS")}
            >
              HS%
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{renderStats()}</TableBody>
      </Table>
    </div>
  );
};
