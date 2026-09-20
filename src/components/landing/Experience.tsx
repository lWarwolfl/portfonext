import { type ExperienceInterface } from '@/data/experiences'
import styles from '@/styles/landing/Experiences.module.scss'
import { Icon } from '@iconify-icon/react'

interface Props {
  item: ExperienceInterface
}

export default function Experience({ item }: Props) {
  return (
    <article className={styles.experience}>
      <div className={styles.period}>{item.period}</div>

      <div className={styles.details}>
        <div className={styles.identity}>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer" className={styles.externallink}>
              <span className={styles.employer}>{item.employer}</span>
            </a>
          ) : (
            <span className={styles.employer}>{item.employer}</span>
          )}

          {item.link ? <Icon icon="ci:external-link" className={styles.icon} /> : null}

          <span className={styles.role}>
            {item.jobTitle} / {item.location}
          </span>
        </div>

        <p className={styles.about}>{item.about}</p>

        <ul className={styles.bullets}>
          {item.bullets.map((bullet, index) => (
            <li className={styles.bullet} key={index}>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
