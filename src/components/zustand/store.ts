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
  addGames: (newGames: any) => void;
}

export const useStore = create<ProfileState>((set) => ({
  profile: undefined,
  games: undefined,
  mapStats: undefined,
  stats: undefined,
  setProfile: (profile) => set({ profile }),
  setGames: (ngames: any) => set({ games: ngames }),
  setMapStats: (mapStats: any) => set({ mapStats }),
  setStats: (stats: Stats) => set({ stats }),
  addGames: (newGames: any) =>
    set((state) => {
      if (!state.games) {
        return {
          games: {
            start: 0,
            end: newGames.end,
            items: newGames.items,
          },
        };
      }

      return {
        games: {
          start: 0,
          items: [...state.games.items, ...newGames.items],
          end: newGames.end,
        },
      };
    }),
}));
