import { railwayAdmin } from '@/lib/railway'

export const deleteServiceById = async (projectId: string) => {
  const query = `
 mutation deleteService($id:String!) {
  railway {
    serviceDelete(id: $id)
  }
}

  `
  const variables = {
    id: projectId,
  }

  const deleteservice = await railwayAdmin(query, variables)

  return deleteservice.data
}
