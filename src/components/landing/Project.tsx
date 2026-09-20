import Frame from '@/components/utils/Frame'
import StyledButton from '@/components/utils/StyledButton'
import StyledCard from '@/components/utils/StyledCard'
import { type ProjectInterface } from '@/data/projects'
import styles from '@/styles/landing/Projects.module.scss'
import { Icon } from '@iconify-icon/react'

interface Props {
  index: number
  item: ProjectInterface
}

export default function Project({ index, item }: Props) {
  return (
    <StyledCard className={styles.project} move={false}>
      <Frame title={item.title} link={item.link} embeddable={item.embeddable} />

      <div className={styles.head}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.accent}>{item.accent}</span>
      </div>

      <p className={styles.description}>{item.description}</p>

      <div className={styles.skills}>
        {item.skills.map((skill) => (
          <span className={styles.skill} key={skill.name}>
            <Icon icon={skill.logo} className={styles.logo} />
            {skill.name}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {item.links.map((link) => (
          <StyledButton
            key={link.link}
            externalLink={link.link}
            staticIcon={link.icon}
            background="glass"
          >
            {link.text}
          </StyledButton>
        ))}
      </div>
    </StyledCard>
  )
}
