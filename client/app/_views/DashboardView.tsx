'use client'

import { getAllProjects } from '@/apis/projects'
import { keys } from '@/apis/query-keys'
import { getProject } from '@/apis/railway/projects/getProject'
import CreateProjectAlert from '@/components/dashboard/create-project-alert'
import Projects from '@/components/dashboard/projects'
import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import { DashboardShell } from '@/components/shell'
import { Button } from '@/components/ui/button'
import { Project } from '@/types/project-types'
import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'

const DashboardView = () => {
  const [input, setInput] = React.useState('')
  const [showCreateAlert, setShowCreateAlert] = React.useState(false)

  const { data: userProjects, isPending } = useQuery({
    queryKey: keys('/api/projects', 'get').main(),
    queryFn: getAllProjects,
  })

  const projects = useQueries({
    queries: userProjects
      ? userProjects.map((project: { project_id: string }) => ({
          queryKey: keys('/graphql', 'post').detail([project.project_id]),
          queryFn: () => getProject(project.project_id),
        }))
      : [],
    combine: results => ({
      data: results.map(result => result.data),
      pending: results.some(result => result.isPending),
    }),
  })

  if (projects.pending) return null

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Projects'
        text='Create and manage your projects.'>
        <Button onClick={() => setShowCreateAlert(true)}>
          <Icons.add className='mr-2 h-4 w-4' />
          New Project
        </Button>
        <CreateProjectAlert
          showCreateAlert={showCreateAlert}
          setShowCreateAlert={setShowCreateAlert}
          input={input}
          setInput={setInput}
        />
      </DashboardHeader>
      <Projects
        setShowCreateAlert={setShowCreateAlert}
        projects={projects?.data as Project[]}
      />
    </DashboardShell>
  )
}

export default DashboardView
