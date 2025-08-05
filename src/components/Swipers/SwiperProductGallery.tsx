'use client'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
/* @ts-ignore */
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Product } from "@/protocols";

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
export const fetchCache = 'force-no-store'

type SwiperProductGalleryProps = {
  product: Product;
};

export default function SwiperProductGallery({ product }: SwiperProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper

        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperGallery h-[250px] md:h-[300px] mb-4"
      >

        {product.galeriaDeImagens.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.url} alt="img" data-fancybox  data-caption={img.alt} className="h-full w-full object-cover rounded-md cursor-pointer" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        /* @ts-ignore */
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[150px] swiperGallery"
      >
        {product.galeriaDeImagens.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.url} alt="img"  className="h-full w-full object-cover cursor-pointer rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}