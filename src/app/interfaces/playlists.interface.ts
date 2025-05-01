export interface FeaturedPlaylists {
  featuredPlaylists: {
    name: string;
    content: Playlist[];
  };
}

export interface Playlist {
  id: string;
  kind: string;
  name: string;
  url: string;
  curator_name: string;
  artwork: string;
}

// export type FeaturedPlaylists = {
//   featuredPlaylists: {
//     name: string;
//     content: Playlist[];
//   };
// };

// export type Playlist = {
//   id: string;
//   kind: string;
//   name: string;
//   url: string;
//   curator_name: string;
//   artwork: string;
// };
