import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '@fluentui/react-components'
import { projects } from '../data/projects'

export function ProjectsTable() {
  return (
    <>
      <div className="section-heading"><h3>Projects</h3><span>3 total</span></div>
      <div className="table-scroll">
        <Table aria-label="Projects" className="projects-table">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Project</TableHeaderCell>
              <TableHeaderCell>Owner</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.owner}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

