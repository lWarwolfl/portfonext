import Experience from '@/components/landing/Experience'
import SplittedContainer from '@/components/utils/SplittedContainer'
import Title from '@/components/utils/Title'
import { experiences } from '@/data/experiences'
import styles from '@/styles/landing/Experiences.module.scss'

export default function Experiences() {
  const midpoint = Math.ceil(experiences.length / 2)

  const firstHalf = experiences.slice(0, midpoint)
  const secondHalf = experiences.slice(midpoint)

  return (
    <div id="experiences" className={styles.container}>
      <Title className="animated-title" title="Career Journey" description="Becoming A Pro" />

      <SplittedContainer className="animated-container">
        <div className={styles.container}>
          {firstHalf.map((item, index) => {
            return <Experience key={index} item={item} />
          })}
        </div>

        <div className={styles.container}>
          {secondHalf.map((item, index) => {
            return <Experience key={index} item={item} />
          })}
        </div>
      </SplittedContainer>
    </div>
  )
}
