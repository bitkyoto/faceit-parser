import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import type { LeaderboardResponse } from "@/types/Leaderboard";
import Flag from "react-flagkit";

interface LeaderBoardTableProps {
  data: LeaderboardResponse | undefined;
}

export const LeaderBoardTable = ({ data }: LeaderBoardTableProps) => {
  const renderLeaderboard = () => {
    if (!data) {
      return (
        <TableRow>
          <TableCell colSpan={3} className="text-center">
            Нет доступной статистики
          </TableCell>
        </TableRow>
      );
    }
    return data.map((player) => (
      <TableRow
        key={player.position}
        className="cursor-pointer"
        onClick={() =>
          window.open(
            `https://www.faceit.com/en/players/${player.nickname}`,
            "_blank"
          )
        }
      >
        <TableCell className="py-4 text-center">{player.position}</TableCell>
        <TableCell className="text-center">
          <div className="flex items-center gap-2">
            <Flag country={player.country.toUpperCase()} />
            {player.nickname}
          </div>
        </TableCell>
        <TableCell className="text-center">{player.faceit_elo}</TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="dark border rounded-[10px] text-foreground text-center flex flex-col py-2 gap-y-1 bg-card">
      <Table className="lg:w-150">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-10">Placing</TableHead>
            <TableHead className="text-left">Player</TableHead>
            <TableHead className="text-center">Elo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{renderLeaderboard()}</TableBody>
      </Table>
    </div>
  );
};
