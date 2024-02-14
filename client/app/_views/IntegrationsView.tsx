import IntegrationCard from '@/components/project/integration-card'
import { TabsContent } from '@/components/ui/tabs'

const IntegrationsView = () => {
  const integrations = [
    { id: 1, name: 'Upload s3' },
    { id: 2, name: 'Stripe Payments' },
    { id: 3, name: 'Sengrid Emails' },
  ]
  return (
    <TabsContent value='integrations'>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:p-10'>
          <div className='mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {integrations.map(integration => (
              <IntegrationCard key={integration.id} data={integration} />
            ))}
          </div>
        </main>
      </div>
    </TabsContent>
  )
}

export default IntegrationsView
