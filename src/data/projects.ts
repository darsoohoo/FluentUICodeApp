export type Project = {
  id: number
  name: string
  owner: string
  status: string
}

export const projects: Project[] = [
  { id: 1, name: 'Website refresh', owner: 'Alex Morgan', status: 'In progress' },
  { id: 2, name: 'Team onboarding', owner: 'Jamie Chen', status: 'Planned' },
  { id: 3, name: 'Customer guide', owner: 'Sam Rivera', status: 'Complete' },
]

