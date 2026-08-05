export interface Track {
  id: string
  title: string
  artist: string
  coverUrl: string
}

export const currentTrack: Track = {
  id: '1',
  title: 'Midnight City',
  artist: 'M83',
  coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
}

export const playlistTracks: Track[] = [
  currentTrack,
  {
    id: '2',
    title: 'After Dark',
    artist: 'Mr.Kitty',
    coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Nightcall',
    artist: 'Kavinsky',
    coverUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    title: 'Do I Wanna Know?',
    artist: 'Arctic Monkeys',
    coverUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80',
  },
]
