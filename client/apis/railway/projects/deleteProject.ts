import { railwayAdmin } from '@/utils/railway'

export const deleteRailwayProject = async (projectId: string) => {
  const query = `
    mutation deleteProject($id: String!) {
        railway {
            projectDelete(id: $id)
        }
    }`

  const variables = {
    id: projectId,
  }

  const project = await railwayAdmin(query, variables)

  return project
}
