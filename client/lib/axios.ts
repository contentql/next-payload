import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

export const graphql = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_RAILWAY_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
