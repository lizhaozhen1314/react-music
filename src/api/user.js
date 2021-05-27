import { get, post } from '../utils/request'
// import qs from 'qs'

const login = data => {
  // const info = qs.stringify(data)
  return post('/login/cellphone', data)
}

export { login }
