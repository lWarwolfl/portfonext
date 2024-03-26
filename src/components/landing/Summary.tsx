import StyledButton from '@/components/utils/StyledButton'
import StyledCard from '@/components/utils/StyledCard'
import Title from '@/components/utils/Title'
import { summary } from '@/data/summary'
import styles from '@/styles/landing/Summary.module.scss'
import useWindowSize from '@/utils/useWindowSize'
import Image from 'next/image'

export default function Summary() {
  const isTablet = useWindowSize(930)

  return (
    <div id="summary" className={styles.container}>
      <Title className="animated-title" title="My Story" description="A Pleasant Path" />
      <div className="animated-container">
        <StyledCard move={false} variant="narrowbottom">
          <div className={styles.splitimage}>
            <Image
              quality={8}
              placeholder="blur"
              src={summary.image}
              alt="My photo"
              className={styles.image}
            />
          </div>

          <div className={styles.splittext}>
            <div className={styles.description}>
              {summary.content}
              {!isTablet && summary.extra}
            </div>
          </div>

          {isTablet && summary.extra && <div className={styles.extratext}>{summary.extra}</div>}

          <div className={styles.links}>
            {summary.links.map((item, index) => (
              <StyledButton
                key={index}
                className={styles.link}
                externalLink={item.link}
                icon="ci:chevron-right"
                staticIcon={item.icon}
                color={item.color}
                background="glass"
                barHeight="5px"
              >
                {item.text}
              </StyledButton>
            ))}
          </div>
        </StyledCard>
      </div>
    </div>
  )
}
