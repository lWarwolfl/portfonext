import Skill from '@/components/landing/Skill'
import Title from '@/components/utils/Title'
import { skillGroups } from '@/data/skills'
import styles from '@/styles/landing/Skills.module.scss'
import { Icon } from '@iconify-icon/react'

const groupIcons: Record<string, string> = {
  frontend: 'ci:code',
  backend: 'mdi:server',
  workflow: 'iconoir:agile',
  tools: 'ci:settings',
}

export default function Skills() {
  return (
    <div id="skills" className={`section ${styles.container}`}>
      <Title index="02" className="animated-title" title="Skills" description="And Tools" />

      <div className={`animated-container ${styles.groups}`}>
        {skillGroups.map((group) => (
          <section className={styles.group} key={group.name}>
            <div className={styles.head}>
              <Icon icon={groupIcons[group.name] ?? 'ci:code'} className={styles.icon} />
              <span className={styles.label}>{group.label}</span>
              <span className={styles.count}>{group.items.length}</span>
            </div>

            <ul className={styles.items}>
              {group.items.map((item) => (
                <Skill key={item.name} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
