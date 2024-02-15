import { Icons } from '@/components/icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import formatTimeAgo from '@/utils/FormateDate'

const ServiceCard = ({
  service,
}: {
  service: { id: string; name: string; description: string; updatedAt: Date }
}) => {
  const { id, name, description, updatedAt } = service

  return (
    <Card className='relative cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'>
      <CardHeader className='flex flex-row items-center gap-4'>
        <Icons.project className='h-8 w-8' />
        <div className='grid gap-1'>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className='text-end text-sm font-semibold'>
          Last update: {formatTimeAgo(updatedAt)}
        </div>
        <div className='absolute right-2 top-2 flex h-3 w-3 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-600'></div>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
