import { addProject } from '@/apis/projects'
import { keys } from '@/apis/query-keys'
import { createProject } from '@/apis/railway/projects/createProject'
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
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Icons } from '../icons'

const CreateProjectAlert = (props: {
  showCreateAlert: boolean
  setShowCreateAlert: Function
  input: string
  setInput: Function
}) => {
  const { showCreateAlert, setShowCreateAlert, input, setInput } = props

  const [isCreateLoading, setIsCreateLoading] = React.useState<boolean>(false)

  const queryClient = useQueryClient()

  const {
    isPending: isAddProjectPending,
    variables: addProjectVariables,
    isSuccess: addProjectSuccess,
    mutate: addProjectMutation,
  } = useMutation({
    mutationKey: keys('/api/projects', 'post').detail([input]),
    mutationFn: (project: { project_id: string }) => addProject(project),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: keys('/api/projects', 'get').main(),
      })
      toast({
        title: 'Project Created Successfully',
        description:
          'The project has been successfully created and added to the database.',
        variant: 'default',
      })
    },
    onError: async () => {
      toast({
        title: 'Something went wrong.',
        description: 'Project Id is not added to database.',
        variant: 'destructive',
      })
    },
    onSettled: async () => {
      setInput('')
      setIsCreateLoading(false)
      setShowCreateAlert(false)
    },
  })

  const {
    isPending: isCreateProjectPending,
    variables: createProjectVariables,
    isSuccess: createProjectSuccess,
    mutate: createProjectMutation,
  } = useMutation({
    mutationKey: keys('/graphql', 'post').detail(['project_create', input]),
    mutationFn: (projectName: string) => createProject(projectName),
    onSuccess: async data => {
      addProjectMutation({ project_id: data.id })
    },
    onError: async () => {
      setInput('')
      setIsCreateLoading(false)
      setShowCreateAlert(false)
      toast({
        title: 'Something went wrong.',
        description: 'Project was not created. Please try again.',
        variant: 'destructive',
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCreateLoading(true)
    createProjectMutation(input)
  }

  return (
    <AlertDialog
      open={showCreateAlert}
      onOpenChange={() => {
        setInput('')
        setShowCreateAlert(false)
      }}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Add a New Project
            <Input
              className='py-6'
              type='text'
              onChange={e => {
                setInput(e.target.value)
              }}
              value={input}
              placeholder='Enter project name'
              required={true}
              autoFocus
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            Enter your new project name here. Click create when done.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className={cn(buttonVariants({ variant: 'default' }), {
              'cursor-not-allowed opacity-60': isCreateLoading,
            })}
            disabled={isCreateLoading}>
            {isCreateLoading ? (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <Icons.add className='mr-2 h-4 w-4' />
            )}
            <span>Create</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CreateProjectAlert
