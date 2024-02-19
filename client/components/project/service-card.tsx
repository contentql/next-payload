import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import formatTimeAgo from '@/utils/FormateDate'
import { deploymentStatus } from '@/utils/deploymentStatusColor'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
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
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const addQueryParam = (serviceId: string) => {
    const params = new URLSearchParams(searchParams)

    if (serviceId) {
      params.set('service', serviceId)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  const router = useRouter()
  const { id, name, description, updatedAt, icon, deployments } = service
  const DEPLOYMENT = deployments?.edges[0]?.node
  return (
    <Card
      className='relative cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'
      onClick={() => addQueryParam(id)}>
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
          className={`absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full transition-colors  ${deploymentStatus[DEPLOYMENT.status]}`}></div>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
