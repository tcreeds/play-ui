const BASE_URL_LOCAL = 'http://localhost:8080/'
const BASE_URL_DEPLOYED = 'https://play-api.tcreeds.io/'

export const LOGIN_URL = 'users/login'
export const PROFILE_URL = 'users/profile'

export const BASE_URL = window.location.host.indexOf("localhost") == 0 ? BASE_URL_LOCAL : BASE_URL_DEPLOYED