import AnimatedContainer from '@/components/utils/AnimatedContainer'
import SplittedContainer from '@/components/utils/SplittedContainer'
import Title from '@/components/utils/Title'
import { educations } from '@/data/educations'
import styles from '@/styles/landing/Educations.module.scss'
import React from 'react'
import Education from './Education'

export default function Educations() {
  const midpoint = Math.ceil(educations.length / 2)

  const firstHalf = educations.slice(0, midpoint)
  const secondHalf = educations.slice(midpoint)

  return (
    <div id="educations" className={styles.container}>
      <AnimatedContainer animationDirection="top" animationSpeed="slow">
        <Title title="My Academic Odyssey:" description="Learning Beyond the Classroom" />

        <SplittedContainer>
          <div className={styles.container}>
            {firstHalf.map((item, index) => {
              return <Education key={index} item={item} />
            })}
          </div>

          <div className={styles.container}>
            {secondHalf.map((item, index) => {
              return <Education key={index} item={item} />
            })}
          </div>
        </SplittedContainer>
      </AnimatedContainer>
    </div>
  )
}
