import Experience from '@/components/landing/Experience'
import SplittedContainer from '@/components/utils/SplittedContainer'
import Title from '@/components/utils/Title'
import { experiences } from '@/data/experiences'
import styles from '@/styles/landing/Experiences.module.scss'

export default function Experiences() {
  const left = experiences.filter((item) => item.position === 'left')
  const right = experiences.filter((item) => item.position === 'right')

  return (
    <div id="experiences" className={styles.container}>
      <Title className="animated-title" title="Career Journey" description="Becoming A Pro" />

      <SplittedContainer className="animated-container">
        <div className={styles.container}>
          {left.map((item, index) => {
            return <Experience key={index} item={item} />
          })}
        </div>

        <div className={styles.container}>
          {right.map((item, index) => {
            return <Experience key={index} item={item} />
          })}
        </div>
      </SplittedContainer>
    </div>
  )
}
