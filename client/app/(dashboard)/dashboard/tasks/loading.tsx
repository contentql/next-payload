import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { Skeleton, SVGSkeleton } from '@/components/table-skeleton'

const DashboardTasksLoading = () => (
  <DashboardShell>
    <DashboardHeader heading='Tasks' text='Create and manage your tasks.' />
    <div className='grid gap-10'>
      <div className='h-full flex-1 flex-col space-y-8 overflow-hidden md:flex'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-1 items-center space-x-2'>
              <div className='flex h-8 w-[150px] border border-input px-3 py-1 shadow-sm transition-colors file:border-0 lg:w-[250px]'>
                <Skeleton className='w-[120px] max-w-full' />
              </div>
            </div>
            <div className='ml-auto hidden h-8 items-center justify-center border border-input px-3 shadow-sm transition-colors lg:flex'>
              <Skeleton className='w-[32px] max-w-full' />
              <SVGSkeleton className='mr-2 h-[15px] w-[15px]' />
            </div>
          </div>
          <div className='border'>
            <div className='relative w-full overflow-auto'>
              <table className='w-full caption-bottom'>
                <thead className='[&amp;_tr]:border-b'>
                  <tr className='border-b transition-colors'>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'>
                      <div className='h-4 w-4 shrink-0 translate-y-[2px] border border-primary'></div>
                    </th>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'>
                      <div>
                        <Skeleton className='w-[16px] max-w-full' />
                      </div>
                    </th>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'>
                      <div className='flex items-center space-x-2'>
                        <div className='-ml-3 inline-flex h-8 items-center justify-center px-3 transition-colors'>
                          <span>
                            <Skeleton className='w-[32px] max-w-full' />
                          </span>
                          <SVGSkeleton className='ml-2 h-[15px] w-[15px]' />
                        </div>
                      </div>
                    </th>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'>
                      <div className='flex items-center space-x-2'>
                        <div className='-ml-3 inline-flex h-8 items-center justify-center px-3 transition-colors'>
                          <span>
                            <Skeleton className='w-[72px] max-w-full' />
                          </span>
                          <SVGSkeleton className='ml-2 h-[15px] w-[15px]' />
                        </div>
                      </div>
                    </th>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'>
                      <div className='flex items-center space-x-2'>
                        <div className='-ml-3 inline-flex h-8 items-center justify-center px-3 transition-colors'>
                          <span>
                            <Skeleton className='w-[80px] max-w-full' />
                          </span>
                          <SVGSkeleton className='ml-2 h-[15px] w-[15px]' />
                        </div>
                      </div>
                    </th>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'>
                      <div className='flex items-center space-x-2'>
                        <div className='-ml-3 inline-flex h-8 items-center justify-center px-3 transition-colors'>
                          <span>
                            <Skeleton className='w-[80px] max-w-full' />
                          </span>
                          <SVGSkeleton className='ml-2 h-[15px] w-[15px]' />
                        </div>
                      </div>
                    </th>
                    <th className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-10 px-2 text-left align-middle'></th>
                  </tr>
                </thead>
                <tbody className='[&amp;_tr:last-child]:border-0'>
                  <tr className='border-b transition-colors'>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='h-4 w-4 shrink-0 translate-y-[2px] border border-primary'></div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[104px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[40px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                        <SVGSkeleton className='h-[15px] w-[15px]' />
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b transition-colors'>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='h-4 w-4 shrink-0 translate-y-[2px] border border-primary'></div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[128px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[40px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                        <SVGSkeleton className='h-[15px] w-[15px]' />
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b transition-colors'>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='h-4 w-4 shrink-0 translate-y-[2px] border border-primary'></div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[128px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[40px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                        <SVGSkeleton className='h-[15px] w-[15px]' />
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b transition-colors'>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='h-4 w-4 shrink-0 translate-y-[2px] border border-primary'></div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[128px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[40px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                        <SVGSkeleton className='h-[15px] w-[15px]' />
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b transition-colors'>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='h-4 w-4 shrink-0 translate-y-[2px] border border-primary'></div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[128px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[40px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex space-x-2'>
                        <span className='max-w-[500px]'>
                          <Skeleton className='w-[192px] max-w-full' />
                        </span>
                      </div>
                    </td>
                    <td className='[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] p-2 align-middle'>
                      <div className='flex h-8 w-8 items-center justify-center p-0 transition-colors'>
                        <SVGSkeleton className='h-[15px] w-[15px]' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='flex items-center justify-between px-2'>
            <div className='flex-1'>
              <Skeleton className='w-[184px] max-w-full' />
            </div>
            <div className='flex items-center space-x-6 lg:space-x-8'>
              <div className='flex items-center space-x-2'>
                <p>
                  <Skeleton className='w-[104px] max-w-full' />
                </p>
                <div className='[&amp;>span]:line-clamp-1 flex h-8 w-[70px] items-center justify-between border border-input px-3 py-2 shadow-sm'>
                  <span>
                    <Skeleton className='w-[16px] max-w-full' />
                  </span>
                  <SVGSkeleton className='h-[15px] w-[15px]' />
                </div>
              </div>
              <div className='flex w-[100px] items-center justify-center'>
                <Skeleton className='w-[88px] max-w-full' />
              </div>
              <div className='flex items-center space-x-2'>
                <div className='hidden h-8 w-8 items-center justify-center border border-input p-0 shadow-sm transition-colors lg:flex'>
                  <SVGSkeleton className='h-[15px] w-[15px]' />
                </div>
                <div className='inline-flex h-8 w-8 items-center justify-center border border-input p-0 shadow-sm transition-colors'>
                  <SVGSkeleton className='h-[15px] w-[15px]' />
                </div>
                <div className='inline-flex h-8 w-8 items-center justify-center border border-input p-0 shadow-sm transition-colors'>
                  <SVGSkeleton className='h-[15px] w-[15px]' />
                </div>
                <div className='hidden h-8 w-8 items-center justify-center border border-input p-0 shadow-sm transition-colors lg:flex'>
                  <SVGSkeleton className='h-[15px] w-[15px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardShell>
)

export default DashboardTasksLoading
