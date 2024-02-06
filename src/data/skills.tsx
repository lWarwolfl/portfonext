import { Skill, SkillCategory } from '@/components/landing/Skills'
import adobeillustrator from '@/public/image/svg/skills/adobeillustrator.svg'
import adobexd from '@/public/image/svg/skills/adobexd.svg'
import agile from '@/public/image/svg/skills/agile.svg'
import axios from '@/public/image/svg/skills/axios.svg'
import bootstrap from '@/public/image/svg/skills/bootstrap.svg'
import cleancode from '@/public/image/svg/skills/cleancode.svg'
import css from '@/public/image/svg/skills/css.svg'
import figma from '@/public/image/svg/skills/figma.svg'
import formik from '@/public/image/svg/skills/formik.svg'
import github from '@/public/image/svg/skills/github.svg'
import html from '@/public/image/svg/skills/html.svg'
import javascript from '@/public/image/svg/skills/javascript.svg'
import jest from '@/public/image/svg/skills/jest.svg'
import jquery from '@/public/image/svg/skills/jquery.svg'
import materialui from '@/public/image/svg/skills/materialui.svg'
import nextjs from '@/public/image/svg/skills/nextjs.svg'
import reactjs from '@/public/image/svg/skills/reactjs.svg'
import redux from '@/public/image/svg/skills/redux.svg'
import responsive from '@/public/image/svg/skills/responsive.svg'
import scss from '@/public/image/svg/skills/scss.svg'
import tailwind from '@/public/image/svg/skills/tailwind.svg'
import typescript from '@/public/image/svg/skills/typescript.svg'

export const skillcategories: SkillCategory[] = [
   {
      name: 'code',
      color: 'blue',
   },
   {
      name: 'design',
      color: 'purple',
   },
   {
      name: 'uiframework',
      color: 'pink',
   },
   {
      name: 'other',
      color: 'green',
   },
]

export const skills: Skill[] = [
   {
      name: 'Next.js Framework',
      category: 'code',
      image: nextjs,
      percent: '100%',
   },
   {
      name: 'React.js Framework',
      category: 'code',
      image: reactjs,
      percent: '100%',
   },
   {
      name: 'Javascript',
      category: 'code',
      image: javascript,
      percent: '75%',
   },
   {
      name: 'Typescript',
      category: 'code',
      image: typescript,
      percent: '75%',
   },
   {
      name: 'Jest',
      category: 'code',
      image: jest,
      percent: '75%',
   },
   {
      name: 'Jquery',
      category: 'code',
      image: jquery,
      percent: '100%',
   },
   {
      name: 'Redux Toolkit(Redux.js)',
      category: 'code',
      image: redux,
      percent: '100%',
   },
   {
      name: 'Formik',
      category: 'code',
      image: formik,
      percent: '100%',
   },
   {
      name: 'Axios',
      category: 'code',
      image: axios,
      percent: '100%',
   },
   {
      name: 'Clean code principles',
      category: 'other',
      image: cleancode,
      percent: '100%',
   },
   {
      name: 'Github',
      category: 'other',
      image: github,
      percent: '100%',
   },
   {
      name: 'Agile Methodologies',
      category: 'other',
      image: agile,
      percent: '75%',
   },
   {
      name: 'Material UI',
      category: 'uiframework',
      image: materialui,
      percent: '100%',
   },
   {
      name: 'Tailwind CSS',
      category: 'uiframework',
      image: tailwind,
      percent: '100%',
   },
   {
      name: 'Bootstrap',
      category: 'uiframework',
      image: bootstrap,
      percent: '75%',
   },
   {
      name: 'CSS 3',
      category: 'code',
      image: css,
      percent: '100%',
   },
   {
      name: 'SCSS',
      category: 'code',
      image: scss,
      percent: '100%',
   },
   {
      name: 'Html 5',
      category: 'code',
      image: html,
      percent: '100%',
   },
   {
      name: 'Figma',
      category: 'design',
      image: figma,
      percent: '100%',
   },
   {
      name: 'Adobe XD',
      category: 'design',
      image: adobexd,
      percent: '100%',
   },
   {
      name: 'Adobe Illustrator',
      category: 'design',
      image: adobeillustrator,
      percent: '50%',
   },
   {
      name: 'Responsive Web Design',
      category: 'design',
      image: responsive,
      percent: '100%',
   },
]
