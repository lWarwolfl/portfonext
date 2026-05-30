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
    name: 'C#',
    category: 'code',
    logo: 'devicon-plain:csharp',
  },
  {
    name: 'ASP.NET (Entity Framework, Rest APIs)',
    category: 'code',
    logo: 'simple-icons:dotnet',
  },
  {
    name: 'SQL',
    category: 'code',
    logo: 'tabler:sql',
  },
  {
    name: 'Web Socket (SignalR)',
    category: 'code',
    logo: 'fluent:connector-24-regular',
  },
  {
    name: 'Node.js',
    category: 'code',
    logo: 'simple-icons:nodedotjs',
  },
  {
    name: 'Drizzle ORM',
    category: 'code',
    logo: 'catppuccin:drizzle-orm',
  },
  {
    name: 'Postgres',
    category: 'code',
    logo: 'akar-icons:postgresql-fill',
  },
  {
    name: 'Supabase (Supabase Auth)',
    category: 'code',
    logo: 'simple-icons:supabase',
  },
  {
    name: 'Next.js (SSR - PWA - React.js)',
    category: 'code',
    logo: 'simple-icons:nextdotjs',
  },
  {
    name: 'TypeScript (JavaScript)',
    category: 'code',
    logo: 'simple-icons:typescript',
  },
  {
    name: 'Tailwind CSS (Shadcn UI)',
    category: 'uiframework',
    logo: 'simple-icons:tailwindcss',
  },
  {
    name: 'Shopify (GraphQL - Remix)',
    category: 'code',
    logo: 'simple-icons:shopify',
  },
  {
    name: 'Three.js (WebGL - GSAP)',
    category: 'code',
    logo: 'tabler:brand-threejs',
  },
  {
    name: 'Framer Motion',
    category: 'uiframework',
    logo: 'mynaui:framer',
  },
  {
    name: 'Web3 (Wagmi - Hardhat)',
    category: 'code',
    logo: 'icon-park-outline:blockchain',
  },
  {
    name: 'SASS (SCSS - Material UI)',
    category: 'code',
    logo: 'simple-icons:sass',
  },
  {
    name: 'State Management (Zustand - Redux Toolkit)',
    category: 'code',
    logo: 'mingcute:bear-fill',
  },
  {
    name: 'Git (Git Flow - Conventional Commits)',
    category: 'other',
    logo: 'simple-icons:git',
  },
  {
    name: 'Agile (Scrum - Jira - Clickup)',
    category: 'other',
    logo: 'iconoir:agile',
  },
  {
    name: 'Clean Code Principles (SOLID - DRY)',
    category: 'other',
    logo: 'mdi:monitor-clean',
  },
  {
    name: 'Unit Testing (Jest)',
    category: 'other',
    logo: 'simple-icons:jest',
  },
  {
    name: 'E2E Testing (Playwright)',
    category: 'other',
    logo: 'simple-icons:playwright',
  },
  {
    name: 'Docker',
    category: 'other',
    logo: 'simple-icons:docker',
  },
  {
    name: 'Sentry',
    category: 'other',
    logo: 'simple-icons:sentry',
  },
  {
    name: 'StoryBook',
    category: 'other',
    logo: 'devicon-plain:storybook',
  },
]
