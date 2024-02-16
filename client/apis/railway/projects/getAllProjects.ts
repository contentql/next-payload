import { railwayAdmin } from '@/lib/railway'

const query = `
 query allProjects {
  railway {
    projects {
      edges {
        node {    
          id
          name
          description
          updatedAt
        }
      }
    }
  }
}
`

export const getAllProjectDetails = async () => {
  try {
    const response = await railwayAdmin(query)

    return response.data?.railway?.projects?.edges
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
