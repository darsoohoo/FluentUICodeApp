import { useState } from 'react'
import {
  createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader,
  DataGridHeaderCell, DataGridRow, type TableColumnDefinition, type TableRowId,
} from '@fluentui/react-components'
import { projects, type Project } from '../data/projects'

const columns: TableColumnDefinition<Project>[] = [
  createTableColumn<Project>({
    columnId: 'name',
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => 'Project',
    renderCell: (project) => project.name,
  }),
  createTableColumn<Project>({
    columnId: 'owner',
    compare: (a, b) => a.owner.localeCompare(b.owner),
    renderHeaderCell: () => 'Owner',
    renderCell: (project) => project.owner,
  }),
  createTableColumn<Project>({
    columnId: 'status',
    compare: (a, b) => a.status.localeCompare(b.status),
    renderHeaderCell: () => 'Status',
    renderCell: (project) => project.status,
  }),
]

export function ProjectsDataGrid() {
  const [selectedRows, setSelectedRows] = useState(new Set<TableRowId>())

  return (
    <>
      <div className="section-heading"><h3>Projects</h3><span role="status">{selectedRows.size} selected</span></div>
      <div className="table-scroll">
        <DataGrid items={projects} columns={columns} sortable selectionMode="multiselect"
          aria-label="Projects" getRowId={(project) => project.id}
          selectedItems={selectedRows} onSelectionChange={(_, data) => setSelectedRows(data.selectedItems)}>
          <DataGridHeader>
            <DataGridRow selectionCell={{ checkboxIndicator: { 'aria-label': 'Select all projects' } }}>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Project>>
            {({ item, rowId }) => (
              <DataGridRow<Project> key={rowId} selectionCell={{ checkboxIndicator: { 'aria-label': 'Select ' + item.name } }}>
                {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </div>
    </>
  )
}

