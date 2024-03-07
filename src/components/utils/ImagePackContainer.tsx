import StyledButton from '@/components/utils/StyledButton'
import styles from '@/styles/utils/ImageSlider.module.scss'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import Image, { type StaticImageData } from 'next/image'

interface Props {
  className?: string
  title: string
  accent: string
  images: StaticImageData[]
}

export default function ImagePackContainer({ className, title, accent, images }: Props) {
  const handleDownloadImages = () => {
    const zip = new JSZip()
    const folder = zip.folder(`${title}-${accent}`)

    images.forEach((item, index) => {
      const blob = fetch(item.src).then((response) => response.blob())
      folder?.file(`image-${index + 1}.png`, blob)
    })

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${title}-${accent}.zip`)
    })
  }

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        {images[0] && (
          <Image
            quality={10}
            placeholder="blur"
            className={styles.firstimage}
            alt="first-image"
            src={images[0]}
          />
        )}

        <div className={styles.buttoncontainer}>
          <div className={styles.buttonwrapper}>
            <StyledButton
              className={styles.button}
              customClick={handleDownloadImages}
              staticIcon="ci:folder-download"
              background="solid"
              color="blue"
            >
              Download
            </StyledButton>
          </div>
        </div>
      </div>
    </>
  )
}
