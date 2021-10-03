import { getCurrentlyPlayingSong } from 'lib/spotify'

export default async function currentlyPlaying(_req, res) {
  const response = await getCurrentlyPlayingSong()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const data = await response.json()
  return res.status(200).json({ data })
}
