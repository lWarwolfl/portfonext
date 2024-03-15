import Title from '@/components/utils/Title'
import { projects } from '@/data/projects'
import styles from '@/styles/landing/Projects.module.scss'
import clsx from 'clsx'
import Project from './Project'

export default function Projects() {
  return (
    <div id="projects" className={styles.container}>
      <Title
        className="animated-title"
        title="Significant Projects"
        description="Best Of My Work"
      />

      <div className={styles.projectcontainer}>
        {projects.map((item, index) => {
          return (
            <Project
              key={index}
              className={clsx({
                ['animated-container']: item.direction === 'normal',
                ['animated-container-reverse']: item.direction === 'reverse',
              })}
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
}
