import { type ColorType, type SkillCategoryType } from '@/lib/types'

export interface SkillCategoryInterface {
  name: SkillCategoryType
  label: string
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
    label: 'Languages & Frameworks',
    color: 'blue',
    icon: 'ci:code',
  },
  {
    name: 'design',
    label: 'Design',
    color: 'purple',
    icon: 'ci:swatches-palette',
  },
  {
    name: 'uiframework',
    label: 'UI & Styling',
    color: 'pink',
    icon: 'ic:outline-format-paint',
  },
  {
    name: 'other',
    label: 'Tooling & Practice',
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
    name: 'REST APIs',
    category: 'code',
    logo: 'mdi:api',
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
    name: 'Server Actions',
    category: 'code',
    logo: 'mdi:server',
  },
  {
    name: 'TypeScript (JavaScript)',
    category: 'code',
    logo: 'simple-icons:typescript',
  },
  {
    name: 'JavaScript',
    category: 'code',
    logo: 'simple-icons:javascript',
  },
  {
    name: 'HTML 5',
    category: 'code',
    logo: 'simple-icons:html5',
  },
  {
    name: 'CSS 3',
    category: 'code',
    logo: 'simple-icons:css3',
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
    name: 'GraphQL',
    category: 'code',
    logo: 'simple-icons:graphql',
  },
  {
    name: 'Remix',
    category: 'code',
    logo: 'simple-icons:remix',
  },
  {
    name: 'Three.js (WebGL - GSAP)',
    category: 'code',
    logo: 'tabler:brand-threejs',
  },
  {
    name: 'Vite',
    category: 'code',
    logo: 'simple-icons:vite',
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
    name: 'MetaMask',
    category: 'code',
    logo: 'simple-icons:metamask',
  },
  {
    name: 'Figma',
    category: 'design',
    logo: 'simple-icons:figma',
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
    name: 'Stripe',
    category: 'other',
    logo: 'simple-icons:stripe',
  },
  {
    name: 'Mapbox',
    category: 'other',
    logo: 'simple-icons:mapbox',
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
