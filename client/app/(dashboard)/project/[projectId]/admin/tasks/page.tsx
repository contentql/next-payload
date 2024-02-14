import { Metadata } from 'next'

import Tasks from '@/components/tasks/tasks'

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.',
}

export default function TaskPage() {
  return <Tasks />
}
