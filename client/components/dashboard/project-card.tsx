import { keys } from '@/apis/query-keys'
import { getProject } from '@/apis/railway/projects/getProject'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Project, UserProject } from '@/types/project-types'
import { deploymentStatus } from '@/utils/deploymentStatusColor'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Icons } from '../icons'
import DeleteProjectAlert from './delete-project-alert'

const ProjectCard = ({ userProject }: { userProject: UserProject }) => {
  const { project_id } = userProject

  const [showDeleteAlert, setShowDeleteAlert] = React.useState(false)

  const router = useRouter()

  const { data: project, isPending: isProjectPending } = useQuery<Project>({
    queryKey: keys('/graphql', 'post').detail(['project', project_id]),
    queryFn: () => getProject(project_id),
  })

  const servicesCount = project?.services?.edges?.length

  const failedDeploymentsCount = project?.services?.edges?.filter(
    service =>
      service?.node?.deployments?.edges[0]?.node?.status?.toUpperCase() ===
      'FAILED',
  ).length

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowDeleteAlert(true)
  }

  return (
    <Card
      className='relative flex cursor-pointer flex-col justify-between transition-shadow duration-200 ease-in-out hover:shadow-lg'
      onClick={() => router.push(`/project/${project_id}`)}>
      <ContextMenu>
        <ContextMenuTrigger className='absolute right-0 top-0 h-full w-full' />
        <ContextMenuContent className='w-64'>
          <ContextMenuItem className='text-red-500' onClick={handleDelete}>
            <Icons.trash className='mr-3 h-4 w-4' />
            Delete
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <CardHeader className='flex flex-row items-center gap-4'>
        <div className='grid gap-1'>
          <CardTitle>{project?.name}</CardTitle>
          <CardDescription>{project?.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className=' text-sm font-semibold text-muted-foreground'>
          {servicesCount} {servicesCount! === 1 ? 'Service' : 'Services'}
        </div>
        <div className='flex items-center justify-center'>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  'absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full',
                  failedDeploymentsCount
                    ? deploymentStatus.FAILED
                    : deploymentStatus.SUCCESS,
                )}
              />
            </TooltipTrigger>
            <TooltipContent
              align='center'
              className='rounded-md bg-gray-900 p-2 text-white'
              side='top'>
              <p>
                {failedDeploymentsCount ? 'Deployment Issues' : 'No Issues'}
              </p>
              <div className='fill-current text-gray-900' />
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
      <DeleteProjectAlert
        showDeleteAlert={showDeleteAlert}
        setShowDeleteAlert={setShowDeleteAlert}
        projectId={project_id}
        userProjectId={userProject.id}
      />
    </Card>
  )
}

export default ProjectCard
