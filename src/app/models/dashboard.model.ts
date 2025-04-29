import { Playlist } from '../interfaces/playlists.interface';

export type DashboardState = {
  playlists: AppState<Playlist[]>;
};

export type AppState<T> = {
  loading: boolean;
  data: T | null;
  error: unknown;
};

// export interface DashboardState {
//   playlists: AppState<Playlist[]>;
// }

// export interface AppState<T> {
//   loading: boolean;
//   data: T | null;
//   error: unknown;
// }
