import styles from '@/styles/utils/Title.module.scss'
import clsx from 'clsx'

interface Props {
  index: string
  title: string
  description: string
  className?: string
}

export default function Title({ index, title, description, className }: Props) {
  return (
    <header className={clsx(className, styles.container)}>
      <div className={styles.meta}>
        <span className={styles.index}>{index}</span>
        <span>{description}</span>
        <span className={styles.rule} />
      </div>
      <h2 className={styles.title}>{title}</h2>
    </header>
  )
}
