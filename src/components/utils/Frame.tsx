import styles from '@/styles/utils/Frame.module.scss'
import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface Props {
  className?: string
  title: string
  link: string
  embeddable: boolean
}

const frameWidth = 1280

export default function Frame({ className, title, link, embeddable }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)
  const host = link.replace(/^https?:\/\//, '').replace(/\/$/, '')

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || !embeddable) return

    const fit = () => {
      viewport.style.setProperty('--frame-scale', String(viewport.clientWidth / frameWidth))
    }

    fit()

    const resize = new ResizeObserver(fit)
    resize.observe(viewport)

    const visible = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return

        setLoaded(true)
        visible.disconnect()
      },
      { rootMargin: '400px' }
    )

    visible.observe(viewport)

    return () => {
      resize.disconnect()
      visible.disconnect()
    }
  }, [embeddable])

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.url}>{host}</div>

        <a
          className={styles.open}
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title} in a new tab`}
        >
          <Icon icon="ci:external-link" />
        </a>
      </div>

      {embeddable ? (
        <div className={styles.viewport} ref={viewportRef}>
          {loaded && (
            <iframe
              className={styles.frame}
              src={link}
              title={`${title} preview`}
              loading="lazy"
              referrerPolicy="no-referrer"
              scrolling="no"
              tabIndex={-1}
              aria-hidden="true"
            />
          )}
        </div>
      ) : (
        <div className={styles.blocked}>
          <Icon icon="mdi:lock-outline" className={styles.icon} />
          <div className={styles.name}>{title}</div>
          <div className={styles.note}>{host} blocks embedding</div>
        </div>
      )}
    </div>
  )
}
