'use client'

import { keys } from '@/apis/query-keys'
import { getAllTodos } from '@/apis/todos'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { columns } from '@/components/tasks/columns'
import { DataTable } from '@/components/tasks/data-table'
import { TaskCreateButton } from '@/components/tasks/task-create-button'
import { useQuery } from '@tanstack/react-query'

const TasksView = () => {
  const { data: tasks, isPending } = useQuery({
    queryKey: keys('/api/todos', 'get').main(),
    queryFn: getAllTodos,
  })

  return (
    <DashboardShell>
      <DashboardHeader heading='Tasks' text='Create and manage your tasks.'>
        <TaskCreateButton />
      </DashboardHeader>
      <div className='grid gap-10'>
        <div className='h-full flex-1 flex-col space-y-8 overflow-hidden md:flex'>
          {tasks?.length && !isPending ? (
            <DataTable data={tasks} columns={columns} />
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name='post' />
              <EmptyPlaceholder.Title>No tasks created</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                You don&apos;t have any tasks yet. Start creating content.
              </EmptyPlaceholder.Description>
              <TaskCreateButton variant='outline' />
            </EmptyPlaceholder>
          )}
        </div>
      </div>
    </DashboardShell>
  )
}

export default TasksView
