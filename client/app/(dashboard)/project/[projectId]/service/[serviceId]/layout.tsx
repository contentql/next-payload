import ProjectView from '@/app/_views/ProjectView'
import ServiceView from '@/app/_views/ServiceView'

const ServiceLayout = ({
  children,
  params,
}: {
  children: any
  params: any
}) => {
  return (
    <div>
      {/* {children} */}
      <ServiceView children={children} params={params} />

      <ProjectView params={params} />
    </div>
  )
}

export default ServiceLayout
