import { Icons } from '@/components/icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const IntegrationCard = ({ data }: { data: { id: number; name: String } }) => {
  const { id, name } = data

  return (
    <Card className='relative cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'>
      <CardHeader className='flex flex-row items-center gap-4'>
        <Icons.project className='h-8 w-8' />
        <div className='grid gap-1'>
          <CardTitle>{name}</CardTitle>
          <CardDescription>Integration description</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='grid gap-2'>
        <div className='text-sm font-semibold'>Last update: 3 hours ago</div>
      </CardContent>
    </Card>
  )
}

export default IntegrationCard
