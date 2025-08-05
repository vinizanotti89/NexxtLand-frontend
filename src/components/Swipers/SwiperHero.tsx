/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
/* @ts-ignore */
import { Autoplay } from "swiper";
import { Fade } from "react-awesome-reveal";

export default function SwiperHero() {
  return (
    <Swiper
      pagination={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="aspect-[5/8] sm:aspect-[12/8] md:aspect-[12/8] lg:aspect-[16/8] h-auto swiper-hero"
    >
      <SwiperSlide className='bg-[url("/img/banners/b-1.jpg")]  bg-cover bg-center bg-no-repeat flex items-center justify-start relative'>
        <div className="main_container flex justify-center h-full relative z-20">
          <div className="items-center justify-start grid grid-cols-12 relative">
            <div className="col-span-12 lg:col-span-12 relative">
              <Fade duration={2000}>
                <h1 className="drop-shadow-lg mt-[370px] lg:mt-0 px-4 relative text-center tracking-wide text-shadow text-3xl sm:text-5xl lg:text-6xl text-white uppercase font-black">
                  OPORTUNIDADES <br /> DE INVESTIMENTO <br />
                  EM TERRENOS NOS ESTADOS UNIDOS
                </h1>
              </Fade>
              <div className=" justify-center items-center lg:flex hidden">
                <p className="text-white text-center mt-4 max-w-[80%] md:text-xl z-10 relative font-semibold">
                  Escolha seu lote com segurança e inteligência de mercado{" "}
                  <br /> Investimentos avaliados e recomendados pela nossa
                  estrutura de expertise imobiliária
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute bottom-0 h-[90%] w-full bg-gradient-to-t from-black to-black/0"></span>
      </SwiperSlide>
    </Swiper>
  );
}
