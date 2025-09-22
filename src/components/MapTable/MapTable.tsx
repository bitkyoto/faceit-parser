import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useStore } from "../zustand/store";
type MapColumn = "Winrate" | "KD" | "KR" | "ADR" | "HS";
export const MapTable = () => {
  const { mapStats } = useStore((store) => store);
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
    if (!mapStats) {
      return (
        <TableRow>
          <TableCell colSpan={6} className="text-center">
            Нет данных
          </TableCell>
        </TableRow>
      );
    } else {
      return mapStats.map((map: any) => (
        <TableRow key={map.label} className="text-center">
          <TableCell>{`de_${map.label.toLowerCase()}`}</TableCell>
          <TableCell>{map.stats["Matches"]}</TableCell>
          <TableCell
            className={handleColors("Winrate", map.stats["Win Rate %"])}
          >
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
    }
  };

  return (
    <div className="dark border rounded-[10px] text-foreground text-center flex flex-col pb-2 gap-y-1">
      <Table className="dark m-auto lg:w-200 max-w-4xl">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Map</TableHead>
            <TableHead className="text-center">Matches</TableHead>
            <TableHead className="text-center">Winrate %</TableHead>
            <TableHead className="text-center">Average K/D</TableHead>
            <TableHead className="text-center">Average K/R</TableHead>
            <TableHead className="text-center">ADR</TableHead>
            <TableHead className="text-center">HS%</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{renderStats()}</TableBody>
      </Table>
    </div>
  );
};
