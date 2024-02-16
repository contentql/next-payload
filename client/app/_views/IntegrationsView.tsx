import IntegrationCard from '@/components/project/integration-card'
import { TabsContent } from '@/components/ui/tabs'

const IntegrationsView = ({ params }: { params: any }) => {
  const integrations = [
    { id: '1', name: 'Storage', description: 'cloudflare R2' },
    { id: '2', name: 'Payments', description: 'stripe subscription' },
    { id: '3', name: 'Emails', description: 'sendgrid email system' },
  ]

  return (
    <TabsContent value='integrations'>
      <div className='flex min-h-screen w-full flex-col'>
        <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:py-3'>
          <div
            className={
              params.serviceId
                ? `md:grid-row-2 lg:grid-row-3 grid w-full max-w-md gap-6`
                : `max-w-8xl mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3`
            }>
            {integrations.map(integration => (
              <IntegrationCard integration={integration} params={params} />
            ))}
          </div>
        </main>
      </div>
    </TabsContent>
  )
}

export default IntegrationsView
