import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useStore } from "../zustand/store";
export const MapTable = () => {
  const { mapStats } = useStore((store) => store);

  const renderStats = () => {
    if (!mapStats) {
      return (
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            Нет данных
          </TableCell>
        </TableRow>
      );
    } else {
      return mapStats.map((map) => (
        <TableRow key={map.label}>
          <TableCell className="text-center">{map.label}</TableCell>
          <TableCell className="text-center">
            {map.stats["Win Rate %"]}
          </TableCell>
          <TableCell className="text-center">
            {map.stats["Average K/D Ratio"]}
          </TableCell>
          <TableCell className="text-center">
            {map.stats["Average K/R Ratio"]}
          </TableCell>
          <TableCell className="text-center">
            {map.stats.ADR}
          </TableCell>
          <TableCell className="text-center">
            {map.stats["Average Headshots %"]}
          </TableCell>
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
