import ServiceDeploymentView from '@/app/_views/ServiceDeploymentView'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

import { useRouter, useSearchParams } from 'next/navigation'
import { RxCross2 } from 'react-icons/rx'
import ServiceVariablesView from '@/app/_views/ServiceVariablesView'

export default function ServiceSettingsCard({
  serviceId,
}: {
  serviceId: string
}) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const removeQueryParam = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('service')
    replace(`?${params.toString()}`, undefined)
  }

  return (
    <Card className='relative w-[420px] md:h-[650px] md:w-[700px]'>
      <CardHeader>
        <CardTitle>{serviceId}</CardTitle>
        <RxCross2
          className='absolute right-3 top-2 hover:cursor-pointer'
          onClick={removeQueryParam}
        />
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue='account'>
          <TabsList>
            <TabsTrigger value='deployments'>Deployments</TabsTrigger>
            <TabsTrigger value='variables'>variables</TabsTrigger>
            <TabsTrigger value='metrics'>Metrics</TabsTrigger>
            <TabsTrigger value='settings'>Settings</TabsTrigger>
          </TabsList>

          <Separator className='my-4' />

          <TabsContent value='deployments'>
            <ServiceDeploymentView />
          </TabsContent>
          <TabsContent value='variables'>
            <ServiceVariablesView />
          </TabsContent>
          <TabsContent value='metrics'>Change your Metrics here.</TabsContent>
          <TabsContent value='settings'>Change your Settings here.</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
