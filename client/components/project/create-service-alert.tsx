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
import { cn } from '@/lib/utils'
import React from 'react'
import { Icons } from '../icons'

const CreateServiceAlert = (props: {
  showCreateAlert: boolean
  setShowCreateAlert: Function
  serviceName: string
  setServiceName: Function
  githubRepo: string
  setGithubRepo: Function
  projectId: string
  addServiceMutation: Function
}) => {
  const {
    showCreateAlert,
    setShowCreateAlert,
    serviceName,
    setServiceName,
    githubRepo,
    setGithubRepo,
    projectId,
    addServiceMutation,
  } = props

  const [isCreateLoading, setIsCreateLoading] = React.useState<boolean>(false)

  return (
    <AlertDialog
      open={showCreateAlert}
      onOpenChange={() => {
        setServiceName('')
        setShowCreateAlert(false)
      }}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Add a New Service
            <Input
              className='mb-4 mt-2 py-6'
              type='text'
              onChange={e => {
                setServiceName(e.target.value)
              }}
              placeholder='Enter service name'
              required={true}
              autoFocus
            />
            <Input
              className='py-6'
              type='text'
              onChange={e => {
                setGithubRepo(e.target.value)
              }}
              placeholder='Ex: contentql/your-repository-name'
              required={true}
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            Enter your new service name and gitHub url here. Click create when
            done.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async event => {
              event.preventDefault()
              setIsCreateLoading(true)
              addServiceMutation({ projectId, serviceName, githubRepo })
            }}
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

export default CreateServiceAlert
