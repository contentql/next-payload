import { keys } from '@/apis/query-keys'
import { getServicesById } from '@/apis/railway/projects/getServicesById'
import ServiceCard from '@/components/project/service-card'
import { TabsContent } from '@/components/ui/tabs'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams, useSearchParams } from 'next/navigation'

import ServiceSettingsCard from '@/components/project/service-settings-card'
import { motion } from 'framer-motion'

interface Service {
  id: string
  node: {
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
}

const OverviewView = () => {
  const pathName = useParams()

  const projectId = pathName.projectId as string
  const searchParams = useSearchParams()

  const serviceId = searchParams.get('service')

  const { data: services, isPending: isServicesPending } = useQuery({
    queryKey: keys('/graphql', 'post').detail(['services', projectId]),
    queryFn: () => getServicesById(projectId),
  })

  if (isServicesPending) {
    return (
      <div className='flex h-[400px] items-center justify-center'>
        <div className=' animate-ping rounded-full'>
          <Image
            src='/images/ContentQL.png'
            alt='loading'
            width={60}
            height={60}
          />
        </div>
      </div>
    )
  }

  return (
    <div className='relative '>
      {serviceId && (
        <motion.div
          className='absolute right-2 z-10'
          drag
          dragConstraints={{
            left: -700,
            right: 8,
            top: -8,
            bottom: 300,
          }}>
          <ServiceSettingsCard />
        </motion.div>
      )}

      <TabsContent value='overview'>
        <div className='flex min-h-screen w-full flex-col'>
          <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:py-3'>
            <div className='max-w-8xl mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {services?.map((service: Service) => (
                <ServiceCard key={service?.node.id} service={service.node} />
              ))}
            </div>
          </main>
        </div>
      </TabsContent>
    </div>
  )
}

export default OverviewView
