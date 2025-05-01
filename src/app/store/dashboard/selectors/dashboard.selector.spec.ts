import { DashboardState } from '../../../models/dashboard.types';
import {
  fakePlaylistData,
  fakePlaylistFailureState,
  fakePlaylistLoadingState,
  fakePlaylistSuccessState,
} from '../../../test/fake-test-data';
import {
  selectPlaylistData,
  selectPlaylistError,
  selectPlaylistLoading,
  selectPlaylistState,
} from './dashboard.selector';

describe('Dashboard selectors', () => {
  let stateMock: { dashboard: DashboardState };

  it('should select the playlist state', () => {
    stateMock = { dashboard: { ...fakePlaylistSuccessState } };

    const selected = selectPlaylistState(stateMock);

    expect(selected).toEqual(fakePlaylistSuccessState.playlists);
  });

  it('should select playlist loading', () => {
    stateMock = { dashboard: { ...fakePlaylistLoadingState } };

    const selected = selectPlaylistLoading(stateMock);

    expect(selected).toBe(true);
  });

  it('should select playlist data', () => {
    stateMock = { dashboard: { ...fakePlaylistSuccessState } };

    const selected = selectPlaylistData(stateMock);

    expect(selected).toEqual([...fakePlaylistData]);
  });

  it('should select playlist error', () => {
    stateMock = { dashboard: { ...fakePlaylistFailureState } };

    const selected = selectPlaylistError(stateMock);

    expect(selected).toBe('500');
  });
});
