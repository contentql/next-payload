import { cn } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import {
  IoFlagOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoYoutube,
} from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'
import { ModeToggle } from './mode-toggle'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container mx-auto px-6 md:pt-12 lg:px-8'>
        <div className='flex flex-col justify-between space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0'>
          <div className='flex flex-col space-y-4'>
            <IoFlagOutline size={26} />
            <p>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className='flex space-x-4'>
              <IoLogoFacebook size={26} />
              <RiInstagramFill size={26} />
              <AiFillTwitterCircle size={26} />
              <IoLogoGithub size={26} />
              <IoLogoYoutube size={26} />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
            <div className='flex flex-col space-y-2'>
              <h6 className='font-semibold'>Solutions</h6>
              <Link className='block text-gray-400' href='#'>
                Marketing
              </Link>
              <Link className='block text-gray-400' href='#'>
                Analytics
              </Link>
              <Link className='block text-gray-400' href='#'>
                Commerce
              </Link>
              <Link className='block text-gray-400' href='#'>
                Insights
              </Link>
            </div>
            <div className='flex flex-col space-y-2'>
              <h6 className='font-semibold'>Support</h6>
              <Link className='block text-gray-400' href='#'>
                Pricing
              </Link>
              <Link className='block text-gray-400' href='#'>
                Documentation
              </Link>
              <Link className='block text-gray-400' href='#'>
                Guides
              </Link>
              <Link className='block text-gray-400' href='#'>
                API Status
              </Link>
            </div>
            <div className='flex flex-col space-y-2'>
              <h6 className='font-semibold'>Company</h6>
              <Link className='block text-gray-400' href='#'>
                About
              </Link>
              <Link className='block text-gray-400' href='#'>
                Blog
              </Link>
              <Link className='block text-gray-400' href='#'>
                Jobs
              </Link>
              <Link className='block text-gray-400' href='#'>
                Press
              </Link>
              <Link className='block text-gray-400' href='#'>
                Partners
              </Link>
            </div>
            <div className='flex flex-col space-y-2'>
              <h6 className='font-semibold'>Legal</h6>
              <Link className='block text-gray-400' href='#'>
                Claim
              </Link>
              <Link className='block text-gray-400' href='#'>
                Privacy
              </Link>
              <Link className='block text-gray-400' href='#'>
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-between pb-6 pt-8'>
          <p className='text-left text-sm text-gray-400'>
            © 2020 Your Company, Inc. All rights reserved.
          </p>
          <ModeToggle />
        </div>
      </div>
    </footer>
  )
}
