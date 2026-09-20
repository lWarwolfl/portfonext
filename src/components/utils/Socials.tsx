import { socials } from '@/data/socials'
import styles from '@/styles/utils/Socials.module.scss'
import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'

interface Props {
  className?: string
}

export default function Socials({ className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      {socials.map((item) => (
        <a
          key={item.link}
          className={styles.link}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          title={item.label}
        >
          <Icon icon={item.icon} className={styles.icon} />
        </a>
      ))}
    </div>
  )
}
