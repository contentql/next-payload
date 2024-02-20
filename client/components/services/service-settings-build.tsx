import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ServiceSettingsBuild = () => {
  return (
    <div>
      <h2 className='mt-12 text-2xl font-semibold'>Build</h2>
      <div className='mt-6 text-white'>
        <label className='mb-1 block text-sm font-medium' htmlFor='builder'>
          Builder
        </label>
        <Select>
          <SelectTrigger id='builder'>
            <SelectValue>Nixpacks</SelectValue>
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='nixpacks'>Nixpacks</SelectItem>
          </SelectContent>
        </Select>
        <p className='mt-1 text-sm text-gray-500'>Developed by contentQL</p>
      </div>
      <div className='mt-6'>
        <label className='mb-1 block text-sm font-medium' htmlFor='providers'>
          Providers
        </label>
        <div className='flex items-center space-x-2'>
          <Badge variant='secondary'>Node</Badge>
          <Button variant='ghost'>+</Button>
        </div>
      </div>
      <div>
        <label
          className='mb-2 mt-6 block text-sm font-medium'
          htmlFor='custom-build-command'>
          Custom Build Command
        </label>
        <Input id='custom-build-command' placeholder='Build Command' />
      </div>
      <div>
        <label
          className='mb-2 mt-6 block text-sm font-medium'
          htmlFor='watch-paths'>
          Watch Paths
        </label>
        <Input id='watch-paths' placeholder='client/**/*' />
      </div>
    </div>
  )
}

export default ServiceSettingsBuild
