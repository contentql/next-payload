import { railway } from '@/lib/axios'

export const allProjects = `
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
    const response = await railway(allProjects)
    return response.data?.data?.railway?.projects?.edges
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
