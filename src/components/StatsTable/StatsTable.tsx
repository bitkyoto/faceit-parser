import { useStore } from "../zustand/store";
import { getAdr, getAvg, getKd, getKr, getWinrate } from "../utils/utils";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

export const StatsTable = () => {
  const { games, profile } = useStore((state) => state);

  if (!games?.items) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="w-full">
      {/* Таблица для больших экранов */}
      <div className="hidden md:block">
        <Table className="dark">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Elo</TableHead>
              <TableHead className="text-center">Winrate</TableHead>
              <TableHead className="text-center">Avg K.</TableHead>
              <TableHead className="text-center">KD</TableHead>
              <TableHead className="text-center">KR</TableHead>
              <TableHead className="text-center">ADR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="font-medium text-center">
              <TableCell>{profile.games.cs2["faceit_elo"]}</TableCell>
              <TableCell>{getWinrate(games.items)}</TableCell>
              <TableCell>{getAvg(games.items)}</TableCell>
              <TableCell>{getKd(games.items)}</TableCell>
              <TableCell>{getKr(games.items)}</TableCell>
              <TableCell>{getAdr(games.items)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Вертикальные карточки для маленьких экранов */}
      <div className="md:hidden grid grid-cols-2 gap-2">
        <div className="bg-secondary p-2 rounded-lg text-center">
          <div className="text-sm text-muted-foreground">Winrate</div>
          <div className="font-medium">{getWinrate(games.items)}%</div>
        </div>
        <div className="bg-secondary p-2 rounded-lg text-center">
          <div className="text-sm text-muted-foreground">Avg K.</div>
          <div className="font-medium">{getAvg(games.items)}</div>
        </div>
        <div className="bg-secondary p-2 rounded-lg text-center">
          <div className="text-sm text-muted-foreground">KD</div>
          <div className="font-medium">{getKd(games.items)}</div>
        </div>
        <div className="bg-secondary p-2 rounded-lg text-center">
          <div className="text-sm text-muted-foreground">KR</div>
          <div className="font-medium">{getKr(games.items)}</div>
        </div>
        <div className="bg-secondary p-2 rounded-lg text-center">
          <div className="text-sm text-muted-foreground">ADR</div>
          <div className="font-medium">{getAdr(games.items)}</div>
        </div>
      </div>
    </div>
  );
};
