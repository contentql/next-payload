import { Metadata } from 'next'
import Tasks from './_components/Tasks'

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.',
}

export default function TaskPage() {
  return <Tasks />
}
