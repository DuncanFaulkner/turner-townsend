import { fakeErrorData, fakePlaylistData } from '../../../test/fake-test-data';
import { DASHBOARD } from '../constants';
import {
  getPlaylists,
  getPlaylistsFailure,
  getPlaylistsSuccess,
  loadDashboardData,
} from './dashboard.action';

describe('dashboard unit test for actions', () => {
  it('should get the action for the playlist', () => {
    const data = getPlaylists();

    expect(data.type).toEqual(`[${DASHBOARD.KEY}] get playlists`);
  });

  it('should get the action for the load dashboard data', () => {
    const data = loadDashboardData();

    expect(data.type).toEqual(`[${DASHBOARD.KEY}] Load dashboard data`);
  });

  it('should get the action for the Playlist Success', () => {
    const data = getPlaylistsSuccess({
      playlist: [...fakePlaylistData],
    });

    expect(data.type).toEqual(`[${DASHBOARD.KEY}] get playlist success`);
  });

  it('should get the action for the playlists Failure', () => {
    const data = getPlaylistsFailure({
      error: fakeErrorData,
    });

    expect(data.type).toEqual(`[${DASHBOARD.KEY}] get playlist failure`);
  });
});
