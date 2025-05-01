import { DashboardState } from '../models/dashboard.types';
import { Playlist } from '../models/playlists.types';

export const fakePlaylistData: Playlist[] = [
  {
    id: 'pl.2b0e6e332fdf4b7a91164da3162127b5',
    kind: 'playlist',
    name: 'New Music Daily',
    url: 'https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?app=music\u0026at=1000l4QJ\u0026ct=330\u0026itscg=10000\u0026itsct=330',
    curator_name: 'Apple Music',
    artwork:
      'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/1c/4a/45/1c4a459d-74e6-1993-680f-572d8221b52e/dbaa1fd2-4bae-45e0-ae43-2719dbe2f2e6.png/600x600SC.DN01.jpg?l=en-US',
  },
  {
    id: 'pl.f4d106fed2bd41149aaacabb233eb5eb',
    kind: 'playlist',
    name: 'Today’s Hits',
    url: 'https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?app=music\u0026at=1000l4QJ\u0026ct=330\u0026itscg=10000\u0026itsct=330',
    curator_name: 'Apple Music Hits',
    artwork:
      'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/96/d2/33/96d2336e-2f58-a3ca-b47e-ef401ca7879b/af8d3c81-614a-4ce5-b129-4e94d5b516b4.png/600x600SC.DN01.jpg?l=en-US',
  },
  {
    id: 'pl.abe8ba42278f4ef490e3a9fc5ec8e8c5',
    kind: 'playlist',
    name: 'Rap Life',
    url: 'https://music.apple.com/us/playlist/rap-life/pl.abe8ba42278f4ef490e3a9fc5ec8e8c5?app=music\u0026at=1000l4QJ\u0026ct=330\u0026itscg=10000\u0026itsct=330',
    curator_name: 'Apple Music Hip-Hop',
    artwork:
      'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/fb/9c/e5/fb9ce504-1f56-7e68-77c9-686d7eb6424b/285e4fea-e4bd-4c3b-8658-83b18ad12c7e.png/600x600SC.DN01.jpg?l=en-US',
  },
];

export const fakeErrorData = new Error();

export const fakePlaylistSuccessState: DashboardState = {
  playlists: {
    loading: false,
    data: [...fakePlaylistData],
    error: null,
  },
};

export const fakePlaylistFailureState: DashboardState = {
  playlists: {
    loading: false,
    data: null,
    error: '500',
  },
};

export const fakePlaylistLoadingState: DashboardState = {
  playlists: {
    loading: true,
    data: null,
    error: null,
  },
};
