import { createSelector } from '@ngrx/store';
import { DashboardState } from '../../../models/dashboard.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectDashboard = (state: any): DashboardState => state.dashboard;

export const selectPlaylistState = createSelector(
  selectDashboard,
  (state) => state.playlists
);

export const selectPlaylistLoading = createSelector(
  selectPlaylistState,
  (state) => state.loading
);

export const selectPlaylistData = createSelector(
  selectPlaylistState,
  (state) => state.data
);

export const selectPlaylistError = createSelector(
  selectPlaylistState,
  (state) => state.error
);
