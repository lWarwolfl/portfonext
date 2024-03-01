import StyledCard from '@/components/utils/StyledCard'
import { type ExperienceInterface } from '@/data/experiences'
import styles from '@/styles/landing/Experiences.module.scss'
import Image from 'next/image'

interface Props {
  item: ExperienceInterface
}

export default function Experience({ item }: Props) {
  return (
    <>
      <a href={item.link} target="_blank" className={styles.link}>
        <div className={styles.imagecontainer}>
          <Image
            quality={85}
            placeholder="blur"
            src={item.logo}
            alt={item.alt}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>{item.name}</div>
        <item.icon
          style={{
            color: `var(--${item.color}-color)`,
          }}
          className={styles.icon}
        />
      </a>
      {item.experiences.map((experience, index) => {
        return (
          <StyledCard
            className={styles.experience}
            key={index}
            variant="smallfull"
            glow={item.color}
          >
            <item.listicon
              style={{
                color: `var(--${item.color}-color)`,
              }}
              className={styles.icon}
            />
            <span className={styles.text}>{experience}</span>
          </StyledCard>
        )
      })}
    </>
  )
}
