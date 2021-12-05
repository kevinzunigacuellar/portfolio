import NotPlaying from '/components/SpotifyPlayer/NotPlaying'
import CurrentlyPlaying from '/components/SpotifyPlayer/CurrentlyPlaying'
import { getSong } from '/services/getSong'
import useSWR from 'swr'
import SpotifyPlaceholder from './SpotifyPlaceholder'

export default function SpotifyPlayer() {
  const { data, error } = useSWR('/api/spotify_current_song', getSong)
  if (error) return <NotPlaying />
  if (!data) return <SpotifyPlaceholder />
  if (data && data.isPlaying === false) return <NotPlaying />

  return <CurrentlyPlaying songName={data.songName} artists={data.artists} imgUrl={data.img} songUrl={data.songUrl} />
}
