import { Icons } from '@/components/icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const IntegrationCard = ({
  integration,
  params,
}: {
  integration: { id: string; name: string; description: string }
  params: any
}) => {
  const { id, name, description } = integration

  const router = useRouter()

  return (
    // <Link href={`/project/${params.projectId}/service/${id}`}>
    <Card
      className='cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'
      onClick={() => router.push(`/project/${params.projectId}/service/${id}`)}>
      <CardHeader className='flex flex-row items-center gap-4'>
        <Icons.project className='h-8 w-8' />
        <div className='grid gap-1'>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className='text-sm font-semibold'>Last update: 3 hours ago</div>
      </CardContent>
    </Card>
    // </Link>
  )
}

export default IntegrationCard
