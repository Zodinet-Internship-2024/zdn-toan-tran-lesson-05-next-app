'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

type ProductDetailImagesProps = {
    images: string[];
};
export default function ProductDetailImages({ images }: Readonly<ProductDetailImagesProps>) {
    const swiperRef = useRef<SwiperRef>();
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: swiperRef.current }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 w-full"
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <Image src={image} alt={image} width={1024} height={1280} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper w-full"
            >
                {images.map((image) => (
                    <SwiperSlide key={image} className="h-full">
                        <Image
                            className="object-cover"
                            src={image}
                            alt={image}
                            width={400}
                            height={400}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
