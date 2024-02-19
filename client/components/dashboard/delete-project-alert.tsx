import { deleteProject } from '@/apis/projects/mutations'
import { keys } from '@/apis/query-keys'
import { deleteRailwayProject } from '@/apis/railway/projects/deleteProject'
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
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Icons } from '../icons'
import { toast } from '../ui/use-toast'

const DeleteProjectAlert = (props: {
  showDeleteAlert: boolean
  setShowDeleteAlert: Function
  projectId: string
  userProjectId: string
}) => {
  const { showDeleteAlert, setShowDeleteAlert, projectId, userProjectId } =
    props

  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)

  const queryClient = useQueryClient()

  const {
    isPending: isDeleteProjectPending,
    variables: deleteProjectVariables,
    isSuccess: deleteProjectSuccess,
    mutate: deleteProjectMutation,
  } = useMutation({
    mutationKey: keys('/api/projects', 'post').detail([projectId]),
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: keys('/api/projects', 'get').main(),
      })
      toast({
        title: 'Project Deleted Successfully',
        description: 'The project has been successfully from the database.',
        variant: 'default',
      })
    },
    onError: async () => {
      toast({
        title: 'Something went wrong.',
        description: 'Project is not deleted to database.',
        variant: 'destructive',
      })
    },
    onSettled: async () => {
      setIsDeleteLoading(false)
      setShowDeleteAlert(false)
    },
  })

  const {
    isPending: isDeleteRailwayProjectPending,
    variables: deleteRailwayProjectVariables,
    isSuccess: deleteRailwayProjectSuccess,
    mutate: deleteRailwayProjectMutation,
  } = useMutation({
    mutationKey: keys('/graphql', 'post').detail(['project_delete', projectId]),
    mutationFn: (id: string) => deleteRailwayProject(id),
    onSuccess: async () => {
      deleteProjectMutation(userProjectId)
    },
    onError: async () => {
      setIsDeleteLoading(false)
      setShowDeleteAlert(false)
      toast({
        title: 'Something went wrong.',
        description: 'Project was not deleted. Please try again.',
        variant: 'destructive',
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDeleteLoading(true)
    deleteRailwayProjectMutation(projectId)
  }

  return (
    <AlertDialog
      open={showDeleteAlert}
      onOpenChange={() => setShowDeleteAlert()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this project?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
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
  )
}

export default DeleteProjectAlert
