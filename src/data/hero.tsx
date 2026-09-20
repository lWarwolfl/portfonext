export interface HeroMetaInterface {
  label: string
  value: string
}

export interface HeroInterface {
  name: string
  content: string
  lead: string
  meta: HeroMetaInterface[]
}

export const hero: HeroInterface = {
  name: 'Sina Kheiri',
  content: 'Software Engineer | Node.js | ASP.NET | Next.js/React.js | TypeScript',
  lead: 'Software engineer with 5+ years of experience building performant applications. Skilled in frontend-focused development using Next.js and TypeScript, and experienced in back-end and full-stack projects with Node.js and ASP.NET. Committed to staying up-to-date and having an eye for detail while operating in fast-paced and Agile environments.',
  meta: [
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Focus', value: 'Front-end / Full-stack' },
    { label: 'Experience', value: '5+ years' },
    { label: 'Stack', value: 'Next.js, TypeScript, Node.js, ASP.NET' },
    { label: 'Contact', value: 'sinakheiri.dev@gmail.com' },
  ],
}
