import { type ColorType, type SkillCategoryType } from '@/utils/types'

export interface SkillCategoryInterface {
  name: SkillCategoryType
  color: ColorType
  icon: string
}

export interface SkillInterface {
  name: string
  category: SkillCategoryType
  logo: string
  percent: string
}

export const skillCategories: SkillCategoryInterface[] = [
  {
    name: 'code',
    color: 'blue',
    icon: 'ci:code',
  },
  {
    name: 'design',
    color: 'purple',
    icon: 'ci:swatches-palette',
  },
  {
    name: 'uiframework',
    color: 'pink',
    icon: 'ic:outline-format-paint',
  },
  {
    name: 'other',
    color: 'green',
    icon: 'ic:baseline-bolt',
  },
]

export const skills: SkillInterface[] = [
  {
    name: 'Next.js Framework',
    category: 'code',
    logo: 'simple-icons:nextdotjs',
    percent: '100%',
  },
  {
    name: 'React.js Framework',
    category: 'code',
    logo: 'simple-icons:react',
    percent: '100%',
  },
  {
    name: 'Javascript',
    category: 'code',
    logo: '',
    percent: '75%',
  },
  {
    name: 'Interfacescript',
    category: 'code',
    logo: '',
    percent: '75%',
  },
  {
    name: 'Jest',
    category: 'code',
    logo: '',
    percent: '75%',
  },
  {
    name: 'Jquery',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Redux Toolkit(Redux.js)',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Formik',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Axios',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Clean code principles',
    category: 'other',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Github',
    category: 'other',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Agile Methodologies',
    category: 'other',
    logo: '',
    percent: '75%',
  },
  {
    name: 'Material UI',
    category: 'uiframework',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Tailwind CSS',
    category: 'uiframework',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Bootstrap',
    category: 'uiframework',
    logo: '',
    percent: '75%',
  },
  {
    name: 'CSS 3',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'SCSS',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Html 5',
    category: 'code',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Figma',
    category: 'design',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Adobe XD',
    category: 'design',
    logo: '',
    percent: '100%',
  },
  {
    name: 'Adobe Illustrator',
    category: 'design',
    logo: '',
    percent: '50%',
  },
  {
    name: 'Responsive Web Design',
    category: 'design',
    logo: '',
    percent: '100%',
  },
]
