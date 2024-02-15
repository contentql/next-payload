import { railway } from '@/lib/axios'

export const getServices = `
 query getServices($id:String!) {
  railway {
    project(id: $id) {
      id
      name
      services {
        edges {
          node {
            id
            name
            updatedAt
          }
        }
      }
    }
  }
}

`

export const getServicesById = async (id: string) => {
  try {
    const response = await railway(getServices, { id })
    return response.data?.data?.railway?.project?.services?.edges
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
