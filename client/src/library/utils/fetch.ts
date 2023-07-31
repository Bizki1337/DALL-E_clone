import axios from 'axios'

export const fetch = axios.create({
	baseURL: process.env.REACT_APP_API_URL as string,
})