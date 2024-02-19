import { keys } from '@/apis/query-keys'
import { getProject } from '@/apis/railway/projects/getProject'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { UserProject } from '@/types/project-types'
import formatTimeAgo from '@/utils/FormateDate'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
const ProjectCard = ({ userProject }: { userProject: UserProject }) => {
  const { id, project_id } = userProject

  const router = useRouter()

  const { data: project, isPending: isProjectPending } = useQuery({
    queryKey: keys('/graphql', 'post').detail(['project', project_id]),
    queryFn: () => getProject(project_id),
  })

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
        <div className='text-end text-sm font-semibold'>
          Last update: {formatTimeAgo(new Date())}
        </div>
        <div className='absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-600'></div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
