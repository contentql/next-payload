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
import { useRouter, useSearchParams } from 'next/navigation'
import { RxCross2 } from 'react-icons/rx'

export default function ServiceSettingsCard() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const removeQueryParam = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('service')
    replace(`?${params.toString()}`, undefined)
  }

  return (
    <Card className='relative w-[350px]'>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <RxCross2
          className='absolute right-3 top-2 hover:cursor-pointer'
          onClick={removeQueryParam}
        />
        <CardDescription>Deploy your new project in one-click.</CardDescription>
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
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' onClick={removeQueryParam}>
          Cancel
        </Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
