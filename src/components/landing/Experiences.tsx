import Experience from '@/components/landing/Experience'
import Title from '@/components/utils/Title'
import { experiences } from '@/data/experiences'
import styles from '@/styles/landing/Experiences.module.scss'

export default function Experiences() {
  return (
    <div id="experiences" className={`section ${styles.container}`}>
      <Title
        index="02"
        className="animated-title"
        title="Career Journey"
        description="Becoming A Pro"
      />

      <div className={`animated-container ${styles.list}`}>
        {experiences.map((item) => (
          <Experience key={item.employer} item={item} />
        ))}
      </div>
    </div>
  )
}
