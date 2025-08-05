/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
/* @ts-ignore */
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import { api } from "@/services/axios";
import { Product } from "@/protocols";
import Link from "next/link";
import useSWR from "swr";
import ProductCard from "../Partials/ProductCard";
import Icon from "../Adapters/Icon";

export default function SwiperLands() {
  /*   const response = await api.get('/produtos')
    const products:Product[] = response.data.results.produtos */

  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Product[]>("/produtos", async (url: string) => {
    const response = await api.get(url);
    return response.data.results.produtos;
  });

  if (isLoading) return  <div className="flex justify-center items-center">
    <Icon
      icon="mingcute:loading-fill"
      className="text-brand-yellow-50 animate-spin"
      width="40"
      height="40"
    />
  </div>;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      className="swiperLands"
    >
      {products?.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
