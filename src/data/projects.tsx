import { pickSkills, type SkillInterface } from '@/data/skills'
import { type LinkInterface } from '@/lib/types'
import styles from '@/styles/landing/Projects.module.scss'
import Link from 'next/link'
import * as React from 'react'

export interface ProjectInterface {
  title: string
  accent: string
  description: string | React.ReactNode
  link: string
  embeddable: boolean
  skills: SkillInterface[]
  links: LinkInterface[]
}

export const projects: ProjectInterface[] = [
  {
    title: 'Mocko',
    accent: 'Next.js - Tailwind CSS - REST APIs',
    description: (
      <>
        An <span className={styles.bold}>AI-driven mock test</span> platform developed by me and my
        team at{' '}
        <Link href="https://www.sparkbridge.ca/about" className={styles.bold}>
          Sparkbridge
        </Link>
        .
      </>
    ),
    link: 'https://mocko.ai',
    embeddable: true,
    skills: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'Tailwind CSS (Shadcn UI)',
      'REST APIs (React Query)',
    ]),
    links: [
      {
        link: 'https://mocko.ai',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'Voicingmap',
    accent: 'Next.js - Tailwind CSS - Supabase - Mapbox - Stripe',
    description: (
      <>
        My personal <span className={styles.bold}>startup project</span> in development.{' '}
        <span className={styles.bold}>Connecting the World Through Voice</span>.
      </>
    ),
    link: 'https://voicingmap.com/',
    embeddable: true,
    skills: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'Tailwind CSS (Shadcn UI)',
      'Supabase',
      'Mapbox',
      'Stripe',
    ]),
    links: [
      {
        link: 'https://voicingmap.com/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'GamerHaven',
    accent: 'Next.js - TypeScript - Tailwind CSS - Shadcn - Drizzle - Postgres - Server Actions',
    description: (
      <>
        A platform for game mods consisting of an <span className={styles.bold}>SSR-rendered</span>{' '}
        landing and a <span className={styles.bold}>dynamic panel</span>.
      </>
    ),
    link: 'https://gamer-haven.sinakheiri.dev/',
    embeddable: true,
    skills: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'TypeScript (JavaScript)',
      'Tailwind CSS (Shadcn UI)',
      'ORM (Drizzle, Prisma)',
      'SQL (PostgreSQL)',
      'Server Actions',
    ]),
    links: [
      {
        link: 'https://github.com/lWarwolfl/gamer-haven',
        color: 'blue',
        text: 'GitHub',
        icon: 'bxl:github',
      },
      {
        link: 'https://gamer-haven.sinakheiri.dev/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'Greenward',
    accent: 'Shopify - GraphQL - Remix',
    description: (
      <>
        A <span className={styles.bold}>Shopify app</span> that tracks user behavior and enhances
        loyalty by generating <span className={styles.bold}>discount codes</span>.
      </>
    ),
    link: 'https://apps.shopify.com/greenward',
    embeddable: false,
    skills: pickSkills(['Shopify (GraphQL - Remix)', 'GraphQL', 'Remix']),
    links: [
      {
        link: 'https://apps.shopify.com/greenward',
        color: 'blue',
        text: 'Shopify App Store',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'My Three.js Journey',
    accent: 'Three.js - Vite - CSS',
    description: (
      <>
        Progress and finished result of each lesson in the{' '}
        <Link href="https://threejs-journey.com/lessons/introduction#" className={styles.bold}>
          Three.js Journey
        </Link>{' '}
        course.
      </>
    ),
    link: 'https://three-js.sinakheiri.dev/',
    embeddable: true,
    skills: pickSkills(['Three.js (WebGL - GSAP)', 'Vite', 'CSS 3']),
    links: [
      {
        link: 'https://github.com/lWarwolfl/three-js',
        color: 'blue',
        text: 'GitHub',
        icon: 'bxl:github',
      },
      {
        link: 'https://three-js.sinakheiri.dev/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },

  {
    title: 'Farzam.at',
    accent: 'Next.js - TypeScript - Modular SCSS',
    description: (
      <>
        A <span className={styles.bold}>startup</span> project for delivering IT services that I
        have <span className={styles.bold}>collaborated</span> on.
      </>
    ),
    link: 'https://farzam.sinakheiri.dev/',
    embeddable: true,
    skills: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'TypeScript (JavaScript)',
      'SASS (SCSS - Material UI)',
    ]),
    links: [
      {
        link: 'https://farzam.sinakheiri.dev/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'Portfonext',
    accent: 'Next.js - TypeScript - Modular SCSS',
    description: (
      <>
        My personal <span className={styles.bold}>portfolio website</span>, and the site you are
        looking at right now.
      </>
    ),
    link: 'https://sinakheiri.dev/',
    embeddable: true,
    skills: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'TypeScript (JavaScript)',
      'SASS (SCSS - Material UI)',
    ]),
    links: [
      {
        link: 'https://github.com/lWarwolfl/portfonext',
        color: 'blue',
        text: 'GitHub',
        icon: 'bxl:github',
      },
      {
        link: 'https://sinakheiri.dev/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'BlockT',
    accent: 'Next.js - Tailwind CSS - Web3 - MetaMask',
    description: (
      <>
        Utilizes a contract I deployed on <span className={styles.bold}>Polygon Amoy testnet</span>{' '}
        and calls it through a <span className={styles.bold}>MetaMask provider</span>.
      </>
    ),
    link: 'https://blockt.sinakheiri.dev/',
    embeddable: true,
    skills: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'Tailwind CSS (Shadcn UI)',
      'Web3 (Wagmi - Hardhat)',
      'MetaMask',
    ]),
    links: [
      {
        link: 'https://github.com/lWarwolfl/blockt',
        color: 'blue',
        text: 'GitHub',
        icon: 'bxl:github',
      },
      {
        link: 'https://blockt.sinakheiri.dev/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'Modernist',
    accent: 'HTML - CSS - JavaScript',
    description: (
      <>
        A personal project that showcases my expertise in designing a{' '}
        <span className={styles.bold}>customizable HTML template</span> for a blog.
      </>
    ),
    link: 'https://modernist.sinakheiri.dev/',
    embeddable: true,
    skills: pickSkills(['HTML 5', 'CSS 3', 'JavaScript']),
    links: [
      {
        link: 'https://github.com/lWarwolfl/modernist',
        color: 'blue',
        text: 'GitHub',
        icon: 'bxl:github',
      },
      {
        link: 'https://modernist.sinakheiri.dev/',
        color: 'blue',
        text: 'Live site',
        icon: 'ci:external-link',
      },
    ],
  },
  {
    title: 'Park Speedy',
    accent: 'UI Design - Figma',
    description: (
      <>
        A <span className={styles.bold}>UI design</span> for a startup app aimed at solving parking
        space issues.
      </>
    ),
    link: 'https://www.figma.com/file/bKZwjhaF1BdM1Gf0hJfjWN/Park-Speedy---High-Fidelity',
    embeddable: false,
    skills: pickSkills(['UI Design (Figma)']),
    links: [
      {
        link: 'https://www.figma.com/file/bKZwjhaF1BdM1Gf0hJfjWN/Park-Speedy---High-Fidelity',
        color: 'blue',
        text: 'Figma file',
        icon: 'simple-icons:figma',
      },
    ],
  },
]
