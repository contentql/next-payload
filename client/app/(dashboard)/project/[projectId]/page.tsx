import ProjectView from '@/app/_views/ProjectView'

const ProjectPage = ({ params }: { params: any }) => {
  console.log(params)
  return <ProjectView params={params} />
}

export default ProjectPage
