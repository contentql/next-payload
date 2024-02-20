import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Switch } from '../ui/switch'

const ServiceSettingsSource = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>Source</h2>
      <div className='mt-6'>
        <label className='mb-1 block text-sm font-medium' htmlFor='source-repo'>
          Source Repo
        </label>
        <div className='mt-2 flex items-center justify-between rounded-md bg-slate-900 p-3'>
          <span className='text-sm'>contentql/next-payload</span>
          <Button variant='outline'>Disconnect</Button>
        </div>
        <div className='mt-6'>
          <label
            className='mb-2 block text-sm font-medium'
            htmlFor='root-directory'>
            Root Directory
          </label>
          <Input id='root-directory' placeholder='client' />
        </div>
        <div className='mt-6'>
          <label
            className='mb-1 block text-sm font-medium'
            htmlFor='branch-connected'>
            Branch connected to production
          </label>
          <div className='mt-2 flex items-center justify-between rounded-md bg-slate-900 p-3 '>
            <span className='text-sm'>main</span>
            <Button variant='outline'>Disconnect</Button>
          </div>
        </div>
        <div className='mt-6'>
          <label className='flex items-center space-x-2'>
            <Switch id='enable-check-suites' />
            <span className='text-sm'>Enable check suites</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ServiceSettingsSource
