import Title from '@/components/utils/Title'
import { skillCategories, skills } from '@/data/skills'
import styles from '@/styles/landing/Skills.module.scss'
import clsx from 'clsx'
import React from 'react'
import Skill from './Skill'

export default function Skills() {
  return (
    <div id="skills" className={styles.container}>
      <Title className="animated-title" title="Skills" description="Key Abilities" />
      <div className={clsx('animated-container', styles.skillcontainer)}>
        {skillCategories.map((category, index) => {
          return (
            <React.Fragment key={index}>
              {skills
                .filter((item) => item.category === category.name)
                .map((item, i) => {
                  return <Skill key={i} item={item} category={category} />
                })}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
