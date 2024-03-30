import Project from '@/components/landing/Project'
import Title from '@/components/utils/Title'
import { projects } from '@/data/projects'
import styles from '@/styles/landing/Projects.module.scss'
import clsx from 'clsx'

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
            <div
              key={index}
              className={clsx(styles.animatedcontainer, {
                ['animated-container']: index % 2 === 0,
                ['animated-container-reverse']: index % 2 !== 0,
              })}
            >
              <Project index={index} item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
