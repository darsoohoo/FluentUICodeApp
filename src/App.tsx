import { useState } from 'react'
import { Badge, FluentProvider, Switch } from '@fluentui/react-components'
import { darkTheme, lightTheme } from './theme'
import { LeftNavigation } from './components/LeftNavigation'
import { ProjectsDataGrid } from './components/ProjectsDataGrid'
import { ProjectsTable } from './components/ProjectsTable'
import { Stack } from './components/Stack'
import './App.css'

export default function App() {
  const [page, setPage] = useState('data-grid')
  const [darkMode, setDarkMode] = useState(false)

  return (
    <FluentProvider theme={darkMode ? darkTheme : lightTheme} className="app">
      <aside className="sidebar">
        <div className="brand-mark" aria-hidden="true">F</div>
        <h1>Fluent UI 2</h1>
        <p className="muted">A small, simple example.</p>
        <LeftNavigation page={page} onPageChange={setPage} />
        <div className="sidebar-footer">Power Apps Code App<br />React v9 components</div>
      </aside>
      <main>
        <header className="topbar">
          <Stack direction="row" align="center">
            <span>Component examples</span>
            <Switch label="Dark theme" checked={darkMode} onChange={(_, data) => setDarkMode(data.checked)} />
          </Stack>
        </header>
        <section className="content">
          <Badge appearance="tint" color="brand">3 sample projects</Badge>
          <h2>{page === 'data-grid' ? 'Data grid' : 'Table'}</h2>
          <p className="description">{page === 'data-grid'
            ? 'Explore a small project list. Select rows or click a column heading to sort.'
            : 'The same three projects in a simple, read-only table.'}</p>
          <div className="surface">
            {page === 'data-grid' ? <ProjectsDataGrid /> : <ProjectsTable />}
          </div>
          <p className="muted footnote">Sample data only. Selection resets when you leave the data grid.</p>
        </section>
      </main>
    </FluentProvider>
  )
}
