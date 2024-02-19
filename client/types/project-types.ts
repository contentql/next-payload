interface ProjectDeployments {
  edges: {
    node: {
      status: string
    }
  }[]
}

interface ProjectServices {
  edges: {
    node: {
      id: string
      deployments: ProjectDeployments
    }
  }[]
}

export interface Project {
  id: string
  name: string
  description: string
  updatedAt: Date
  services: ProjectServices
}

export interface UserProject {
  id: string
  project_id: string
}
