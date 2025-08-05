/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
/* @ts-ignore */
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css/bundle'
import { api } from '@/services/axios'
import { Product } from '@/protocols'
import Link from 'next/link'
import useSWR from 'swr'


export default function SwiperOthersLands() {
  /*   const response = await api.get('/produtos')
    const products:Product[] = response.data.results.produtos */

  const { data: products, error, isLoading } = useSWR<Product[]>('/produtos', async (url: string) => {
    const response = await api.get(url);
    return response.data.results.produtos;
  });

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="swiperLands"
    >

      {products?.map((product) => (
        <SwiperSlide key={product.id}>
          <Link href={`/terrenos/${product.id}`} className='flex h-full bg-cover transition duration-700 ease-in-out hover:scale-105 bg-center rounded-md bg-no-repeat items-center justify-start' style={{ backgroundImage: `url(${product.imagemDestaque.url})` }}>
            <div className='flex justify-center items-end h-[410px] group '>
              <div className='px-3 py-6 relative z-20'>
                <h3 className='drop-shadow-lg text-center md:text-start mb-4 text-shadow text-xl md:text-lg lg:text-md text-white uppercase font-bold'>{product.tituloTerreno}</h3>
                <div className='grid grid-cols-12 gap-2'>
                  {product?.especificacoesDoTerreno?.tamanho && (
                    <div className='col-span-4 sm:col-span-4 flex flex-col justify-center items-center'>
                      <img src="/img/icons/icon-size.png" alt="Icone" />
                      <p className='text-white text-sm font-bold'>Tamanho</p>
                      <p className='text-white text-xs text-center font-thin h-16'>{product?.especificacoesDoTerreno?.tamanho}</p>
                    </div>
                  )}
                  {product?.especificacoesDoTerreno?.dimensoes && (
                    <div className='col-span-4 sm:col-span-4 flex flex-col justify-center items-center'>
                      <img src="/img/icons/icon-dimensions.png" alt="Icone" />
                      <p className='text-white text-sm font-bold'>Dimensões</p>
                      <p className='text-white text-xs text-center font-thin h-16'>{product?.especificacoesDoTerreno?.dimensoes} </p>
                    </div>
                  )}
                  {product?.especificacoesDoTerreno?.cidade && (
                    <div className='col-span-4 sm:col-span-4 flex flex-col justify-center items-center'>
                      <img src="/img/icons/icon-location.png" alt="Icone" />
                      <p className='text-white text-sm font-bold'>Localização</p>
                      <p className='text-white text-xs text-center font-thin h-16'>{product?.especificacoesDoTerreno?.cidade}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <span className="absolute bottom-0 h-[70%] w-full bg-gradient-to-t from-black to-black/0 rounded-md"></span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
