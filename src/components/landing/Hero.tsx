import StyledButton from '@/components/utils/StyledButton'
import { hero } from '@/data/hero'
import styles from '@/styles/landing/Hero.module.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin, useGSAP)
}

export default function Hero() {
  const main = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 })
      
      tl.to('.text', {
        duration: 1,
        text: {
          type: 'diff',
          value: 'professional',
          delimiter: '',
        },
      }).to('.text', {
        duration: 1,
        text: { type: 'diff', value: 'proficient', delimiter: '' },
      })
    },
    { scope: main }
  )

  return (
    <div ref={main} id="hero" className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.animatedtext}>
          <div className={`text ${styles.text}`}>professional</div>
          <span className={styles.caret}>|</span>
        </div>

        <div className={styles.description}>{hero.content}</div>

        <div className={styles.links}>
          <StyledButton
            className={styles.link}
            externalLink="https://github.com/lWarwolfl/portfonext"
            background="glass"
            staticIcon="bxl:github"
            icon="ci:chevron-right"
            color="blue"
            barHeight="5px"
          >
            View project on Github
          </StyledButton>
        </div>
      </div>
    </div>
  )
}
