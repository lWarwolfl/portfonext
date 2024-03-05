import StyledCard from '@/components/utils/StyledCard'
import { type EducationInterface } from '@/data/educations'
import styles from '@/styles/landing/Educations.module.scss'
import { Icon } from '@iconify-icon/react'

interface Props {
  item: EducationInterface
}

export default function Education({ item }: Props) {
  return (
    <StyledCard className={styles.education} variant="smallfull" glow={item.color}>
      <Icon
        icon="ci:book-open"
        style={{
          color: `var(--${item.color}-color)`,
        }}
        className={styles.icon}
      />
      <span className={styles.text}>{item.content}</span>
    </StyledCard>
  )
}
