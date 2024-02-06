import AnimatedContainer from '@/components/utils/AnimatedContainer'
import SplittedContainer from '@/components/utils/SplittedContainer'
import Title from '@/components/utils/Title'
import { workexperiences } from '@/data/workexperiences'
import styles from '@/styles/landing/WorkExperience.module.scss'
import { Color } from '@/utils/types'
import { StaticImageData } from 'next/image'
import React from 'react'
import Company from './Company'

export interface WorkExperience {
   alt: string
   name: string | React.ReactNode
   link: string
   logo: string | StaticImageData
   icon: React.ElementType
   listicon: React.ElementType
   experiences: string[] | React.ReactNode[]
   color: Color
}

export default function WorkExperience() {
   const midpoint = Math.ceil(workexperiences.length / 2)

   const firstHalf = workexperiences.slice(0, midpoint)
   const secondHalf = workexperiences.slice(midpoint)

   return (
      <div id="workexperience" className={styles.container}>
         <AnimatedContainer animationDirection="top" animationSpeed="slow">
            <Title title="From Novice to Navigator:" description="Navigating My Career Journey" />

            <SplittedContainer>
               <div className={styles.container}>
                  {firstHalf.map((company, i) => {
                     return <Company key={i} company={company} i={i} />
                  })}
               </div>

               <div className={styles.container}>
                  {secondHalf.map((company, i) => {
                     return <Company key={i} company={company} i={i} />
                  })}
               </div>
            </SplittedContainer>
         </AnimatedContainer>
      </div>
   )
}
