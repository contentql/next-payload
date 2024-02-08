'use client'

import { keys } from '@/apis/query-keys'
import { getAllTodos } from '@/apis/todos'
import { columns } from '@/components/columns'
import { DataTable } from '@/components/data-table'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { TodoCreateButton } from '@/components/todo-create-button'
import { useQuery } from '@tanstack/react-query'

const TasksView = () => {
  const { data: tasks, isPending } = useQuery({
    queryKey: keys('/api/todos', 'get').main(),
    queryFn: getAllTodos,
  })

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
      <DashboardHeader heading='Tasks' text='Create and manage your tasks.'>
        <TodoCreateButton />
      </DashboardHeader>
      <div className='grid gap-10'>
        <div className='h-full flex-1 flex-col space-y-8 overflow-hidden md:flex'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </DashboardShell>
  )
}

export default TasksView
