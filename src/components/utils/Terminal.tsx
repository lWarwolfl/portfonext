import styles from '@/styles/utils/Terminal.module.scss'
import clsx from 'clsx'

type Tone = 'key' | 'plain' | 'string' | 'number' | 'prop' | 'fn' | 'comment'

interface Token {
  text: string
  tone?: Tone
}

const lines: Token[][] = [
  [{ text: 'const', tone: 'key' }, { text: ' engineer', tone: 'prop' }, { text: ' = {' }],
  [
    { text: '  name', tone: 'prop' },
    { text: ': ' },
    { text: "'Sina Kheiri'", tone: 'string' },
    { text: ',' },
  ],
  [
    { text: '  role', tone: 'prop' },
    { text: ': ' },
    { text: "'Software Engineer'", tone: 'string' },
    { text: ',' },
  ],
  [
    { text: '  focus', tone: 'prop' },
    { text: ': ' },
    { text: "'front-end / full-stack'", tone: 'string' },
    { text: ',' },
  ],
  [{ text: '  years', tone: 'prop' }, { text: ': ' }, { text: '5', tone: 'number' }, { text: ',' }],
  [
    { text: '  stack', tone: 'prop' },
    { text: ': [' },
    { text: "'Next.js'", tone: 'string' },
    { text: ', ' },
    { text: "'TypeScript'", tone: 'string' },
    { text: ', ' },
    { text: "'Node.js'", tone: 'string' },
    { text: ', ' },
    { text: "'ASP.NET'", tone: 'string' },
    { text: '],' },
  ],
  [{ text: '}' }],
  [],
  [{ text: 'export default', tone: 'key' }, { text: ' ' }, { text: 'engineer', tone: 'fn' }],
]

interface Props {
  className?: string
}

export default function Terminal({ className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.file}>profile.ts</div>
      </div>

      <pre className={styles.code}>
        {lines.map((line, index) => (
          <div className={styles.line} key={index}>
            <span className={styles.gutter}>{index + 1}</span>
            <code>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} className={token.tone ? styles[token.tone] : undefined}>
                  {token.text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </pre>

      <div className={styles.prompt}>
        <span className={styles.path}>sina@portfonext</span>
        <span className={styles.sep}>~</span>
        <span className={styles.cursor} />
      </div>
    </div>
  )
}
