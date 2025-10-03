import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useStore } from "../zustand/store";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import user from "../../assets/user.png";

import type { StatsWithAvatarAndNickname } from "@/types/Stats";
import { EnemySearchbar } from "../Searchbar/EnemySearchbar";

export const CompCard = () => {
  const { profile, stats } = useStore((store) => store);
  const [enemyStats, setEnemyStats] = useState<
    StatsWithAvatarAndNickname | undefined
  >();
  const betterStatStyle = "drop-shadow-sm drop-shadow-white";

  const parseStat = (stat: string | undefined): number => {
    if (!stat) return 0;
    return parseFloat(stat);
  };
  if (!stats) {
    return (
      <>
        <Card className="dark">
          <CardContent>
            <div className="text-white">
              {" "}
              Произошла ошибка загрузки статистики!
            </div>
          </CardContent>
        </Card>
      </>
    );
  }
  return (
    <>
      <EnemySearchbar setEnemyStats={setEnemyStats} />
      <Card className="dark lg:w-200 text-center gap-2 px-2">
        <CardHeader>
          Сравнение {profile?.nickname} и{" "}
          {enemyStats ? enemyStats.nickname : "-"}
        </CardHeader>
        <CardDescription>Статистика за последние 100 игр</CardDescription>
        <CardContent className="flex gap-x-5 items-center justify-around">
          <img
            src={profile?.avatar}
            alt="avatar"
            className="w-25 rounded-full hidden sm:block"
          />
          <div className="border rounded-[10px] p-2">
            {profile && stats && (
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-left w-1/3">
                      {profile.nickname}
                    </TableCell>
                    <TableCell className="text-center w-1/3">Ник</TableCell>
                    <TableCell className="text-right w-1/3">
                      {enemyStats ? enemyStats.nickname : "-"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className={`text-left w-1/3 ${
                        parseStat(stats?.Avg) > parseStat(enemyStats?.Avg)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {stats?.Avg}
                    </TableCell>
                    <TableCell className="text-center w-1/3">Avg</TableCell>
                    <TableCell
                      className={`text-right w-1/3 ${
                        parseStat(stats?.Avg) < parseStat(enemyStats?.Avg)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {enemyStats ? enemyStats.Avg : "-"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className={`text-left w-1/3 ${
                        parseStat(stats?.KD) > parseStat(enemyStats?.KD)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {stats?.KD}
                    </TableCell>
                    <TableCell className="text-center w-1/3">K/D</TableCell>
                    <TableCell
                      className={`text-right w-1/3 ${
                        parseStat(stats?.KD) < parseStat(enemyStats?.KD)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {enemyStats ? enemyStats.KD : "-"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className={`text-left w-1/3 ${
                        parseStat(stats?.KR) > parseStat(enemyStats?.KR)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {stats?.KR}
                    </TableCell>
                    <TableCell className="text-center w-1/3">K/R</TableCell>
                    <TableCell
                      className={`text-right w-1/3 ${
                        parseStat(stats?.KR) < parseStat(enemyStats?.KR)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {enemyStats ? enemyStats.KR : "-"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className={`text-left w-1/3 ${
                        parseStat(stats?.ADR) > parseStat(enemyStats?.ADR)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {stats?.ADR}
                    </TableCell>
                    <TableCell className="text-center w-1/3">ADR</TableCell>
                    <TableCell
                      className={`text-right w-1/3 ${
                        parseStat(stats?.ADR) < parseStat(enemyStats?.ADR)
                          ? betterStatStyle
                          : ""
                      }`}
                    >
                      {enemyStats ? enemyStats.ADR : "-"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </div>
          <img
            src={enemyStats ? enemyStats?.avatar : user}
            alt="avatar"
            className="w-25 rounded-full hidden sm:block"
          />
        </CardContent>
      </Card>
    </>
  );
};
