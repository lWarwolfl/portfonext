import Skill from '@/components/landing/Skill'
import StyledCard from '@/components/utils/StyledCard'
import Title from '@/components/utils/Title'
import { skillCategories, skills } from '@/data/skills'
import styles from '@/styles/landing/Skills.module.scss'
import { Icon } from '@iconify-icon/react'

export default function Skills() {
  return (
    <div id="skills" className={`section ${styles.container}`}>
      <Title index="02" className="animated-title" title="Skills" description="And Tools" />

      <div className={`animated-container ${styles.groups}`}>
        {skillCategories.map((category) => {
          const items = skills.filter((item) => item.category === category.name)

          return (
            <StyledCard key={category.name} className={styles.group} glow={category.color}>
              <div className={styles.head}>
                <Icon icon={category.icon} className={styles.icon} />
                <span className={styles.label}>{category.label}</span>
                <span className={styles.count}>{items.length}</span>
              </div>

              <ul className={styles.items}>
                {items.map((item) => (
                  <Skill key={item.name} item={item} />
                ))}
              </ul>
            </StyledCard>
          )
        })}
      </div>
    </div>
  )
}
