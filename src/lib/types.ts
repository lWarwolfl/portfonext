export type ColorType =
  | 'purple'
  | 'green'
  | 'blue'
  | 'aqua'
  | 'white'
  | 'pink'
  | 'yellow'
  | 'red'
  | 'orange'

export type SkillCategoryType = 'frontend' | 'backend' | 'workflow' | 'tools'

export interface LinkInterface {
  link: string
  color: ColorType
  text: string
  icon: string
}

export interface SocialInterface {
  link: string
  label: string
  icon: string
}
