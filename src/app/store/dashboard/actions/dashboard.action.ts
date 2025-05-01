import { createAction, props } from '@ngrx/store';
import { Playlist } from '../../../models/playlists.types';
import { DASHBOARD } from '../constants';

export const getPlaylists = createAction(`[${DASHBOARD.KEY}] get playlists`);

export const loadDashboardData = createAction(
  `[${DASHBOARD.KEY}] Load dashboard data`
);

export const getPlaylistsSuccess = createAction(
  `[${DASHBOARD.KEY}] get playlist success`,
  props<{ playlist: Playlist[] }>()
);

export const getPlaylistsFailure = createAction(
  `[${DASHBOARD.KEY}] get playlist failure`,
  props<{ error: unknown }>()
);
