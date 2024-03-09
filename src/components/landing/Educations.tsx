import SplittedContainer from '@/components/utils/SplittedContainer'
import Title from '@/components/utils/Title'
import { educations } from '@/data/educations'
import styles from '@/styles/landing/Educations.module.scss'
import Education from './Education'
import clsx from 'clsx'

export default function Educations() {
  const midpoint = Math.ceil(educations.length / 2)

  const firstHalf = educations.slice(0, midpoint)
  const secondHalf = educations.slice(midpoint)

  return (
    <div id="educations" className={styles.container}>
      <Title
        title="My Academic Odyssey:"
        description="Learning Beyond the Classroom"
        className="animated-container"
      />

      <SplittedContainer>
        <div className={clsx('animated-container', styles.container)}>
          {firstHalf.map((item, index) => {
            return <Education key={index} item={item} />
          })}
        </div>

        <div className={clsx('animated-container', styles.container)}>
          {secondHalf.map((item, index) => {
            return <Education key={index} item={item} />
          })}
        </div>
      </SplittedContainer>
    </div>
  )
}
