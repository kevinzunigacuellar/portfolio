import axios from 'axios'

export const getEntries = async url => {
  return axios.get(url).then(res => res.data)
}
