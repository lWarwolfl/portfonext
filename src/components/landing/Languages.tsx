import AnimatedContainer from '@/components/utils/AnimatedContainer'
import Title from '@/components/utils/Title'
import { languages } from '@/data/languages'
import styles from '@/styles/landing/Skills.module.scss'
import Language from './Language'

export default function Languages() {
  return (
    <div id="languages" className={styles.container}>
      <AnimatedContainer animationDirection="top" animationSpeed="slow">
        <Title title="Languages:" description="The Global Tapestry of My Communication" />

        <div className={styles.skillcontainer}>
          {languages.map((item, index) => {
            return <Language key={index} item={item} />
          })}
        </div>
      </AnimatedContainer>
    </div>
  )
}
