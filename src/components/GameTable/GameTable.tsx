import { useEffect, useState } from "react";
import { formatDate, formatResult } from "../utils/utils";
import "./GameTable.css";
import { useStore } from "../zustand/store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { getMatch, getStats } from "../utils/requests";

type Column = "Result" | "Score" | "K/D";

export const GameTable = () => {
  const { profile, games, setGames } = useStore((store) => store);
  const [page, setPage] = useState<number>(0);
  const itemsPerPage = 20;

  const handleColors = (col: Column, res: string) => {
    if (col === "Result") {
      return res === "1" ? "text-green-400" : "text-red-500";
    }
    if (col === "K/D") {
      return parseFloat(res) >= 1 ? "text-green-400" : "text-red-500";
    }
    return "";
  };
  const handleMatchClick = async (matchId: string) => {
    try {
      const url = await getMatch(matchId);
      if (url) {
        window.open(url, "_blank");
      }
    } catch (error) {
      console.error("Failed to fetch match URL:", error);
    }
  };
  useEffect(() => {
    if (profile) {
      getStats(profile["player_id"], setGames);
    }
  }, [profile]);

  const totalPages = games?.items
    ? Math.ceil(games.items.length / itemsPerPage)
    : 0;

  const renderMatches = () => {
    if (!games?.items || games.items.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={9} className="text-center">
            Нет доступных матчей
          </TableCell>
        </TableRow>
      );
    }

    const div = [];
    const startIndex = page * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, games.items.length);

    for (let i = startIndex; i < endIndex; i++) {
      const game = games.items[i];
      div.push(
        <TableRow
          key={i}
          className="font-medium text-center cursor-pointer"
          onClick={() => handleMatchClick(game.stats["Match Id"])}
        >
          <TableCell>{formatDate(game.stats["Created At"])}</TableCell>
          <TableCell className={handleColors("Result", game.stats["Result"])}>
            {formatResult(game.stats["Result"])}
          </TableCell>
          <TableCell className={handleColors("Result", game.stats["Result"])}>
            {game.stats["Score"]}
          </TableCell>
          <TableCell>
            {`${game.stats["Kills"]} / ${game.stats["Assists"]} / ${game.stats["Deaths"]}`}
          </TableCell>
          <TableCell className={handleColors("K/D", game.stats["K/D Ratio"])}>
            {game.stats["K/D Ratio"]}
          </TableCell>
          <TableCell>{game.stats["K/R Ratio"]}</TableCell>
          <TableCell>{game.stats["ADR"]}</TableCell>
          <TableCell>{game.stats["Headshots %"]}</TableCell>
          <TableCell>{game.stats["Map"]}</TableCell>
        </TableRow>
      );
    }
    return div;
  };

  if (!games?.items) {
    return null;
  }
  return (
    <div className="dark border rounded-[10px] text-foreground text-center flex flex-col pb-2 gap-y-1">
      <Table className="dark m-auto lg:w-200 max-w-4xl">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Result</TableHead>
            <TableHead className="text-center">Score</TableHead>
            <TableHead className="text-center">K / A / D</TableHead>
            <TableHead className="text-center">K/D</TableHead>
            <TableHead className="text-center">K/R</TableHead>
            <TableHead className="text-center">ADR</TableHead>
            <TableHead className="text-center">HS%</TableHead>
            <TableHead className="text-center">Map</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{renderMatches()}</TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
              className="cursor-pointer"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive>
              {page + 1} / {totalPages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (page < totalPages - 1) {
                  setPage(page + 1);
                }
              }}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
