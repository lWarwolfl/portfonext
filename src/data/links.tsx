export interface LinkInterface {
  id: string
  text: string
  icon: string
}

export const links: LinkInterface[] = [
  { id: 'hero', text: 'Summary', icon: 'ci:user' },
  { id: 'skills', text: 'Skills', icon: 'ci:bulb' },
  {
    id: 'experiences',
    text: 'Work Experience',
    icon: 'ci:suitcase',
  },
  { id: 'projects', text: 'Projects', icon: 'ci:window-code-block' },
]
