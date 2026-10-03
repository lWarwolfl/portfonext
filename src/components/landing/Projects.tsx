import Project from '@/components/landing/Project'
import Title from '@/components/utils/Title'
import { projects } from '@/data/projects'
import styles from '@/styles/landing/Projects.module.scss'

export default function Projects() {
  return (
    <div id="projects" className={`section ${styles.container}`}>
      <Title index="03" title="Significant Projects" description="Best Of My Work" />

      <div className={styles.list}>
        {projects.map((item, index) => (
          <Project key={item.title} index={index} item={item} />
        ))}
      </div>
    </div>
  )
}
