interface PlayerGames {
  cs2: any;
  csgo: any;
}

interface PlayerPlatforms {
  steam: string;
}

interface PlayerSettings {
  language: string;
}

interface PlayerInfractions {
  [key: string]: unknown;
}

export interface Profile {
  activated_at: string;
  avatar: string;
  country: string;
  cover_featured_image: string;
  cover_image: string;
  faceit_url: string;
  friends_ids: string[];
  games: PlayerGames;
  infractions: PlayerInfractions;
  membership_type: string;
  memberships: string[];
  new_steam_id: string;
  nickname: string;
  platforms: PlayerPlatforms;
  player_id: string;
  settings: PlayerSettings;
  steam_id_64: string;
  steam_nickname: string;
  verified: boolean;
}
