import { create } from "zustand";

interface ProfileState {
  profile: any;
  games: any;
  setProfile: (prof: any) => void;
  setGames: (games: any) => void;
}

export const useStore = create<ProfileState>((set) => ({
  profile: null,
  games: null,
  setProfile: (prof) => set({ profile: prof }),
  setGames: (games: any) => set({ games: games }),
}));
