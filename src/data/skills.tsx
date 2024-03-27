import { type ColorType, type SkillCategoryType } from '@/lib/types'

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
    name: 'Next.js',
    category: 'code',
    logo: 'simple-icons:nextdotjs',
    percent: '100%',
  },
  {
    name: 'React.js',
    category: 'code',
    logo: 'simple-icons:react',
    percent: '100%',
  },
  {
    name: 'Javascript',
    category: 'code',
    logo: 'simple-icons:javascript',
    percent: '75%',
  },
  {
    name: 'Typescript',
    category: 'code',
    logo: 'simple-icons:typescript',
    percent: '75%',
  },
  {
    name: 'Jest',
    category: 'code',
    logo: 'simple-icons:jest',
    percent: '75%',
  },
  {
    name: 'Jquery',
    category: 'code',
    logo: 'simple-icons:jquery',
    percent: '100%',
  },
  {
    name: 'Redux Toolkit(Redux.js)',
    category: 'code',
    logo: 'simple-icons:redux',
    percent: '100%',
  },
  {
    name: 'Zustand',
    category: 'code',
    logo: 'mingcute:bear-fill',
    percent: '75%',
  },
  {
    name: 'React query',
    category: 'code',
    logo: 'simple-icons:reactquery',
    percent: '75%',
  },
  {
    name: 'Clean code principles',
    category: 'other',
    logo: 'mdi:monitor-clean',
    percent: '100%',
  },
  {
    name: 'Github',
    category: 'other',
    logo: 'simple-icons:github',
    percent: '100%',
  },
  {
    name: 'Agile Methodologies',
    category: 'other',
    logo: 'iconoir:agile',
    percent: '75%',
  },
  {
    name: 'Tailwind CSS',
    category: 'uiframework',
    logo: 'simple-icons:tailwindcss',
    percent: '100%',
  },
  {
    name: 'Shadcn UI',
    category: 'uiframework',
    logo: 'simple-icons:shadcnui',
    percent: '100%',
  },
  {
    name: 'Material UI',
    category: 'uiframework',
    logo: 'simple-icons:mui',
    percent: '100%',
  },
  {
    name: 'CSS 3',
    category: 'code',
    logo: 'simple-icons:css3',
    percent: '100%',
  },
  {
    name: 'SCSS',
    category: 'code',
    logo: 'simple-icons:sass',
    percent: '100%',
  },
  {
    name: 'Html 5',
    category: 'code',
    logo: 'simple-icons:html5',
    percent: '100%',
  },
  {
    name: 'UI Design',
    category: 'design',
    logo: 'mdi:design',
    percent: '75%',
  },
  {
    name: 'Figma',
    category: 'design',
    logo: 'simple-icons:figma',
    percent: '100%',
  },
  {
    name: 'Adobe XD',
    category: 'design',
    logo: 'simple-icons:adobexd',
    percent: '100%',
  },
  {
    name: 'Adobe Illustrator',
    category: 'design',
    logo: 'simple-icons:adobeillustrator',
    percent: '50%',
  },
  {
    name: 'Responsive Web Design',
    category: 'design',
    logo: 'mdi:responsive',
    percent: '100%',
  },
  {
    name: 'Web3',
    category: 'code',
    logo: 'icon-park-outline:blockchain',
    percent: '100%',
  },
]
