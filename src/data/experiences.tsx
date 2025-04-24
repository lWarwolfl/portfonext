import { type ColorType } from '@/lib/types'
import styles from '@/styles/landing/Experiences.module.scss'
import agahpadidar from '@public/image/jpg/company/agahpadidar.jpg'
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
        <span className={styles.bold}>Sparkbridge Incubator Ltd.</span>, Front-end Developer
      </>
    ),
    link: 'https://www.sparkbridge.ca/about',
    logo: sparkbridge,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Provided <span className={styles.bold}>guidance</span> to less experienced teammates,
        performed <span className={styles.bold}>code reviews</span> and{' '}
        <span className={styles.bold}>maintained</span> 2 products with more than{' '}
        <span className={styles.bold}>2000 users</span>.
      </>,
      <>
        <span className={styles.bold}>Reduced</span> developer{' '}
        <span className={styles.bold}>onboarding</span> and{' '}
        <span className={styles.bold}>project setup time</span> by{' '}
        <span className={styles.bold}>20%</span> and improved{' '}
        <span className={styles.bold}>code consistency</span> through developing boilerplate
        repositories.
      </>,
      <>
        <span className={styles.bold}>Built</span> 10 <span className={styles.bold}>MVPs</span> in
        12 months using <span className={styles.bold}>Supabase</span> serverless tools along with{' '}
        <span className={styles.bold}>Next.js</span> while handling a tight deadline.
      </>,
    ],
    color: 'blue',
    position: 'left',
  },
  {
    alt: 'Ponisha',
    name: (
      <>
        <span className={styles.bold}>Ponisha</span>, Freelancer
      </>
    ),
    link: 'https://ponisha.ir/profile/warwolf',
    logo: ponisha,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Applied <span className={styles.bold}>Next.js rendering strategies(SSR, SSG)</span> to
        create performant web apps.
      </>,
      <>
        Worked with <span className={styles.bold}>MetaMask provider</span>,{' '}
        <span className={styles.bold}>Web3</span> and{' '}
        <span className={styles.bold}>Smart Contracts</span> to develop{' '}
        <span className={styles.bold}>Dapps</span>.
      </>,
      <>
        Developed static web pages and <span className={styles.bold}>HTML templates</span> and
        participated in projects involving <span className={styles.bold}>UI/UX design</span>.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
  {
    alt: 'Agahpadidar',
    name: (
      <>
        <span className={styles.bold}>AgahPadidar</span>, Front-end Developer
      </>
    ),
    link: 'https://www.linkedin.com/company/agahpadidar/',
    logo: agahpadidar,
    icon: 'ci:external-link',
    listicon: 'ci:checkbox-check',
    experiences: [
      <>
        Established connections to <span className={styles.bold}>Restful APIs</span> using{' '}
        <span className={styles.bold}>Async Thunks</span> and Utilized{' '}
        <span className={styles.bold}>Redux toolkit</span> for state management.
      </>,
      <>
        Implemented <span className={styles.bold}>complex features</span> and created a{' '}
        <span className={styles.bold}>role based</span> panel.
      </>,
    ],
    color: 'blue',
    position: 'right',
  },
]
