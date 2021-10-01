import { getCurrentlyPlayingSong } from 'lib/spotify'

export default async function currentlyPlaying(_req, res) {
  const response = await getCurrentlyPlayingSong()
  const data = await response.json()
  return res.status(200).json({ data })
}
