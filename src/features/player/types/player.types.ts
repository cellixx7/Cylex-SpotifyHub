export interface SpotifyArtist {
  id: string
  name: string
}

export interface CurrentlyPlayingTrack {
  id: string
  title: string
  artists: SpotifyArtist[]
  albumName: string
  coverUrl: string | null
  durationMs: number
  progressMs: number
  isPlaying: boolean
  contextUri: string | null
}
