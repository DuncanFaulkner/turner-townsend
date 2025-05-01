import { createFeature, createReducer, on } from '@ngrx/store';
import { DashboardState } from '../../../models/dashboard.types';
import {
  getPlaylists,
  getPlaylistsFailure,
  getPlaylistsSuccess,
} from '../actions/dashboard.action';
import { DASHBOARD } from '../constants';

export const initialState: DashboardState = {
  playlists: {
    data: null,
    error: null,
    loading: false,
  },
};

export const dashboardFeature = createFeature({
  name: DASHBOARD.KEY,
  reducer: createReducer(
    initialState,
    on(
      getPlaylists,
      (state): DashboardState => ({
        ...state,
        playlists: {
          loading: true,
          data: null,
          error: null,
        },
      })
    ),
    on(
      getPlaylistsSuccess,
      (state, { playlist }): DashboardState => ({
        ...state,
        playlists: {
          loading: false,
          data: playlist,
          error: null,
        },
      })
    ),
    on(
      getPlaylistsFailure,
      (state, { error }): DashboardState => ({
        ...state,
        playlists: {
          loading: false,
          data: null,
          error,
        },
      })
    )
  ),
});
