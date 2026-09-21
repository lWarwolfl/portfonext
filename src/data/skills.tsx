import { type SkillCategoryType } from '@/lib/types'

export interface SkillInterface {
  name: string
  logo: string
}

export interface SkillGroupInterface {
  name: SkillCategoryType
  label: string
  items: SkillInterface[]
}

export const skills: SkillInterface[] = [
  { name: 'Next.js (Vercel - PWA - React.js)', logo: 'simple-icons:nextdotjs' },
  { name: 'TypeScript (JavaScript)', logo: 'simple-icons:typescript' },
  { name: 'JavaScript', logo: 'simple-icons:javascript' },
  { name: 'HTML 5', logo: 'simple-icons:html5' },
  { name: 'CSS 3', logo: 'simple-icons:css3' },
  { name: 'Tailwind CSS (Shadcn UI)', logo: 'simple-icons:tailwindcss' },
  { name: 'SASS (SCSS - Material UI)', logo: 'simple-icons:sass' },
  { name: 'Three.js (WebGL - GSAP)', logo: 'tabler:brand-threejs' },
  { name: 'Framer Motion', logo: 'mynaui:framer' },
  { name: 'State Management (Zustand - Redux Toolkit)', logo: 'mingcute:bear-fill' },
  { name: 'Vite', logo: 'simple-icons:vite' },
  { name: 'UI Design (Figma)', logo: 'simple-icons:figma' },
  { name: 'SEO (Rich results - Metadata)', logo: 'simple-icons:googlesearchconsole' },
  { name: 'Node.js', logo: 'simple-icons:nodedotjs' },
  { name: 'ORM (Drizzle, Prisma)', logo: 'simple-icons:drizzle' },
  { name: 'SQL (PostgreSQL)', logo: 'akar-icons:postgresql-fill' },
  { name: 'REST APIs (React Query)', logo: 'mdi:api' },
  { name: 'C# (OOP)', logo: 'devicon-plain:csharp' },
  { name: 'ASP.NET (Entity Framework, REST APIs)', logo: 'simple-icons:dotnet' },
  { name: 'Supabase', logo: 'simple-icons:supabase' },
  { name: 'Server Actions', logo: 'mdi:server' },
  { name: 'Agile (Scrum)', logo: 'iconoir:agile' },
  { name: 'Clean Code Principles (SOLID - DRY)', logo: 'mdi:monitor-clean' },
  { name: 'Unit Testing (Jest)', logo: 'simple-icons:jest' },
  { name: 'E2E Testing (Playwright)', logo: 'simple-icons:playwright' },
  { name: 'Shopify (GraphQL - Remix)', logo: 'simple-icons:shopify' },
  { name: 'GraphQL', logo: 'simple-icons:graphql' },
  { name: 'Remix', logo: 'simple-icons:remix' },
  { name: 'Web3 (Wagmi - Hardhat)', logo: 'icon-park-outline:blockchain' },
  { name: 'MetaMask', logo: 'arcticons:metamask' },
  { name: 'Git (Git Flow)', logo: 'simple-icons:git' },
  { name: 'Storybook', logo: 'devicon-plain:storybook' },
  { name: 'Stripe', logo: 'simple-icons:stripe' },
  { name: 'Mapbox', logo: 'simple-icons:mapbox' },
]

export function pickSkills(names: string[]): SkillInterface[] {
  return names
    .map((name) => skills.find((skill) => skill.name === name))
    .filter((skill): skill is SkillInterface => skill !== undefined)
}

export const skillGroups: SkillGroupInterface[] = [
  {
    name: 'frontend',
    label: 'Frontend',
    items: pickSkills([
      'Next.js (Vercel - PWA - React.js)',
      'TypeScript (JavaScript)',
      'JavaScript',
      'HTML 5',
      'CSS 3',
      'Tailwind CSS (Shadcn UI)',
      'SASS (SCSS - Material UI)',
      'Three.js (WebGL - GSAP)',
      'Framer Motion',
      'State Management (Zustand - Redux Toolkit)',
      'Vite',
      'UI Design (Figma)',
      'SEO (Rich results - Metadata)',
    ]),
  },
  {
    name: 'backend',
    label: 'Backend & Database',
    items: pickSkills([
      'Node.js',
      'ORM (Drizzle, Prisma)',
      'SQL (PostgreSQL)',
      'REST APIs (React Query)',
      'C# (OOP)',
      'ASP.NET (Entity Framework, REST APIs)',
      'Supabase',
      'Server Actions',
    ]),
  },
  {
    name: 'workflow',
    label: 'Testing & Workflow',
    items: pickSkills([
      'Agile (Scrum)',
      'Clean Code Principles (SOLID - DRY)',
      'Unit Testing (Jest)',
      'E2E Testing (Playwright)',
    ]),
  },
  {
    name: 'tools',
    label: 'Tools & Platforms',
    items: pickSkills([
      'Shopify (GraphQL - Remix)',
      'GraphQL',
      'Remix',
      'Web3 (Wagmi - Hardhat)',
      'MetaMask',
      'Git (Git Flow)',
      'Storybook',
      'Stripe',
      'Mapbox',
    ]),
  },
]
