import { railwayAdmin } from '@/utils/railway'

export const getAllProjectDetails = async () => {
  const query = `query allProjects {
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
  }`

  const data = await railwayAdmin(query)

  return data?.data?.railway?.projects?.edges
}
