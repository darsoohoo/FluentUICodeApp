import { Button } from '@fluentui/react-components'

type Props = {
  page: string
  onPageChange: (page: string) => void
}

export function LeftNavigation({ page, onPageChange }: Props) {
  return (
    <nav aria-label="Examples" className="navigation">
      <Button appearance={page === 'data-grid' ? 'primary' : 'subtle'}
        aria-current={page === 'data-grid' ? 'page' : undefined}
        onClick={() => onPageChange('data-grid')}>Data grid</Button>
      <Button appearance={page === 'table' ? 'primary' : 'subtle'}
        aria-current={page === 'table' ? 'page' : undefined}
        onClick={() => onPageChange('table')}>Table</Button>
    </nav>
  )
}

