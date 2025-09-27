export interface LeaderboardData {
  country: string;
  faceit_elo: number;
  game_skill_level: number;
  nickname: string;
  player_id: string;
  position: number;
}
export type LeaderboardResponse = LeaderboardData[];
