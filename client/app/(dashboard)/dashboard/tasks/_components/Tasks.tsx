'use client'

import TasksView from '@/app/_views/TasksView'
import isAuth from '@/components/auth/is-auth'

const Tasks = () => {
  return <TasksView />
}

export default isAuth(Tasks)
