import { railwayAdmin } from '@/utils/railway'

export const getServices = `
 query getServices($id:String!) {
  railway {
    project(id: $id){
      description
      id
      name
      services {
        edges {
          node {
            icon
            name
            id
            updatedAt
            deployments {
              edges {
                node {
                  status
                  updatedAt
                }
              }
            }
          }
        }
      }
    }
  }
}

`

export const getServicesById = async (id: string) => {
  const response = await railwayAdmin(getServices, { id })

  return response.data?.railway?.project?.services?.edges
}
