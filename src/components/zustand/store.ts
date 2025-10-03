import type { Games } from "@/types/Games";
import type { Profile } from "@/types/Profile";
import type { Stats } from "@/types/Stats";

import { create } from "zustand";

interface ProfileState {
  profile: Profile | undefined;
  games: Games | undefined;
  stats: Stats | undefined;
  mapStats: any;
  setProfile: (prof: Profile) => void;
  setGames: (games: any) => void;
  setMapStats: (stats: any) => void;
  setStats: (stats: any) => void;
}

export const useStore = create<ProfileState>((set) => ({
  profile: undefined,
  games: undefined,
  mapStats: undefined,
  stats: undefined,
  setProfile: (profile) => set({ profile }),
  setGames: (games: any) => set({ games }),
  setMapStats: (mapStats: any) => set({ mapStats }),
  setStats: (stats: Stats) => set({ stats }),
}));
