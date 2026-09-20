import styles from '@/styles/landing/Experiences.module.scss'
import Link from 'next/link'
import React from 'react'

export interface ExperienceInterface {
  employer: string
  jobTitle: string
  location: string
  period: string
  about: string
  link?: string
  bullets: (string | React.ReactNode)[]
}

export const experiences: ExperienceInterface[] = [
  {
    employer: 'Sparkbridge Incubators Ltd.',
    jobTitle: 'Full-stack Developer',
    location: 'Tehran, Iran',
    period: '04/2024 - 03/2026',
    about:
      'A studio helping immigrant entrepreneurs launch and scale their businesses in various countries.',
    link: 'https://www.sparkbridge.ca/about',
    bullets: [
      <>
        Maintained{' '}
        <Link
          href="https://mocko.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externallink}
        >
          Mocko.ai
        </Link>{' '}
        app with more than <span className={styles.bold}>10k users</span>.
      </>,
      <>
        Provided <span className={styles.bold}>guidance</span> to less experienced teammates and
        participated in <span className={styles.bold}>code reviews</span>.
      </>,
      <>
        <span className={styles.bold}>Built</span> 10 AI-driven{' '}
        <span className={styles.bold}>MVPs</span> in 12 months while handling tight deadlines.
      </>,
      <>
        <span className={styles.bold}>Reduced</span> startup projects{' '}
        <span className={styles.bold}>setup time</span> by <span className={styles.bold}>20%</span>{' '}
        and improved <span className={styles.bold}>code consistency</span> by creating template
        repos.
      </>,
    ],
  },
  {
    employer: 'Exmodules',
    jobTitle: 'Freelancer',
    location: 'Remote',
    period: '04/2023 - 03/2024',
    about:
      'A Web3 company focused on building dApps, metaverse infrastructure, and digital asset solutions.',
    bullets: [
      <>
        Applied Next.js rendering strategies (<span className={styles.bold}>SSR, SSG</span>) to
        create performant web apps.
      </>,
      <>
        Worked with <span className={styles.bold}>Wallet APIs</span>,{' '}
        <span className={styles.bold}>Wagmi</span> and{' '}
        <span className={styles.bold}>Smart Contracts</span> to develop{' '}
        <span className={styles.bold}>dApps</span>.
      </>,
    ],
  },
  {
    employer: 'AgahPadidar',
    jobTitle: 'Front-end Developer',
    location: 'Tehran, Iran',
    period: '04/2022 - 01/2023',
    about:
      'A cognitive science-based startup building innovative tools for mental health and psychological assessment.',
    link: 'https://www.linkedin.com/company/agah-padidar',
    bullets: [
      <>
        Implemented <span className={styles.bold}>data-intensive</span> features in a{' '}
        <span className={styles.bold}>role-based</span> panel.
      </>,
      <>
        Established connections to <span className={styles.bold}>RESTful APIs</span> while
        collaborating closely with back-end engineers.
      </>,
    ],
  },
  {
    employer: 'Ponisha',
    jobTitle: 'Freelancer',
    location: 'Remote',
    period: '03/2021 - 03/2022',
    about: 'Freelance marketplace projects delivered end to end.',
    bullets: [
      <>
        Developed static web pages and <span className={styles.bold}>HTML templates</span> and
        participated in projects involving <span className={styles.bold}>UI/UX design</span>.
      </>,
    ],
  },
]
