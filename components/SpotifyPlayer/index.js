import NotPlaying from '/components/NotPlaying'
import CurrentlyPlaying from '/components/CurrentlyPlaying'
import useSWR from 'swr'
import { getSong } from '/services/getSong'

export default function SpotifyPlayer() {
  const { data, error } = useSWR('/api/current_song', getSong)

  if (error) return <NotPlaying />
  if (!data) return <pre>loading...</pre>

  return (
    <CurrentlyPlaying
      songName={data.songName}
      artists={data.artists}
      imgUrl={data.img}
      songUrl={data.songUrl}
    />
  )
}
