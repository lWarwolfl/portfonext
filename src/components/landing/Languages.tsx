import Language from '@/components/landing/Language'
import Title from '@/components/utils/Title'
import { languages } from '@/data/languages'
import styles from '@/styles/landing/Skills.module.scss'

export default function Languages() {
  return (
    <div id="languages" className={`animated-container ${styles.container}`}>
      <Title title="Languages" description="Communication Skills" />

      <div className={styles.skillcontainer}>
        {languages.map((item, index) => {
          return <Language key={index} item={item} />
        })}
      </div>
    </div>
  )
}
