import { railwayAdmin } from '@/utils/railway'

export const createService = async (
  projectId: string,
  serviceName: string,
  gitHubrepo: string,
) => {
  const query = `
mutation createService($projectId:String!, $name:String!,$repo:String!) {
  railway{
  serviceCreate(input: {projectId: $projectId, branch: "main", name:$name, source: {repo:$repo}}) {
    id
    name
    deployments {
      edges {
        node {
          id
        }
      }
    }
  }
  }
}
  `
  const variables = {
    projectId: projectId,
    name: serviceName,
    repo: gitHubrepo,
  }

  const service = await railwayAdmin(query, variables)

  return service.data
}
