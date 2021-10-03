import NotPlaying from '/components/NotPlaying'
import CurrentlyPlaying from '/components/CurrentlyPlaying'
import useSWR from 'swr'
import { getSong } from '/services/getSong'

export default function SpotifyPlayer() {
  const { data, error } = useSWR('/api/spotify_current_song', getSong)

  if (error) return <NotPlaying />

  if (!data) return <pre>getting song...</pre>

  if (data && data.isPlaying === false) return <NotPlaying />

  return (
    <CurrentlyPlaying
      songName={data.songName}
      artists={data.artists}
      imgUrl={data.img}
      songUrl={data.songUrl}
    />
  )
}
