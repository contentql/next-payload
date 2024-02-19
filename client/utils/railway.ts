import { graphql } from '../lib/axios'

export const railwayAdmin = async (
  query: string,
  variables: Record<string, any> = {},
) => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN_URL}`,
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
  }

  try {
    const response = await graphql.post('', { query, variables }, { headers })

    return response.data
  } catch (error) {
    throw error
  }
}
