export interface Games {
  start: number;
  end: number;
  items: GameInfo[];
}
interface GameInfo {
  stats: GameStats;
}
interface GameStats {
  ADR: string;
  Assists: string;
  "Best Of": string;
  "Competition Id": string;
  "Created At": string;
  Deaths: string;
  "Double Kills": string;
  "Final Score": string;
  "First Half Score": string;
  Game: string;
  "Game Mode": string;
  Headshots: string;
  "Headshots %": string;
  "K/D Ratio": string;
  "K/R Ratio": string;
  Kills: string;
  MVPs: string;
  Map: string;
  "Match Finished At": number;
  "Match Id": string;
  "Match Round": string;
  Nickname: string;
  "Overtime score": string;
  "Penta Kills": string;
  "Player Id": string;
  "Quadro Kills": string;
  Region: string;
  Result: string;
  Rounds: string;
  Score: string;
  "Second Half Score": string;
  Team: string;
  "Triple Kills": string;
  "Updated At": string;
  Winner: string;
}
