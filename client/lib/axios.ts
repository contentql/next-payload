import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

export const graphql = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_RAILWAY_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN_URL}`,
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET!,
  },
})
export const railway = (query: any, variables?: any) =>
  graphql.post(process.env.NEXT_PUBLIC_API_RAILWAY_URL!, {
    query: query,
    variables: variables,
  })
