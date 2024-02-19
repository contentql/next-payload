import { keys } from '@/apis/query-keys'
import { getServicesById } from '@/apis/railway/projects/getServicesById'
import { createService } from '@/apis/railway/services/createService'
import { deleteServiceById } from '@/apis/railway/services/deleteService'
import { Icons } from '@/components/icons'
import CreateServiceAlert from '@/components/project/create-service-alert'
import ServiceCard from '@/components/project/service-card'
import ServiceSettingsCard from '@/components/project/service-settings-card'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Separator } from '@/components/ui/separator'
import { TabsContent } from '@/components/ui/tabs'
import { toast } from '@/components/ui/use-toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'
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
  const [serviceName, setServiceName] = React.useState('')
  const [githubRepo, setGithubRepo] = React.useState('')
  const [showCreateAlert, setShowCreateAlert] = React.useState(false)
  const projectId = pathName.projectId as string
  const searchParams = useSearchParams()
  const queryClient = useQueryClient()

  const serviceId = searchParams.get('service')

  //fetch services
  const { data: services, isPending: isServicesPending } = useQuery({
    queryKey: keys('/graphql', 'post').detail(['services', projectId]),
    queryFn: () => getServicesById(projectId),
  })

  //create service

  const {
    isPending: isAddServicePending,
    variables: addServiceVariables,
    mutate: addServiceMutation,
  } = useMutation({
    mutationKey: keys('/graphql', 'post').detail(['createService', projectId]),
    mutationFn: ({
      projectId,
      serviceName,
      githubRepo,
    }: {
      projectId: string
      serviceName: string
      githubRepo: string
    }) => createService(projectId, serviceName, githubRepo),
    onSuccess: async () => {
      console.log('service success')
      await queryClient.invalidateQueries({
        queryKey: keys('/graphql', 'post').detail(['services', projectId]),
      })
      toast({
        title: 'Service added successfully.',
        description:
          'Your service has been added successfully you can take rest now.',
        variant: 'default',
      })
    },
    onError: async () => {
      console.log('Service deleted not success')
      toast({
        title: 'Something went wrong.',
        description: 'Your todo was not created. Please try again.',
        variant: 'destructive',
      })
    },
    onSettled: async () => {
      // setIsCreateLoading(false)
      setShowCreateAlert(false)
    },
  })

  //delete service
  const {
    isPending: isDeleteServicePending,
    variables: deleteServiceVariables,
    mutate: deleteServiceMutation,
  } = useMutation({
    mutationKey: keys(`/graphql`, 'post').detail(['service delete', projectId]),
    mutationFn: (id: string) => deleteServiceById(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: keys('/graphql', 'post').detail(['services', projectId]),
      })
      toast({
        title: 'Service deleted successfully.',
        description:
          'Your service has been deleted successfully you can take rest now.',
        variant: 'default',
      })
    },
    onError: async () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your service was not deleted. Please try again.',
        variant: 'destructive',
      })
    },
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

  if (isDeleteServicePending) {
    return (
      <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50'></div>
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
      <CreateServiceAlert
        showCreateAlert={showCreateAlert}
        setShowCreateAlert={setShowCreateAlert}
        serviceName={serviceName}
        setServiceName={setServiceName}
        githubRepo={githubRepo}
        setGithubRepo={setGithubRepo}
        projectId={projectId}
        addServiceMutation={addServiceMutation}
      />
      <TabsContent value='overview'>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className='flex min-h-screen w-full flex-col'>
              <main className='flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 md:py-3'>
                <div className='max-w-8xl mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3'>
                  <Card
                    className='cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-lg'
                    onClick={() => setShowCreateAlert(true)}>
                    <CardHeader className='flex flex-row items-center gap-4'>
                      <Icons.add className='h-8 w-8' />
                      <div className='grid gap-1'>
                        <CardTitle>Add Service</CardTitle>
                        <CardDescription>
                          Click to add a new service
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                  {services?.map((service: Service) => (
                    <ContextMenu key={service?.node.id}>
                      <ContextMenuTrigger>
                        <ServiceCard
                          service={service.node}
                          projectId={projectId}
                        />
                        <ContextMenuContent className='w-400'>
                          <ContextMenuItem>
                            {' '}
                            <div className='flex space-x-5'>
                              <p>
                                <Icons.add className='h-4 w-4' />{' '}
                              </p>
                              <p>Add variables</p>
                            </div>
                          </ContextMenuItem>
                          <ContextMenuItem>
                            <div className='flex space-x-5'>
                              <p>
                                <Icons.arrowRight className='h-4 w-4' />
                              </p>
                              <p>View variables</p>
                            </div>
                          </ContextMenuItem>
                          <ContextMenuItem>
                            <div className='flex space-x-5'>
                              <p>
                                <Icons.gitHub className='h-4 w-4' />
                              </p>
                              <p>Redeploy service</p>
                            </div>
                          </ContextMenuItem>
                          <Separator className='my-2' />
                          <ContextMenuItem
                            onClick={event => {
                              event.stopPropagation()
                              deleteServiceMutation(service?.node.id)
                            }}
                            className='text-red-500'>
                            <div className='flex space-x-5'>
                              <p>
                                <Icons.warning className='h-4 w-4' />
                              </p>
                              <p>Delete service</p>
                            </div>
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenuTrigger>
                    </ContextMenu>
                  ))}
                </div>
              </main>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem
              className='text-green-500'
              onClick={() => setShowCreateAlert(true)}>
              create service
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </TabsContent>
    </div>
  )
}

export default OverviewView
