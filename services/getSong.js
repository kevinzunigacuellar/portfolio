import axios from 'axios'

const fromApitoResponseCurrentSong = apiResponse => {
  if (apiResponse.isPlaying === false) {
    return apiResponse
  }
  const {
    name: songName,
    artists: artistsData,
    album: { images },
    external_urls: { spotify: songUrl },
  } = apiResponse.data.item
  const img = images[1].url
  const artists = artistsData.map(artist => artist.name).join(', ')
  return { songName, artists, img, songUrl }
}

export const getSong = async url => {
  const data = await axios
    .get(url)
    .then(res => res.data)
    .then(fromApitoResponseCurrentSong)
  return data
}
