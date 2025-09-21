import { create } from "zustand";

interface ProfileState {
  profile: any;
  games: any;
  mapStats: any;
  setProfile: (prof: any) => void;
  setGames: (games: any) => void;
  setMapStats: (stats: any) => void;
}

export const useStore = create<ProfileState>((set) => ({
  profile: null,
  games: null,
  mapStats: undefined,
  setProfile: (profile) => set({ profile }),
  setGames: (games: any) => set({ games }),
  setMapStats: (mapStats: any) => set({ mapStats }),
}));
