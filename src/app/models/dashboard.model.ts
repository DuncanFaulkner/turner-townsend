import { Playlist } from '../interfaces/playlists.interface';

export interface DashboardState {
  playlists: AppState<Playlist[]>;
}

export interface AppState<T> {
  loading: boolean;
  data: T | null;
  error: unknown;
}
