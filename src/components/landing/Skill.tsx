import { type SkillInterface } from '@/data/skills'
import styles from '@/styles/landing/Skills.module.scss'
import { Icon } from '@iconify-icon/react'

interface Props {
  item: SkillInterface
}

export default function Skill({ item }: Props) {
  return (
    <li className={styles.item}>
      <Icon icon={item.logo} className={styles.logo} />
      <span className={styles.name}>{item.name}</span>
    </li>
  )
}
