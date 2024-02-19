import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ServiceDeploymentView = () => {
  const data = [
    {
      name: 'next-clinet',
      commitMessage: 'chore : service deployment',
      date: '1 day ago',
      branch: 'dev',
    },
    {
      name: 'next-clinet',
      commitMessage: 'chore : service second changes',
      date: '2 day ago',
      branch: 'dev',
    },
    {
      name: 'next-clinet',
      commitMessage: 'chore : service init',
      date: '3 day ago',
      branch: 'dev',
    },
  ]
  return (
    <div>
      {data.map(list => (
        <div key={list.date} className='mb-4 mt-4'>
          <Card className='w=full flex justify-between'>
            <CardHeader>
              <CardTitle>{list.name}</CardTitle>
              <CardDescription>{list.date}</CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle className='w-[200px] truncate'>
                {list.commitMessage}
              </CardTitle>
              <CardDescription>{list.branch}</CardDescription>
            </CardHeader>

            <CardFooter className='flex justify-between gap-4'>
              <Button>view logs</Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Icons.ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View Logs</DropdownMenuItem>
                  <DropdownMenuItem>Restart</DropdownMenuItem>
                  <DropdownMenuItem>Redeploy</DropdownMenuItem>
                  <DropdownMenuItem className='text-red-800'>
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default ServiceDeploymentView
