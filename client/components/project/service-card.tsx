import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import formatTimeAgo from '@/utils/FormateDate'
import Image from 'next/image'
import { Icons } from '../icons'

const ServiceCard = ({
  service,
}: {
  service: {
    id: string
    name: string
    description: string
    updatedAt: Date
    icon: string
    deployments: {
      edges: [
        {
          node: {
            status: string
            updatedAt: Date
          }
        },
      ]
    }
  }
}) => {
  const DeploymentStatus: { [key: string]: string } = {
    SUCCESS: 'bg-green-500  hover:bg-green-600',
    FAILED: 'bg-red-500  hover:bg-red-600',
    BUILDING: 'bg-orange-500  hover:bg-orange-600',
    DEPLOYING: 'bg-orange-500  hover:bg-orange-600',
    CRASHED: 'bg-red-800  hover:bg-red-900',
  }
  const { id, name, description, updatedAt, icon, deployments } = service
  const DEPLOYMENT = deployments?.edges[0]?.node
  return (
    <Card className='relative cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'>
      <CardHeader className='flex flex-row items-center gap-4'>
        {icon !== null ? (
          <Image src={icon} alt='icon' width={28} height={28} />
        ) : (
          <Icons.gitHub className='h-8 w-8' />
        )}
        <div className='grid gap-1'>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className='text-sm font-semibold'>
          Last update: {formatTimeAgo(DEPLOYMENT.updatedAt)}
        </div>
        <div
          className={`absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full transition-colors  ${DeploymentStatus[DEPLOYMENT.status]}`}></div>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
