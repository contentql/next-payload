import React from 'react'
import ServiceDetails from '@/components/project/service-details-card'
import ProjectView from '@/app/_views/ProjectView'

const services = [
  { id: '1', name: 'Storage', description: 'cloudflare R2' },
  { id: '2', name: 'Payments', description: 'stripe subscription' },
  { id: '3', name: 'Emails', description: 'sendgrid email system' },
]

const ServicePage = ({ params }: { params: any }) => {
  const { serviceId, projectId } = params

  return (
    <div className='service-page'>
      <ProjectView params={params} />
      <ServiceDetails
        serviceId={serviceId}
        services={services}
        projectId={projectId}
      />
    </div>
  )
}

export default ServicePage
