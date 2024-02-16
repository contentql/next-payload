import React from 'react'

const services = [
  { id: '1', name: 'Storage', description: 'cloudflare R2' },
  { id: '2', name: 'Payments', description: 'stripe subscription' },
  { id: '3', name: 'Emails', description: 'sendgrid email system' },
  { id: '6', name: 'Frontend', description: 'nextjs application' },
  { id: '7', name: 'Backend', description: 'payload cms' },
  { id: '8', name: 'Database', description: 'mongodb' },
]

const ServicePage = ({ params }: { params: any }) => {
  const service = services.find(s => s.id === params.serviceId)

  return (
    <div className='service-page'>
      <p className='m-6'>service : {service?.description}</p>
    </div>
  )
}

export default ServicePage
