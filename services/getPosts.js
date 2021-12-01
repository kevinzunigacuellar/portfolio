import axios from 'axios'

export const getPosts = async url => {
  return axios.get(url).then(res => res.data)
}
