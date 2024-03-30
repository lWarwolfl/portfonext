import StyledButton from '@/components/utils/StyledButton'
import useWindowSize from '@/lib/useWindowSize'
import styles from '@/styles/utils/ImageSlider.module.scss'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import Image, { type StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
  className?: string
  title: string
  accent: string
  images: StaticImageData[]
  thumbnails?: StaticImageData[]
}

export default function ImageSlider({ className, title, accent, images, thumbnails }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useWindowSize()

  const handleButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

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

  const portalContainerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const portalContainer = document.createElement('div')
    portalContainer.id = 'fullslider-portal-container'
    document.getElementById('full-size-image-slider')?.appendChild(portalContainer)
    portalContainerRef.current = portalContainer

    return () => {
      if (portalContainerRef.current) {
        document.getElementById('full-size-image-slider')?.removeChild(portalContainerRef.current)
      }
    }
  }, [])

  const fullSliderPortal = isOpen
    ? ReactDOM.createPortal(
        <div className={styles.fullslider}>
          <div className={styles.slidercontainer}>
            <div className={styles.header}>
              <div className={styles.title}>
                {title}
                <span className={styles.accent}>{accent}</span>
              </div>

              <StyledButton
                customClick={handleButtonClick}
                staticIcon="ci:close-md"
                background="glass"
                iconButton
              />
            </div>

            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              draggable={false}
              preventClicks={false}
              modules={[Navigation, Pagination]}
              navigation
              className={`swiper full-image-slider`}
              data-lenis-prevent
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      quality={85}
                      placeholder="blur"
                      className="image"
                      alt={`slide-${index}`}
                      src={item}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>,
        portalContainerRef.current!
      )
    : null

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        <Swiper
          effect={'coverflow'}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={isMobile ? 1.6 : 2.4}
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
          {thumbnails && thumbnails.length > 0 ? (
            <>
              {thumbnails.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      quality={80}
                      placeholder="blur"
                      className="image"
                      alt={`slide-${index}`}
                      src={item}
                    />
                  </SwiperSlide>
                )
              })}
            </>
          ) : (
            <>
              {images.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      quality={80}
                      placeholder="blur"
                      className="image"
                      alt={`slide-${index}`}
                      src={item}
                    />
                  </SwiperSlide>
                )
              })}
            </>
          )}
        </Swiper>

        <div className={styles.buttoncontainer}>
          <StyledButton
            className={styles.button}
            customClick={handleButtonClick}
            staticIcon="ci:expand"
            background="glass"
            iconButton
          />

          <StyledButton
            className={styles.button}
            customClick={handleDownloadImages}
            staticIcon="ci:file-download"
            background="glass"
            iconButton
          />
        </div>
      </div>

      {fullSliderPortal}
    </>
  )
}
