import { type ColorType } from '@/lib/types'
import styles from '@/styles/utils/StyledCard.module.scss'
import clsx from 'clsx'
import React, { useRef } from 'react'

interface Props {
  id?: string
  className?: string
  children: React.ReactNode
  glow?: ColorType
}

export default function StyledCard({ id, glow = 'blue', className, children }: Props) {
  const card = useRef<HTMLDivElement>(null)

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType === 'touch' ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    const element = card.current
    if (!element) return
    const bounds = element.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    element.style.setProperty('--glow-x', `${x * 100}%`)
    element.style.setProperty('--glow-y', `${y * 100}%`)
    element.style.setProperty('--tilt-x', `${(0.5 - y) * 1.5}deg`)
    element.style.setProperty('--tilt-y', `${(x - 0.5) * 1.5}deg`)
  }

  const resetTilt = () => {
    card.current?.style.setProperty('--tilt-x', '0deg')
    card.current?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div
      ref={card}
      id={id}
      className={clsx(className, styles.container)}
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <div className={styles.glow} style={{ color: `var(--${glow}-color)` }} />
      {children}
    </div>
  )
}
