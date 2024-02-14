'use client'

import { DashboardShell } from '@/components/shell'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import IntegrationsView from './IntegrationsView'
import OverviewView from './OverviewView'

const ProjectView = () => {
  return (
    <DashboardShell className='min-h-screen'>
      <Tabs defaultValue='overview' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='integrations'>Integrations</TabsTrigger>
          <TabsTrigger value='observability' disabled>
            Observability
          </TabsTrigger>
        </TabsList>
        <OverviewView />
        <IntegrationsView />
      </Tabs>
    </DashboardShell>
  )
}

export default ProjectView
