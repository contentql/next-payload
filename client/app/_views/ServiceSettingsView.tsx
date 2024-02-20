import ServiceSettingsBuild from '@/components/services/service-settings-build'
import ServiceSettingsDeploy from '@/components/services/service-settings-deploy'
import ServiceSettingsNetwork from '@/components/services/service-settings-network'
import ServiceSettingsSource from '@/components/services/service-settings-source'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const ServiceSettingsView = () => {
  return (
    <div>
      <div>
        <Input placeholder='Filter Settings' />
      </div>
      <div className='mt-6'>
        <div className='border-l-2 pl-12 pt-12'>
          <ServiceSettingsSource />
          <ServiceSettingsNetwork />
          <ServiceSettingsBuild />
          <ServiceSettingsDeploy />
          <h2 className='mt-12 text-2xl font-semibold text-red-800'>Delete</h2>
          <p className='mt-1 text-sm text-red-800'>
            Deleting this service will permanently delete all its deployments
            and remove it from this environment. This cannot be undone.
          </p>
          <Button
            variant='outline'
            className='my-4 border-red-800 text-red-800'>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceSettingsView
