import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Experiences.module.scss'
import agahpadidar from '@public/image/jpg/company/agahpadidar.jpg'
import exmodules from '@public/image/png/company/exmodules.png'
import ponisha from '@public/image/png/company/ponisha.png'
import sparkbridge from '@public/image/png/company/sparkbridge.png'
import { type StaticImageData } from 'next/image'
import React from 'react'

export interface ExperienceInterface {
  alt: string
  name: string | React.ReactNode
  link: string
  logo: string | StaticImageData
  icon: string
  listicon: string
  experiences: string[] | React.ReactNode[]
  color: ColorType
  position: 'left' | 'right'
}

export const experiences: ExperienceInterface[] = [
  {
    alt: 'Sparkbridge',
    name: (
      <>
        <span className={styles.bold}>Sparkbridge Incubator Ltd.</span> (Remote)
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://www.sparkbridge.ca/about',
    logo: sparkbridge,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Provided <span className={styles.bold}>guidance</span> to less experienced teammates,
        performed <span className={styles.bold}>code reviews</span>, and{' '}
        <span className={styles.bold}>maintained</span> 2 products with{' '}
        <span className={styles.bold}>2000 users</span>.
      </>,
      <>
        <span className={styles.bold}>Reduced</span> developer onboarding and{' '}
        <span className={styles.bold}>project setup time</span> by{' '}
        <span className={styles.bold}>20%</span> and improved{' '}
        <span className={styles.bold}>code consistency</span> using boilerplate repos.
      </>,
      <>
        <span className={styles.bold}>Built</span> 10 MVPs in 12 months using{' '}
        <span className={styles.bold}>Supabase</span> serverless tools along with{' '}
        <span className={styles.bold}>Next.js</span> while handling tight deadlines.
      </>,
    ],
    color: 'blue',
    position: 'left',
  },
  {
    alt: 'Agahpadidar',
    name: (
      <>
        <span className={styles.bold}>AgahPadidar</span> (Hybrid)
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://www.linkedin.com/company/agahpadidar/',
    logo: agahpadidar,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Established connections to <span className={styles.bold}>RESTful APIs</span> using{' '}
        <span className={styles.bold}>Async Thunks</span> and{' '}
        <span className={styles.bold}>Redux toolkit</span> for state management.
      </>,
      <>
        Handled data for <span className={styles.bold}>complex features</span> and created a{' '}
        <span className={styles.bold}>role-based panel</span>.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
  {
    alt: 'Ponisha',
    name: (
      <>
        <span className={styles.bold}>Ponisha</span> (Freelancing)
        <br />
        Front-end Developer/UI Designer
      </>
    ),
    link: 'https://ponisha.ir/profile/warwolf',
    logo: ponisha,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Developed static web pages and <span className={styles.bold}>HTML templates</span> and{' '}
        Participated in projects involving <span className={styles.bold}>UI/UX design</span>.
      </>,
    ],
    color: 'blue',
    position: 'left',
  },
  {
    alt: 'Exmodules',
    name: (
      <>
        <span className={styles.bold}>Exmodules</span> (Remote)
        <br />
        Front-end Developer
      </>
    ),
    link: 'https://twitter.com/exmodules',
    logo: exmodules,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Applied <span className={styles.bold}>Next.js rendering strategies</span> (
        <span className={styles.bold}>SSR, SSG</span>) to create performant web apps.
      </>,
      <>
        Worked with <span className={styles.bold}>MetaMask provider</span>,{' '}
        <span className={styles.bold}>Web3</span>, and{' '}
        <span className={styles.bold}>Smart Contracts</span> to develop Dapps.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
]
