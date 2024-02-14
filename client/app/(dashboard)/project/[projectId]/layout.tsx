import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { UserAccountNav } from '@/components/user-account-nav'

interface ProjectLayoutProps {
  children?: React.ReactNode
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <div className='md:px=10 flex min-h-screen flex-col space-y-6'>
      <header className='sticky top-0 z-40 border-b bg-background'>
        <div className='container flex h-16 items-center justify-between py-4'>
          <MainNav />
          <UserAccountNav />
        </div>
      </header>
      <div className='flex-18 container md:px-20'>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>
          {children}
        </main>
      </div>
      <SiteFooter className='border-t' />
    </div>
  )
}

export default ProjectLayout
