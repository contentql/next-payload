import { http } from '@/lib/axios'

export const addProject = async (data: Object) => {
  try {
    const res = await http.post('/api/projects', data)

    return res.data.doc
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteProject = async (id: string) => {
  try {
    const res = await http.delete(`/api/projects/${id}`)

    return res.data.doc
  } catch (error) {
    console.log(error)
    throw error
  }
}
