import { http } from '@/lib/axios'

export const getAllProjects = async () => {
  try {
    const res = await http.get('/api/projects')

    return res.data.docs
  } catch (error) {
    console.log(error)
  }
}
