import styles from '@/styles/utils/Title.module.scss'
import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'

interface Props {
  icon?: string
  title: string
  description: string
  className?: string
}

export default function Title({ icon = 'line-md:compass-twotone-loop', title, description, className }: Props) {
  return (
    <div className={clsx(className, styles.container)}>
      <div className={styles.icon}>
        <Icon icon={icon} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
