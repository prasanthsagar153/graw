import { create } from "zustand";

export interface IGameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface IGameQueryStore {
  gameQuery: IGameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOder: string) => void;
}

const useGameQueryStore = create<IGameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: {searchText} })),
  setGenreId: (genreId) =>
    set((s) => ({ gameQuery: {...s.gameQuery, genreId} })),
  setPlatformId: (platformId) =>
    set((s) => ({ gameQuery: {...s.gameQuery, platformId} })),
  setSortOrder: (sortOrder) =>
    set((s) => ({ gameQuery: { ...s.gameQuery, sortOrder } }))
}));

export default useGameQueryStore;