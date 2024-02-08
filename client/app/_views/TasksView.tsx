'use client'

import { columns } from '@/components/columns'
import { DataTable } from '@/components/data-table'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { TodoCreateButton } from '@/components/todo-create-button'

const TasksView = () => {
  const tasks = [
    {
      id: 'TASK-8782',
      title:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      status: 'in progress',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7878',
      title:
        'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
      status: 'backlog',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7839',
      title: 'We need to bypass the neural TCP card!',
      status: 'todo',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-5562',
      title:
        'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
      status: 'backlog',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-8686',
      title:
        "I'll parse the wireless SSL protocol, that should driver the API panel!",
      status: 'canceled',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-1280',
      title:
        'Use the digital TLS panel, then you can transmit the haptic system!',
      status: 'done',
      label: 'bug',
      priority: 'high',
    },
    {
      id: 'TASK-7262',
      title:
        'The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!',
      status: 'done',
      label: 'feature',
      priority: 'high',
    },
    {
      id: 'TASK-1138',
      title:
        "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
      status: 'in progress',
      label: 'feature',
      priority: 'medium',
    },
    {
      id: 'TASK-7184',
      title: 'We need to program the back-end THX pixel!',
      status: 'todo',
      label: 'feature',
      priority: 'low',
    },
    {
      id: 'TASK-5160',
      title:
        "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
      status: 'in progress',
      label: 'documentation',
      priority: 'high',
    },
  ]

  if (!tasks?.length) {
    return (
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name='post' />
        <EmptyPlaceholder.Title>No tasks created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any tasks yet. Start creating content.
        </EmptyPlaceholder.Description>
        <TodoCreateButton variant='outline' />
      </EmptyPlaceholder>
    )
  }

  return (
    <DashboardShell>
      <DashboardHeader heading='Tasks' text='Manage your tasks.' />
      <div className='grid gap-10'>
        <div className='h-full flex-1 flex-col space-y-8 overflow-hidden md:flex'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </DashboardShell>
  )
}

export default TasksView
