import styles from '@/styles/landing//NewsTicker.module.scss'
import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Props {
  text: string
  speed?: number
  className?: string
}

export default function NewsTicker({ text, speed = 50, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const textWidth = textRef.current.offsetWidth
        const newIsOverflowing = textWidth + 16 > containerWidth
        setIsOverflowing(newIsOverflowing)

        if (newIsOverflowing) {
          startAnimation(textWidth, containerWidth)
        } else {
          controls.stop()
          controls.set({ x: 0 })
        }
      }
    }

    const startAnimation = (textWidth: number, containerWidth: number) => {
      const duration = (textWidth + 16 + containerWidth) / speed

      controls.start({
        x: [-(textWidth + 16), 0],
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      })
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
      controls.stop()
    }
  }, [text, speed, controls])

  return (
    <div
      ref={containerRef}
      className={clsx(
        styles.tickerContainer,
        { [styles.isOverflowing as string]: isOverflowing },
        className
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <motion.div ref={textRef} animate={controls} className={styles.tickerTrack}>
        {isOverflowing ? (
          <>
            <span>{text}</span>
            <span className={styles.spacer} aria-hidden="true" />
            <span>{text}</span>
          </>
        ) : (
          text
        )}
      </motion.div>

      {isOverflowing && (
        <>
          <div className={clsx(styles.overlay, styles.start)} />
          <div className={clsx(styles.overlay, styles.end)} />
        </>
      )}
    </div>
  )
}
