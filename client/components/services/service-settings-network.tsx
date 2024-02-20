import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

const ServiceSettingsNetwork = () => {
  return (
    <div>
      <h2 className='mt-12 text-2xl font-semibold'>Networking</h2>
      <div className='mt-6'>
        <label className='mb-1 block text-sm font-medium'>
          Public Networking
        </label>
        <div className='mt-4 space-y-2 '>
          <div className='rounded-md bg-slate-900 p-3'>
            <span className='text-sm'>
              next-payload-client-production.up.railway.app
            </span>
          </div>
          <div className='rounded-md bg-slate-900 p-3'>
            <span className='text-sm'>next-client.contentql.io</span>
          </div>
        </div>
        <Button className='mt-4' variant='outline'>
          + Custom Domain
        </Button>
      </div>
      <div className='mt-6'>
        <label className='mb-1 block text-sm font-medium'>
          Private Networking
        </label>
        <div className='mt-4 rounded-md bg-slate-900 p-2 '>
          <span className='pl-3 text-sm'>
            next-payload-client.railway.internal
          </span>
          <Badge variant='secondary'>
            Ready to talk private -{' '}
            <span className='text-green-800'>
              You can also simply call me next-payload-client.
            </span>
          </Badge>
        </div>
        <Button className='mt-6 border-red-800 text-red-800 ' variant='outline'>
          Disable private networking
        </Button>
      </div>
    </div>
  )
}

export default ServiceSettingsNetwork
