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
      I am <span className={styles.accent}>Sina Kheiri</span>, a front-end developer with 5 years of
      experience. I possess a diverse skill set in my field of work. I am proficient in{' '}
      <span className={styles.bold}>Next.js</span>, <span className={styles.bold}>React</span>, and{' '}
      <span className={styles.bold}>TypeScript</span>, with experience in{' '}
      <span className={styles.bold}>Supabase</span> and <span className={styles.bold}>Web3</span>.{' '}
      <div className={styles.break} />A beginner but an enthusiast in{' '}
      <span className={styles.bold}>3D web apps</span> using{' '}
      <span className={styles.bold}>Three.js</span> and also familiar with{' '}
      <span className={styles.bold}>UI design</span>, including the creation of user personas,
      wireframes, prototypes, and high-fidelity designs using{' '}
      <span className={styles.bold}>Figma</span> and <span className={styles.bold}>Adobe XD</span>.
    </>
  ),
  extra: (
    <>
      <div className={styles.break}></div>Committed to delivering{' '}
      <span className={styles.bold}>clean code</span>,{' '}
      <span className={styles.bold}>high-quality projects</span>, and{' '}
      <span className={styles.bold}>exceptional user interfaces</span>, all while maintaining{' '}
      <span className={styles.bold}>performance</span> and always staying up-to-date to align with{' '}
      <span className={styles.bold}>best practices</span>.
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
      link: 'https://gitlab.com/lWarwolfl',
      color: 'blue',
      text: 'gitlab.com/lWarwolfl',
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
