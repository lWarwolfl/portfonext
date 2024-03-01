import styles from '@/styles/utils/Title.module.scss'

interface Props {
  title: string
  description: string
}

export default function Title({ title, description }: Props) {
  return (
    <h1 className={styles.title}>
      <span className={styles.accent}>{title}</span> {description}
    </h1>
  )
}
