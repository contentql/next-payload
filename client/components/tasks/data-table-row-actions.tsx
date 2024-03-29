'use client'

import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { keys } from '@/apis/query-keys'
import { deleteTodo, editTodo } from '@/apis/todos/mutations'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { Todo } from '@/types/payload-types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Icons } from '../icons'
import { Input } from '../ui/input'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData extends Todo>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)

  const [editInput, setEditInput] = React.useState('')
  const [showEditAlert, setShowEditAlert] = React.useState<boolean>(false)
  const [isEditLoading, setIsEditLoading] = React.useState<boolean>(false)

  const queryClient = useQueryClient()

  const {
    isPending: isDeleteTodoPending,
    variables: deleteTodoVariables,
    mutate: deleteTodoMutation,
  } = useMutation({
    mutationKey: keys(`/api/todos/${row.original.id}`, 'delete').detail(
      row.original.id,
    ),
    mutationFn: (id: Todo['id']) => deleteTodo(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: keys('/api/todos', 'get').main(),
      })
    },
    onError: async () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your todo was not deleted. Please try again.',
        variant: 'destructive',
      })
    },
    onSettled: async () => {
      setIsDeleteLoading(false)
      setShowDeleteAlert(false)
    },
  })

  const {
    isPending: isEditTodoPending,
    variables: editTodoVariables,
    mutate: editTodoMutation,
  } = useMutation({
    mutationKey: keys(`/api/todos/${row.original.id}`, 'patch').detail(
      row.original.id,
    ),
    mutationFn: (obj: Partial<Todo>) =>
      editTodo(obj.id as string, { task: obj.task }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: keys('/api/todos', 'get').main(),
      })
    },
    onError: async () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your todo was not saved. Please try again.',
        variant: 'destructive',
      })
    },
    onSettled: async () => {
      setEditInput('')
      setIsEditLoading(false)
      setShowEditAlert(false)
    },
  })

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'>
            <DotsHorizontalIcon className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>
          <DropdownMenuItem
            onClick={() => {
              setShowEditAlert(true)
              setEditInput(row.original.task!)
            }}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setShowDeleteAlert(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this todo?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async event => {
                event.preventDefault()
                setIsDeleteLoading(true)
                deleteTodoMutation(row.original.id)
              }}
              className='bg-red-600 focus:ring-red-600'>
              {isDeleteLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.trash className='mr-2 h-4 w-4' />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={showEditAlert} onOpenChange={setShowEditAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Edit todo
              <Input
                className='py-6'
                type='text'
                onChange={e => {
                  setEditInput(e.target.value)
                }}
                value={editInput}
                placeholder='Enter new todo'
                required={true}
              />
            </AlertDialogTitle>
            <AlertDialogDescription>
              Make changes to your Todo here. Click save when done.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async event => {
                event.preventDefault()
                setIsEditLoading(true)
                editTodoMutation({
                  id: row.original.id,
                  task: editInput,
                })
              }}
              className='bg-cyan-600 focus:ring-cyan-600'>
              {isEditLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.save className='mr-2 h-4 w-4' />
              )}
              <span>Save</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
