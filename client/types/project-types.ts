export interface Project {
  id: string
  name: string
  description: string
  updatedAt: Date
}

export interface UserProject {
  id: string
  project_id: string
}
