'use client'

import CreateProjectAlert from '@/components/dashboard/create-project-alert'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import { DashboardShell } from '@/components/shell'
import { TodoCreateButton } from '@/components/todo-create-button'
import { Button } from '@/components/ui/button'
import React from 'react'

const DashboardView = () => {
  const [input, setInput] = React.useState('')
  const [showCreateAlert, setShowCreateAlert] = React.useState(false)

  if (!true) {
    return (
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name='post' />
        <EmptyPlaceholder.Title>No projects created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any projects yet. Start creating a new project.
        </EmptyPlaceholder.Description>
        <TodoCreateButton variant='outline' />
      </EmptyPlaceholder>
    )
  }

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
    </DashboardShell>
  )
}

export default DashboardView
