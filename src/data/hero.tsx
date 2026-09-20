export interface HeroMetaInterface {
  label: string
  value: string
}

export interface HeroInterface {
  name: string
  content: React.ReactNode
  lead: React.ReactNode
  meta: HeroMetaInterface[]
}

export const hero: HeroInterface = {
  name: 'Sina Kheiri',
  content: <>Software Engineer | Node.js | ASP.NET | Next.js/React.js | Typescript</>,
  lead: (
    <>
      Five years of building performant, detail-driven web applications. Mostly front-end with
      Next.js and TypeScript, with back-end and full-stack work in ASP.NET and Node.js.
    </>
  ),
  meta: [
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Focus', value: 'Front-end / Full-stack' },
    { label: 'Stack', value: 'Next.js - React - TypeScript - ASP.NET - Node.js' },
    { label: 'Experience', value: '5 years' },
    { label: 'Contact', value: 'sinakheiri.dev@gmail.com' },
  ],
}
