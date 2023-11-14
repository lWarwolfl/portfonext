import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

type Props = {
	id?: string;
	className?: string;
	images: StaticImageData[];
};

export default function ImageSlider({ id, className, images }: Props) {
	return (
		<Swiper
			id={id}
			direction="horizontal"
			effect={"coverflow"}
			autoplay={{
				delay: 6000,
				disableOnInteraction: false,
			}}
			slidesPerView={3}
			spaceBetween={20}
			pagination={{
				clickable: true,
			}}
			modules={[EffectCoverflow, Pagination, Autoplay]}
			coverflowEffect={{ rotate: 10, stretch: 0, depth: 200, slideShadows: true }}
			className={`swiper image-slider ${className}`}
		>
			{images.map((item, index) => {
				return (
					<SwiperSlide key={index} style={{ backgroundImage: `url("${item.src}")` }} />
				);
			})}
		</Swiper>
	);
}
