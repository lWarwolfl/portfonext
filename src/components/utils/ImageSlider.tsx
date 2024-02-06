import StyledButton from '@/components/utils/StyledButton'
import styles from '@/styles/ImageSlider.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
   className?: string
   title: string
   accent: string
   images: StaticImageData[]
}

export default function ImageSlider({ className, title, accent, images }: Props) {
   const [isOpen, setIsOpen] = useState(false)

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
      document.getElementById('root')?.appendChild(portalContainer)
      portalContainerRef.current = portalContainer

      return () => {
         if (portalContainerRef.current) {
            document.getElementById('root')?.removeChild(portalContainerRef.current)
         }
      }
   }, [])

   const fullSliderPortal = isOpen
      ? ReactDOM.createPortal(
           <div className={styles.fullslider}>
              <div className={styles.slidercontainer}>
                 <div className={styles.title}>
                    {title}
                    <span className={styles.accent}>{accent}</span>
                    <StyledButton
                       className={styles.button}
                       customClick={handleButtonClick}
                       staticIcon={CloseRoundedIcon}
                       fontSize="small"
                       iconSize="large"
                       staticIconSize="big"
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
                 >
                    {images.map((item, index) => {
                       return (
                          <SwiperSlide key={index}>
                             <Image className="image" alt={`slide-${index}`} src={item} />
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
                     <SwiperSlide key={index} style={{ backgroundImage: `url("${item.src}")` }} />
                  )
               })}
            </Swiper>

            <div className={styles.buttoncontainer}>
               <StyledButton
                  className={styles.button}
                  customClick={handleDownloadImages}
                  staticIcon={FileDownloadOutlinedIcon}
                  fontSize="small"
                  iconSize="large"
                  staticIconSize="big"
                  background="glass"
                  color="green"
                  iconButton
               />

               <StyledButton
                  className={styles.button}
                  customClick={handleButtonClick}
                  staticIcon={FullscreenRoundedIcon}
                  fontSize="small"
                  iconSize="large"
                  staticIconSize="big"
                  background="glass"
                  iconButton
               />
            </div>
         </div>

         {fullSliderPortal}
      </>
   )
}
