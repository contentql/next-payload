'use client'

import CreateProjectAlert from '@/components/dashboard/create-project-alert'
import Projects from '@/components/dashboard/projects'
import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import { DashboardShell } from '@/components/shell'
import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardView = () => {
  const [input, setInput] = React.useState('')
  const [showCreateAlert, setShowCreateAlert] = React.useState(false)

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Projects'
        text='Create and manage your projects.'>
        <Button onClick={() => setShowCreateAlert(true)}>
          <Icons.add className='mr-2 h-4 w-4' />
          New Project
        </Button>
        <CreateProjectAlert
          showCreateAlert={showCreateAlert}
          setShowCreateAlert={setShowCreateAlert}
          input={input}
          setInput={setInput}
        />
      </DashboardHeader>
      <Projects setShowCreateAlert={setShowCreateAlert} />
    </DashboardShell>
  )
}

export default DashboardView
