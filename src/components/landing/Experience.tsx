import { type ExperienceInterface } from '@/data/experiences'
import styles from '@/styles/landing/Experiences.module.scss'
import { Icon } from '@iconify-icon/react'
import Image from 'next/image'

interface Props {
  item: ExperienceInterface
}

export default function Experience({ item }: Props) {
  const identity = (
    <>
      <div className={styles.imagecontainer}>
        <Image
          quality={80}
          placeholder="blur"
          src={item.logo}
          alt={item.alt}
          className={styles.image}
        />
      </div>

      <div className={styles.employer}>{item.name}</div>

      {item.link ? <Icon icon={item.icon} className={styles.icon} /> : null}
    </>
  )

  return (
    <div className={styles.experience}>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noreferrer" className={styles.identity}>
          {identity}
        </a>
      ) : (
        <div className={styles.identity}>{identity}</div>
      )}

      <ul className={styles.bullets}>
        {item.experiences.map((experience, index) => (
          <li className={styles.bullet} key={index}>
            <span>{experience}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
