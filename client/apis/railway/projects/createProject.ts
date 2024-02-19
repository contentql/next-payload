import { railwayAdmin } from '@/utils/railway'

export const createProject = async (projectName: string) => {
  const query = `
    mutation createProject($name: String!) {
        railway {
            projectCreate(input: { name: $name }) {
                id
                name
                updatedAt
            }
        }
    }`

  const variables = {
    name: projectName,
  }

  const project = await railwayAdmin(query, variables)

  return project.data.railway.projectCreate
}
