import { type ColorType, type SkillCategoryType } from '@/utils/types'
import adobeillustrator from '@public/image/png/skills/adobeillustrator.png'
import adobexd from '@public/image/png/skills/adobexd.png'
import agile from '@public/image/png/skills/agile.png'
import axios from '@public/image/png/skills/axios.png'
import bootstrap from '@public/image/png/skills/bootstrap.png'
import cleancode from '@public/image/png/skills/cleancode.png'
import css from '@public/image/png/skills/css.png'
import figma from '@public/image/png/skills/figma.png'
import formik from '@public/image/png/skills/formik.png'
import github from '@public/image/png/skills/github.png'
import html from '@public/image/png/skills/html.png'
import javascript from '@public/image/png/skills/javascript.png'
import jest from '@public/image/png/skills/jest.png'
import jquery from '@public/image/png/skills/jquery.png'
import materialui from '@public/image/png/skills/materialui.png'
import nextjs from '@public/image/png/skills/nextjs.png'
import reactjs from '@public/image/png/skills/reactjs.png'
import redux from '@public/image/png/skills/redux.png'
import responsive from '@public/image/png/skills/responsive.png'
import scss from '@public/image/png/skills/scss.png'
import tailwind from '@public/image/png/skills/tailwind.png'
import typescript from '@public/image/png/skills/typescript.png'
import { type StaticImageData } from 'next/image'

export interface SkillCategoryInterface {
  name: SkillCategoryType
  color: ColorType
}

export interface SkillInterface {
  name: string
  category: SkillCategoryType
  image: string | StaticImageData
  percent: string
}

export const skillCategories: SkillCategoryInterface[] = [
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

export const skills: SkillInterface[] = [
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
    name: 'Interfacescript',
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
