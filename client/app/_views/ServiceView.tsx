import { Icons } from '@/components/icons'
import Link from 'next/link'
import React from 'react'
import { Transition } from '@headlessui/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const services = [
  { id: '1', name: 'Storage', description: 'cloudflare R2' },
  { id: '2', name: 'Payments', description: 'stripe subscription' },
  { id: '3', name: 'Emails', description: 'sendgrid email system' },
  { id: '6', name: 'Frontend', description: 'nextjs application' },
  { id: '7', name: 'Backend', description: 'payload cms' },
  { id: '8', name: 'Database', description: 'mongodb' },
]

const ServiceView = ({ children, params }: { children: any; params: any }) => {
  const service = services.find(s => s.id === params.serviceId)
  return (
    <div>
      <div className='fixed -right-3 mt-16 h-full w-1/2'>
        <Card className='h-full'>
          <CardHeader>
            <div className='flex justify-between'>
              <div>
                <CardTitle>{service?.name}</CardTitle>
                <CardDescription className='mt-1'>
                  {service?.description}
                </CardDescription>
              </div>

              <Link href={`/project/${params.projectId}`}>
                <Icons.close className='h-6 w-6' />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Name of your project' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='framework'>Framework</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
            {children}
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ServiceView
