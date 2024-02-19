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

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
    console.log('onSubmit', values)
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
            <Button variant='ghost'>Raw Editor</Button>
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
