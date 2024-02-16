import ServiceCard from '@/components/project/service-card'
import { TabsContent } from '@/components/ui/tabs'

const OverviewView = ({ params }: { params: any }) => {
  const services = [
    { id: '6', name: 'Frontend', description: 'nextjs application' },
    { id: '7', name: 'Backend', description: 'payload cms' },
    { id: '8', name: 'Database', description: 'mongodb' },
  ]

  return (
    <TabsContent value='overview'>
      <div className='flex min-h-screen w-full flex-row'>
        <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:py-3'>
          <div
            className={
              params.serviceId
                ? `md:grid-row-2 lg:grid-row-3 grid w-full max-w-md gap-6`
                : `max-w-8xl mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3`
            }>
            {services.map(service => (
              <ServiceCard
                key={service?.id}
                service={service}
                params={params}
              />
            ))}
          </div>
        </main>
      </div>
    </TabsContent>
  )
}

export default OverviewView
