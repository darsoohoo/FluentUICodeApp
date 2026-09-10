import type { CSSProperties, ReactNode } from 'react'
import { tokens } from '@fluentui/react-components'

type StackProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  gap?: CSSProperties['gap']
  align?: CSSProperties['alignItems']
}

export function Stack({
  children,
  direction = 'column',
  gap = tokens.spacingVerticalM,
  align = 'stretch',
}: StackProps) {
  return (
    <div style={{ display: 'flex', flexDirection: direction, gap, alignItems: align }}>
      {children}
    </div>
  )
}
