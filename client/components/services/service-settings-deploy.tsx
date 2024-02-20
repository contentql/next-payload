import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '../ui/input'
import { Switch } from '../ui/switch'

const ServiceSettingsDeploy = () => {
  return (
    <div>
      <h2 className='mt-12 text-2xl font-semibold'>Deploy</h2>
      <div className='mb-4 mt-6'>
        <label
          className='mb-2 block text-sm font-medium'
          htmlFor='custom-start-command'>
          Custom Start Command
        </label>
        <Input id='custom-start-command' placeholder='npm run start' />
      </div>
      <div className='mt-6'>
        <label className='mb-1 block text-sm font-medium' htmlFor='region'>
          Region
        </label>
        <Select>
          <SelectTrigger id='region'>
            <SelectValue>US West (Oregon, USA)</SelectValue>
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='us-west'>US West (Oregon, USA)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='mt-6'>
        <label className='mb-1 block text-sm font-medium' htmlFor='replicas'>
          Replicas
        </label>
        <Input id='replicas' placeholder='1' />
      </div>
      <div className='mt-6 flex items-center space-x-2'>
        <Switch id='app-sleeping' />
        <label className='text-sm font-medium' htmlFor='app-sleeping'>
          Enable App Sleeping
        </label>
      </div>
      <div className='mt-6'>
        <label
          className='mb-1 block text-sm font-medium'
          htmlFor='restart-policy'>
          Restart Policy
        </label>
        <Select>
          <SelectTrigger id='restart-policy'>
            <SelectValue>On Failure</SelectValue>
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='on-failure'>On Failure</SelectItem>
          </SelectContent>
        </Select>
        <Input className='mt-2' id='restart-times' placeholder='10' />
      </div>
    </div>
  )
}

export default ServiceSettingsDeploy
