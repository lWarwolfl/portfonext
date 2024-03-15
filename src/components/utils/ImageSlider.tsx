import StyledButton from '@/components/utils/StyledButton'
import styles from '@/styles/utils/ImageSlider.module.scss'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import Image, { type StaticImageData } from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
  className?: string
  title: string
  accent: string
  images: StaticImageData[]
}

export default function ImageSlider({ className, title, accent, images }: Props) {
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
        <Swiper
          effect={'coverflow'}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={2.7}
          centeredSlides
          loop
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          coverflowEffect={{ rotate: 10, stretch: 0, depth: 200, slideShadows: true }}
          className={`swiper image-slider`}
        >
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  quality={10}
                  placeholder="blur"
                  className="image"
                  alt={`slide-${index}`}
                  src={item}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className={styles.buttoncontainer}>
          <StyledButton
            className={styles.button}
            customClick={handleDownloadImages}
            staticIcon="ci:file-download"
            background="glass"
          />
        </div>
      </div>
    </>
  )
}
