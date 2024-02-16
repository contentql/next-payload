import { railwayAdmin } from '@/lib/railway'

export const getProject = async (projectId: string) => {
  const query = `
    query getProject($id: String!) {
      railway {
        project(id: $id) {
          id
          name
          description
          updatedAt
        }
      }
    }
  `

  const variables = {
    id: projectId,
  }

  const project = await railwayAdmin(query, variables)

  return project.data.railway.project
}
