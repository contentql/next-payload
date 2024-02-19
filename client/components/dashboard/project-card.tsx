import { keys } from '@/apis/query-keys'
import { getProject } from '@/apis/railway/projects/getProject'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Project, UserProject } from '@/types/project-types'
import { deploymentStatus } from '@/utils/deploymentStatusColor'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const ProjectCard = ({ userProject }: { userProject: UserProject }) => {
  const { project_id } = userProject

  const router = useRouter()

  const { data: project, isPending: isProjectPending } = useQuery<Project>({
    queryKey: keys('/graphql', 'post').detail(['project', project_id]),
    queryFn: () => getProject(project_id),
  })

  const servicesCount = project?.services.edges.length

  const failedDeploymentsCount = project?.services.edges.filter(
    service =>
      service.node.deployments.edges[0].node.status.toUpperCase() === 'FAILED',
  ).length

  return (
    <Card
      className='relative cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'
      onClick={() => router.push(`/project/${project_id}`)}>
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
        <div
          className={cn(
            'absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full',
            failedDeploymentsCount
              ? deploymentStatus.FAILED
              : deploymentStatus.SUCCESS,
          )}></div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
