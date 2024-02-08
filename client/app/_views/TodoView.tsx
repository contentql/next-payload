'use client'

import { keys } from '@/apis/query-keys'
import { getAllTodos } from '@/apis/todos'
import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { TodoCreateButton } from '@/components/todo-create-button'
import { TodoItem } from '@/components/todo-item'
import { Todo } from '@/types/payload-types'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const TodoView = () => {
  const queryClient = useQueryClient()

  const { data: todos, isPending } = useQuery({
    queryKey: keys('/api/todos', 'get').main(),
    queryFn: getAllTodos,
  })

  if (!isPending && !todos?.length) {
    return (
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name='post' />
        <EmptyPlaceholder.Title>No todos created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any todos yet. Start creating content.
        </EmptyPlaceholder.Description>
        <TodoCreateButton variant='outline' />
      </EmptyPlaceholder>
    )
  }
  return (
    <DashboardShell>
      <DashboardHeader heading='Todos' text='Create and manage todos.'>
        <TodoCreateButton />
      </DashboardHeader>
      <div>
        <div className='divide-y divide-border rounded-md border'>
          {todos?.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
        </div>
      </div>
    </DashboardShell>
  )
}

export default TodoView
