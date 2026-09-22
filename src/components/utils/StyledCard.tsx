import { type ColorType } from '@/lib/types'
import styles from '@/styles/utils/StyledCard.module.scss'
import clsx from 'clsx'
import React from 'react'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
  glow?: ColorType
}

export default function StyledCard({ id, glow = 'blue', className, children }: Props) {
  return (
    <div id={id} className={clsx(className, styles.container)}>
      <div className={styles.glow} style={{ color: `var(--${glow}-color)` }} />
      {children}
    </div>
  )
}
