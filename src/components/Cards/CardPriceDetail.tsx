import React from 'react'

type CardPriceDetail = {
    title: string;
    price: any;
    link: string;
    portion: string;
};

export default function CardPriceDetail({title, price, link, portion}: CardPriceDetail) {

    
  return (
    <div className="col-span-12 md:col-span-3 transition duration-700 mt-5 md:mt-0 ease-in-out shadow-item rounded-sm bg-gray-100 border cursor-pointer group hover:shadow-xl hover:-translate-y-1">
        <div className='mx-3 -translate-y-4 z-10 relative'>
            <div className="bg-brand-yellow-50 rounded-t-md px-2 py-6">
                <p className="text-center font-bold text-xl text-white">{title}</p>
                <p className="text-center font-bold text-xl text-white">Preço</p>
            </div>
            <div className="bg-black px-2 py-8 rounded-b-md">
                <p className="font-bold text-white text-4xl text-center">{price}</p>
            </div>
        </div>
        <div className="p-6 bg-white -translate-y-6">
            <p className="text-center text-black font-semibold">{portion}</p>
        </div>
        <div className="flex justify-center items-center pb-4">
            <a
                href={link}
                target="_blank"
                className="flex items-center w-fit justify-center gap-2 p-4 font-bold border border-brand-yellow-50 group-hover:bg-white group-hover:text-brand-yellow-50 text-white bg-brand-yellow-50 transition duration-700 ease-in-out"
                rel="noreferrer"
            >
                Comprar Agora
            </a>
        </div>
    </div>
  )
}
