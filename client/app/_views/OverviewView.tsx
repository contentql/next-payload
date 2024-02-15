import { keys } from '@/apis/query-keys'
import { getServicesById } from '@/apis/railway/projects/getServicesById'
import ServiceCard from '@/components/project/service-card'
import { TabsContent } from '@/components/ui/tabs'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
const OverviewView = () => {
  const pathName = usePathname()
  const projectId = pathName.split('/').at(-1)?.toString()

  const { data: services, isPending: isServicesPending } = useQuery({
    queryKey: keys('/api/project/services', 'get').main(),
    queryFn: () => getServicesById(projectId!),
  })

  return (
    <TabsContent value='overview'>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:py-3'>
          <div className='max-w-8xl mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services?.map(
              (service: {
                id: string
                node: {
                  id: string
                  name: string
                  description: string
                  updatedAt: Date
                }
              }) => (
                <ServiceCard key={service?.node.id} service={service.node} />
              ),
            )}
          </div>
        </main>
      </div>
    </TabsContent>
  )
}

export default OverviewView
