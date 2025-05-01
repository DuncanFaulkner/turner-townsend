import { Playlist } from './playlists.types';

export type DashboardState = {
  playlists: AppState<Playlist[]>;
};

export type AppState<T> = {
  loading: boolean;
  data: T | null;
  error: unknown;
};
