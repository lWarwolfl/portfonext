export interface LinkInterface {
  id: string
  text: string
  icon: string
}

export const links: LinkInterface[] = [
  { id: 'summary', text: 'Summary', icon: 'ic:baseline-route' },
  { id: 'skills', text: 'Skills', icon: 'ci:bulb' },
  {
    id: 'experiences',
    text: 'Work Experience',
    icon: 'ci:suitcase',
  },
  { id: 'projects', text: 'Projects', icon: 'ci:window-code-block' },
  { id: 'educations', text: 'Education', icon: 'ci:book-open' },
  { id: 'languages', text: 'Languages', icon: 'ci:planet' },
]
