import StyledButton from '@/components/utils/StyledButton'
import styles from '@/styles/utils/Frame.module.scss'
import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'

interface Props {
  className?: string
  title: string
  link: string
  embeddable: boolean
}

export default function Frame({ className, title, link, embeddable }: Props) {
  const host = link.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.url}>{host}</div>

        <StyledButton
          className={styles.open}
          externalLink={link}
          staticIcon="ci:external-link"
          background="glass"
          iconButton
        />
      </div>

      {embeddable ? (
        <iframe
          className={styles.frame}
          src={link}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          tabIndex={-1}
        />
      ) : (
        <div className={styles.blocked}>
          <Icon icon="ci:ban" className={styles.icon} />
          <div className={styles.name}>{title}</div>
          <div className={styles.note}>This host refuses to be embedded.</div>
        </div>
      )}
    </div>
  )
}
