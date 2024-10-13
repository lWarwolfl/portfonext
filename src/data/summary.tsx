import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Summary.module.scss'
import photo from '@public/image/jpg/photo.jpg'
import type { StaticImageData } from 'next/image'

export interface SummaryInterface {
  image: StaticImageData
  content: React.ReactNode
  extra?: React.ReactNode
  links: SummaryLinkInterface[]
}

export interface SummaryLinkInterface {
  link: string
  color: ColorType
  text: string
  icon: string
}

export const summary: SummaryInterface = {
  image: photo,
  content: (
    <>
      I am <span className={styles.accent}>Sina Kheiri</span> and As a{' '}
      <span className={styles.bold}>Front-end developer </span> with{' '}
      <span className={styles.bold}>5 years of experience</span>, I possess a{' '}
      <span className={styles.bold}>diverse skill set</span> in my field of work.
      <div className={styles.break}></div> With a strong focus on delivering{' '}
      <span className={styles.bold}>
        clean code
        <span />, <span className={styles.bold}></span> high-quality projects{' '}
      </span>{' '}
      and <span className={styles.bold}>exceptional user interfaces</span>, I am committed to{' '}
      staying <span className={styles.bold}>up-to-date</span> with the latest industry trends and{' '}
      best practices and I am always trying to <span className={styles.bold}>learn</span> and{' '}
      <span className={styles.bold}>improve</span> my skills.
    </>
  ),
  extra: (
    <>
      <div className={styles.break}></div>I am a begginner but enthusiast in{' '}
      <span className={styles.bold}>Three.js</span> and I also have the knowledge and skills for UI
      Design and I have created{' '}
      <span className={styles.bold}>User personas, Wireframes, High fidelity projects</span> and{' '}
      <span className={styles.bold}>Prototypes</span> using{' '}
      <span className={styles.bold}>Figma and Adobe XD</span>.
    </>
  ),
  links: [
    {
      link: 'mailto:sinakheiri.dev@gmail.com',
      color: 'blue',
      text: 'sinakheiri.dev@gmail.com',
      icon: 'ci:mail',
    },
    {
      link: 'https://www.linkedin.com/in/sinakheiri-dev',
      color: 'blue',
      text: 'linkedin.com/in/sinakheiri-dev',
      icon: 'bxl:linkedin-square',
    },
    {
      link: 'https://github.com/lWarwolfl',
      color: 'blue',
      text: 'github.com/lWarwolfl',
      icon: 'bxl:github',
    },
    {
      link: 'https://gitlab.com/cnawam',
      color: 'blue',
      text: 'gitlab.com/cnawam',
      icon: 'bxl:gitlab',
    },
    {
      link: 'https://t.me/cnawam',
      text: 't.me/cnawam',
      color: 'blue',
      icon: 'bxl:telegram',
    },
  ],
}
