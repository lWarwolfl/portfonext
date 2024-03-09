import styles from '@/styles/utils/Title.module.scss'
import clsx from 'clsx'

interface Props {
  title: string
  description: string
  className?: string
}

export default function Title({ title, description, className }: Props) {
  return (
    <h1 className={clsx(className, styles.title)}>
      <span className={styles.accent}>{title}</span> {description}
    </h1>
  )
}
