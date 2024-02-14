import { Icons } from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function BreadCrumbs() {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <nav aria-label='Breadcrumb'>
      <ol className='mx-auto flex max-w-7xl space-x-4'>
        <li className='flex'>
          <div className='flex items-center'>
            <Link className='text-gray-400 hover:text-gray-500' href='#'>
              <Icons.home className='h-5 w-5 flex-shrink-0' />
              <span className='sr-only'>Home</span>
            </Link>
          </div>
        </li>
        {pathNames.map((link, index) => {
          const name = link.charAt(0).toUpperCase() + link.slice(1)
          const href = `/${pathNames.slice(0, index + 1).join('/')}`

          return (
            <li key={index} className='flex'>
              <div className='flex items-center'>
                <Icons.chevronRight className='h-5 w-5 flex-shrink-0 text-gray-400' />
                <Link
                  className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                  href={href}>
                  {name}
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
