import { skills, type SkillInterface } from '@/data/skills'
import type { SummaryLinkInterface } from '@/data/summary'
import styles from '@/styles/landing/Projects.module.scss'
import blockt1 from '@public/image/jpg/projects/blockt/1.jpg'
import blockt2 from '@public/image/jpg/projects/blockt/2.jpg'
import blockt3 from '@public/image/jpg/projects/blockt/3.jpg'
import blockt4 from '@public/image/jpg/projects/blockt/4.jpg'
import farzam1 from '@public/image/jpg/projects/farzam/1.jpg'
import farzam1_thumb from '@public/image/jpg/projects/farzam/1_thumb.jpg'
import farzam2 from '@public/image/jpg/projects/farzam/2.jpg'
import farzam2_thumb from '@public/image/jpg/projects/farzam/2_thumb.jpg'
import farzam3 from '@public/image/jpg/projects/farzam/3.jpg'
import farzam3_thumb from '@public/image/jpg/projects/farzam/3_thumb.jpg'
import farzam4 from '@public/image/jpg/projects/farzam/4.jpg'
import farzam4_thumb from '@public/image/jpg/projects/farzam/4_thumb.jpg'
import gamerhaven1 from '@public/image/jpg/projects/gamerhaven/1.png'
import gamerhaven1_thumb from '@public/image/jpg/projects/gamerhaven/1_thumb.png'
import gamerhaven2 from '@public/image/jpg/projects/gamerhaven/2.png'
import gamerhaven3 from '@public/image/jpg/projects/gamerhaven/3.png'
import gamerhaven3_thumb from '@public/image/jpg/projects/gamerhaven/3_thumb.png'
import modernist1 from '@public/image/jpg/projects/modernist/1.jpg'
import modernist1_thumb from '@public/image/jpg/projects/modernist/1_thumb.jpg'
import modernist2 from '@public/image/jpg/projects/modernist/2.jpg'
import modernist2_thumb from '@public/image/jpg/projects/modernist/2_thumb.jpg'
import modernist3 from '@public/image/jpg/projects/modernist/3.jpg'
import modernist3_thumb from '@public/image/jpg/projects/modernist/3_thumb.jpg'
import modernist4 from '@public/image/jpg/projects/modernist/4.jpg'
import modernist4_thumb from '@public/image/jpg/projects/modernist/4_thumb.jpg'
import modernist5 from '@public/image/jpg/projects/modernist/5.jpg'
import modernist5_thumb from '@public/image/jpg/projects/modernist/5_thumb.jpg'
import modernist6 from '@public/image/jpg/projects/modernist/6.jpg'
import modernist6_thumb from '@public/image/jpg/projects/modernist/6_thumb.jpg'
import modernist7 from '@public/image/jpg/projects/modernist/7.jpg'
import mythreejsjourney1 from '@public/image/jpg/projects/mythreejsjourney/1.png'
import mythreejsjourney2 from '@public/image/jpg/projects/mythreejsjourney/2.png'
import mythreejsjourney3 from '@public/image/jpg/projects/mythreejsjourney/3.png'
import mythreejsjourney4 from '@public/image/jpg/projects/mythreejsjourney/4.png'
import parkspeedy1 from '@public/image/jpg/projects/parkspeedy/1.jpg'
import parkspeedy2 from '@public/image/jpg/projects/parkspeedy/2.jpg'
import parkspeedy3 from '@public/image/jpg/projects/parkspeedy/3.jpg'
import parkspeedy4 from '@public/image/jpg/projects/parkspeedy/4.jpg'
import tmarket1 from '@public/image/jpg/projects/tmarket/1.jpg'
import tmarket2 from '@public/image/jpg/projects/tmarket/2.jpg'
import tmarket3 from '@public/image/jpg/projects/tmarket/3.jpg'
import tmarket4 from '@public/image/jpg/projects/tmarket/4.jpg'
import voicingmap1 from '@public/image/jpg/projects/voicingmap/1.png'
import voicingmap2 from '@public/image/jpg/projects/voicingmap/2.png'
import voicingmap3 from '@public/image/jpg/projects/voicingmap/3.png'
import { type StaticImageData } from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export interface ProjectInterface {
  title: string
  accent: string
  description: string | React.ReactNode
  images: StaticImageData[]
  thumbnails?: StaticImageData[]
  fullSlide?: boolean
  skills: (SkillInterface | undefined)[]
  links: SummaryLinkInterface[]
}

export const projects: ProjectInterface[] = [
  {
    title: 'Gamer Haven',
    accent: '(Full-stack Development - Next.js - Drizzle ORM)',
    description: (
      <>
        A platform for game mods consisting of a <span className={styles.bold}>ssr rendered</span>{' '}
        landing and a <span className={styles.bold}>dynamic panel</span>.
      </>
    ),
    images: [gamerhaven1, gamerhaven2, gamerhaven3],
    thumbnails: [gamerhaven1_thumb, gamerhaven2, gamerhaven3_thumb],
    skills: [
      skills.find((skill) => skill.name === 'Next.js'),
      skills.find((skill) => skill.name === 'Typescript'),
      skills.find((skill) => skill.name === 'Postgres'),
      skills.find((skill) => skill.name === 'Drizzle ORM'),
      skills.find((skill) => skill.name === 'Tailwind CSS'),
      skills.find((skill) => skill.name === 'Shadcn UI'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/gamer-haven',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://gamer-haven.sinakheiri.dev/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
    fullSlide: true,
  },
  {
    title: 'Voicingmap',
    accent: '(Full-stack Development - Next.js - Supabase)',
    description: (
      <>
        My personal statup project in development.{' '}
        <span className={styles.bold}>Connecting the World Through Voice</span>.
      </>
    ),
    images: [voicingmap1, voicingmap2, voicingmap3],
    skills: [
      skills.find((skill) => skill.name === 'Next.js'),
      skills.find((skill) => skill.name === 'Typescript'),
      skills.find((skill) => skill.name === 'Supabase'),
      skills.find((skill) => skill.name === 'Tailwind CSS'),
      skills.find((skill) => skill.name === 'Shadcn UI'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://voicingmap.com/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
    fullSlide: true,
  },
  {
    title: 'My Three.js Journey',
    accent: '(Three.js - Vite)',
    description: (
      <>
        Shows my progress and finished result of each lesson in the{' '}
        <Link href="https://threejs-journey.com/lessons/introduction#" className={styles.bold}>
          Three.js Journey
        </Link>{' '}
        course.
      </>
    ),
    images: [mythreejsjourney1, mythreejsjourney2, mythreejsjourney3, mythreejsjourney4],
    skills: [
      skills.find((skill) => skill.name === 'Three.js'),
      skills.find((skill) => skill.name === 'WebGL'),
      skills.find((skill) => skill.name === 'Vite'),
      skills.find((skill) => skill.name === 'Html 5'),
      skills.find((skill) => skill.name === 'CSS 3'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/three-js',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://three-js.sinakheiri.dev/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
    fullSlide: true,
  },
  {
    title: 'BlockT',
    accent: '(Front-end Development - Next.js - Web3)',
    description: (
      <>
        BlockT is a personal seamless <span className={styles.bold}>Dapp</span> that utilizes{' '}
        <span className={styles.bold}>Web3</span>, connects to{' '}
        <span className={styles.bold}>Smart contracts</span> and sends transactions on a Polygon{' '}
        testnet.
      </>
    ),
    images: [blockt1, blockt2, blockt3, blockt4],
    skills: [
      skills.find((skill) => skill.name === 'Next.js'),
      skills.find((skill) => skill.name === 'Typescript'),
      skills.find((skill) => skill.name === 'Web3'),
      skills.find((skill) => skill.name === 'Tailwind CSS'),
      skills.find((skill) => skill.name === 'Shadcn UI'),
      skills.find((skill) => skill.name === 'Zustand'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/blockt',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://blockt.sinakheiri.dev/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'TMarket',
    accent: '(Front-end Development - Next.js)',
    description: (
      <>
        TMarket is a sample project to utilize <span className={styles.bold}>SSR</span>,{' '}
        <span className={styles.bold}>React query</span> and{' '}
        <span className={styles.bold}>Zustand</span> to handle{' '}
        <span className={styles.bold}>Rest APIs</span>.
      </>
    ),
    images: [tmarket1, tmarket2, tmarket3, tmarket4],
    skills: [
      skills.find((skill) => skill.name === 'Next.js'),
      skills.find((skill) => skill.name === 'Typescript'),
      skills.find((skill) => skill.name === 'Tailwind CSS'),
      skills.find((skill) => skill.name === 'Shadcn UI'),
      skills.find((skill) => skill.name === 'Zustand'),
      skills.find((skill) => skill.name === 'React Query'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/tmarket',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://tmarket.sinakheiri.dev/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Farzam.at',
    accent: '(Front-end Development - Next.js)',
    description: (
      <>
        Farzam.at is a <span className={styles.bold}>startup</span> project for delivering IT
        services that I have <span className={styles.bold}>collaborated</span> on.
      </>
    ),
    images: [farzam1, farzam2, farzam3, farzam4],
    thumbnails: [farzam1_thumb, farzam2_thumb, farzam3_thumb, farzam4_thumb],
    skills: [
      skills.find((skill) => skill.name === 'Next.js'),
      skills.find((skill) => skill.name === 'Typescript'),
      skills.find((skill) => skill.name === 'SCSS'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://farzam.at//',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Modernist',
    accent: '(Front-end Development - Vanilla)',
    description: (
      <>
        Modernist is a personal project that showcases my expertise in designing a{' '}
        <span className={styles.bold}>Customizable HTML Template</span>.
      </>
    ),
    images: [modernist1, modernist2, modernist3, modernist4, modernist5, modernist6, modernist7],
    thumbnails: [
      modernist1_thumb,
      modernist2_thumb,
      modernist3_thumb,
      modernist4_thumb,
      modernist5_thumb,
      modernist6_thumb,
    ],
    skills: [
      skills.find((skill) => skill.name === 'HTML 5'),
      skills.find((skill) => skill.name === 'CSS 3'),
      skills.find((skill) => skill.name === 'Javascript'),
      skills.find((skill) => skill.name === 'UI Design'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://github.com/lWarwolfl/Modernist',
        color: 'blue',
        text: 'Github',
        icon: 'bxl:github',
      },
      {
        link: 'https://modernist.lazygamer.ir/',
        color: 'blue',
        text: 'View',
        icon: 'ci:show',
      },
    ],
  },
  {
    title: 'Park Speedy',
    accent: '(UI/UX Design)',
    description: (
      <>
        Park Speedy is a Figma project that showcases my{' '}
        <span className={styles.bold}>UI/UX design</span> skills for a startup app aimed at solving
        parking space issues.
      </>
    ),
    images: [parkspeedy1, parkspeedy2, parkspeedy3, parkspeedy4],
    skills: [
      skills.find((skill) => skill.name === 'UI Design'),
      skills.find((skill) => skill.name === 'Figma'),
    ].filter((skill) => skill !== undefined),
    links: [
      {
        link: 'https://www.figma.com/file/bKZwjhaF1BdM1Gf0hJfjWN/Park-Speedy---High-Fidelity?node-id=0%3A1&t=1CZn3zTE5UlIsY6A-1',
        color: 'blue',
        text: 'Figma',
        icon: 'simple-icons:figma',
      },
    ],
  },
]
