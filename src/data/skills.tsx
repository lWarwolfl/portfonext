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
  },
  {
    name: 'React.js',
    category: 'code',
    logo: 'simple-icons:react',
  },
  {
    name: 'Javascript',
    category: 'code',
    logo: 'simple-icons:javascript',
  },
  {
    name: 'Typescript',
    category: 'code',
    logo: 'simple-icons:typescript',
  },
  {
    name: 'Three.js',
    category: 'code',
    logo: 'tabler:brand-threejs',
  },
  {
    name: 'WebGL',
    category: 'code',
    logo: 'simple-icons:webgl',
  },
  {
    name: 'Web3',
    category: 'code',
    logo: 'icon-park-outline:blockchain',
  },
  {
    name: 'Jest',
    category: 'code',
    logo: 'simple-icons:jest',
  },
  {
    name: 'Redux',
    category: 'code',
    logo: 'simple-icons:redux',
  },
  {
    name: 'Zustand',
    category: 'code',
    logo: 'mingcute:bear-fill',
  },
  {
    name: 'React Query',
    category: 'code',
    logo: 'simple-icons:reactquery',
  },
  {
    name: 'Clean Code Principles(SOLID, DRY, …)',
    category: 'other',
    logo: 'mdi:monitor-clean',
  },
  {
    name: 'Git',
    category: 'other',
    logo: 'simple-icons:git',
  },
  {
    name: 'Husky',
    category: 'other',
    logo: 'file-icons:husky',
  },
  {
    name: 'Commitizen',
    category: 'other',
    logo: 'file-icons:commitizen',
  },
  {
    name: 'Story Book',
    category: 'other',
    logo: 'devicon-plain:storybook',
  },
  {
    name: 'Agile/Scrum Methodologies',
    category: 'other',
    logo: 'iconoir:agile',
  },
  {
    name: 'Design Patterns',
    category: 'other',
    logo: 'hugeicons:web-design-02',
  },
  {
    name: 'Tailwind CSS',
    category: 'uiframework',
    logo: 'simple-icons:tailwindcss',
  },
  {
    name: 'Shadcn UI',
    category: 'uiframework',
    logo: 'simple-icons:shadcnui',
  },
  {
    name: 'Material UI',
    category: 'uiframework',
    logo: 'simple-icons:mui',
  },
  {
    name: 'CSS 3',
    category: 'code',
    logo: 'simple-icons:css3',
  },
  {
    name: 'SCSS',
    category: 'code',
    logo: 'simple-icons:sass',
  },
  {
    name: 'Html 5',
    category: 'code',
    logo: 'simple-icons:html5',
  },
  {
    name: 'UI Design',
    category: 'design',
    logo: 'mdi:design',
  },
  {
    name: 'Figma',
    category: 'design',
    logo: 'simple-icons:figma',
  },
  {
    name: 'Adobe XD',
    category: 'design',
    logo: 'simple-icons:adobexd',
  },
]
