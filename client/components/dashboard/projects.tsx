import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '../icons'

const Projects = (props: { setShowCreateAlert: Function }) => {
  const { setShowCreateAlert } = props

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:p-10'>
        <div className='mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Card
            className='cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'
            onClick={() => setShowCreateAlert(true)}>
            <CardHeader className='flex flex-row items-center gap-4'>
              <Icons.add className='h-8 w-8' />
              <div className='grid gap-1'>
                <CardTitle>Add Project</CardTitle>
                <CardDescription>Click to add a new project</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className='cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'>
            <CardHeader className='flex flex-row items-center gap-4'>
              <Icons.project className='h-8 w-8' />
              <div className='grid gap-1'>
                <CardTitle>Project Title</CardTitle>
                <CardDescription>Project description</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='grid gap-2'>
              <div className='text-sm font-semibold'>
                Last update: 3 hours ago
              </div>
              <Badge className='w-fit'>Active</Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Projects
