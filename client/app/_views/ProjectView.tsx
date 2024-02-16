'use client'

import { DashboardShell } from '@/components/shell'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/navigation'
import IntegrationsView from './IntegrationsView'
import OverviewView from './OverviewView'

const ProjectView = ({ params }: { params: any }) => {
  const router = useRouter()

  return (
    <DashboardShell className='min-h-screen'>
      <Tabs defaultValue='overview' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='' onClick={() => router.push('/dashboard')}>
            Dashboard
          </TabsTrigger>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='integrations'>Integrations</TabsTrigger>
          <TabsTrigger value='observability' disabled>
            Observability
          </TabsTrigger>
        </TabsList>
        <OverviewView params={params} />
        <IntegrationsView params={params} />
      </Tabs>
    </DashboardShell>
  )
}

export default ProjectView
