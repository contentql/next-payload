import React, { useContext } from 'react'
import { Icons } from '@/components/icons'
import Link from 'next/link'

const ServiceDetails = ({
  serviceId,
  services,
  projectId,
}: {
  serviceId: any
  services: {
    id: string
    name: string
    description: string
  }[]
  projectId: any
}) => {
  const service = services.find(s => s.id === serviceId)

  return (
    <div className='service-details-container'>
      <div
        className='rounded-l-3xl border'
        style={{
          position: 'fixed',
          top: '15%',
          right: 0,
          width: '50%',
          height: '70vh',
          backgroundColor: '#fff',
          color: '#000',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          zIndex: 1000,
          //   transform: 'translateX(-100%)',
          transition: 'transform 0.3 ease-out',
        }}>
        <div className='mx-8 flex justify-between'>
          <h2 className='m-6 text-4xl font-bold text-slate-800'>
            {service?.name}
          </h2>
          <Link className='mt-8' href={`/project/${projectId}`}>
            <Icons.close className='h-6 w-6' />
          </Link>
          <Link
            className='mt-8'
            href={`/project/${projectId}/service/${service?.id}/testpage`}>
            <Icons.close className='h-6 w-6' />
          </Link>
        </div>

        <div className='w-full border border-slate-200'></div>
        <p className='m-6'>service : {service?.description}</p>
      </div>
    </div>
  )
}

export default ServiceDetails
