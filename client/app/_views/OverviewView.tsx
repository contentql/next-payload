import ServiceCard from '@/components/project/service-card'
import { TabsContent } from '@/components/ui/tabs'

const OverviewView = () => {
  const services = [
    { id: '1', name: 'Frontend', description: 'nextjs application' },
    { id: '2', name: 'Backend', description: 'payload cms' },
    { id: '3', name: 'Database', description: 'mongodb' },
  ]

  return (
    <TabsContent value='overview'>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:py-3'>
          <div className='mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map(service => (
              <ServiceCard key={service?.id} service={service} />
            ))}
          </div>
        </main>
      </div>
    </TabsContent>
  )
}

export default OverviewView
