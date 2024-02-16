import { railwayAdmin } from '@/lib/railway'

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
    const response = await railwayAdmin(getServices, { id })
    return response.data?.railway?.project?.services?.edges
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
