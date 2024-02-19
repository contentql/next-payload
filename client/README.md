# React Query - useQueries Hook for Retrieving User Projects

## Description

The `useQueries` hook provided by `react-query` version 5 for fetching user
projects from a GraphQL endpoint.

## Installation

To use this code, make sure React Query installed:

```bash
npm i @tanstack/react-query
```

## Usage

1. Import the necessary dependencies in your component:

   ```javascript
   import { useQueries } from 'react-query'
   ```

2. Use the `useQueries` hook to fetch user projects:

   ```javascript
   const projects = useQueries({
     queries: userProjects
       ? userProjects.map(project => ({
           queryKey: keys('/graphql', 'post').detail([project.project_id]),
           queryFn: () => getProject(project.project_id),
         }))
       : [],
     combine: results => ({
       data: results.map(result => result.data),
       pending: results.some(result => result.isPending),
     }),
   })
   ```

3. Ensure that `userProjects` is an array of objects containing a `project_id`
   property.
