import StyledCard from '@/components/utils/StyledCard'
import { type SkillCategoryInterface, type SkillInterface } from '@/data/skills'
import styles from '@/styles/landing/Skills.module.scss'
import { Icon } from '@iconify-icon/react'

interface Props {
  item: SkillInterface
  category: SkillCategoryInterface
}

export default function Skill({ item, category }: Props) {
  return (
    <StyledCard glow={category.color} className={styles.skill} variant="small">
      <div className={styles.data}>
        <Icon
          icon={item.logo}
          style={{
            color: `var(--${category.color}-color)`,
          }}
          className={styles.logo}
        />
        <div className={styles.name}>{item.name}</div>
        <Icon
          icon={category.icon}
          style={{
            color: `var(--${category.color}-color)`,
          }}
          className={styles.icon}
        />
      </div>
      <div className={styles.barcontainer}>
        <div className={styles.percent}>{item.percent}</div>
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{
              width: `${item.percent}`,
            }}
          ></div>
        </div>
      </div>
    </StyledCard>
  )
}
