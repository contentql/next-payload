import React, { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Icons } from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label'

const formSchema = z.object({
  variableName: z.string(),
  value: z.string(),
})

const ServiceVariablesView = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variableName: '',
      value: '',
    },
  })

  const [toggle, setToggle] = useState(false)
  const [variables, setVariables] = useState({})

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setVariables({ ...variables, [values.variableName]: values.value })
    setToggle(false)
  }

  const createNewVariable = () => {
    setToggle(true)
  }

  return (
    <div>
      {!toggle ? (
        <div className='mt-8 flex items-center justify-between'>
          <div>
            <p>Service Variables</p>
          </div>
          <div className='flex gap-2'>
            <Button variant='ghost'>Shared Variable</Button>

            <Dialog>
              <DialogTrigger asChild>
                {/* <Button variant='outline'>Edit Profile</Button> */}
                <Button variant='ghost'>Raw Editor</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Raw Editor</DialogTitle>
                  <DialogDescription>
                    Add, edit, or delete your project variables
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='name' className='text-right'>
                      Name
                    </Label>
                    <Input
                      id='name'
                      value='Pedro Duarte'
                      className='col-span-3'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor='username' className='text-right'>
                      Username
                    </Label>
                    <Input
                      id='username'
                      value='@peduarte'
                      className='col-span-3'
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type='submit'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant='outline' onClick={() => createNewVariable()}>
              New variable
            </Button>
          </div>
        </div>
      ) : (
        <div className=''>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2'>
              <FormField
                control={form.control}
                name='variableName'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='VARIABLE_NAME' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='value'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='VALUE' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button>Add</Button>
              <Button variant='outline'>cancel</Button>
            </form>
          </Form>
        </div>
      )}

      <Separator className='my-4' />
      <div>
        {Object.keys(variables).map(key => (
          <div
            key={key}
            className='mb-2 mt-2 flex justify-between rounded-lg pb-2 pl-4 pr-4 pt-2 hover:bg-slate-900'>
            <p className='w-[200px] truncate'>{key}</p>
            <div className='w-[200px] truncate'>
              {variables[key as keyof typeof variables]}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icons.ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Promote</DropdownMenuItem>
                <DropdownMenuItem>Generator</DropdownMenuItem>
                <DropdownMenuItem className='text-red-800'>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceVariablesView
