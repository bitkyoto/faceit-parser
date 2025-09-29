export interface Stats {
  ADR: string;
  Avg: string;
  KD: string;
  KR: string;
  Winrate: string;
}
export interface StatsWithAvatarAndNickname extends Stats {
  avatar: string;
  nickname: string;
}
