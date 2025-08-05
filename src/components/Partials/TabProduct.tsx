'use client'
import { Product } from '@/protocols';
import React, { useEffect, useState } from 'react';
import { Button } from '../Buttons/Button';
import Icon from '../Adapters/Icon';
import { api } from '@/services/axios';

type TabProductProps = {
    product: Product;
};

export default function TabProduct({ product }: TabProductProps) {

    const [productData, setPrdocutData] = useState<Product>({} as Product)

    async function getProductData() {
        try {
            const response = await api.get(`/produto-detalhe?slug=${product.slug}`)
            setPrdocutData(response.data.data.produto)
            console.log(response.data.data.produto)
        } catch {
            console.error('Erro ao buscar dados do produto')
        }
    }

    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTabChange = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };


    const minPeriod = Number(productData?.periodo_min_pagamento?.split(' ')[0])
    const maxPeriod = Number(productData?.periodo_max_pagamento?.split(' ')[0])
    const [sliderValue, setSliderValue] = useState<number>(minPeriod);

    const taxa = Number(productData?.taxa?.split(' ')[0]?.replace('%', '').replace(',', '.')) * (Math.floor(sliderValue / 12) <= 1 ? 1 : Math.ceil(sliderValue / 12))
    const valueMonth = (Number(productData?.preco?.replace('.00', '')) / sliderValue) * taxa

    const amount = valueMonth * sliderValue + Number(productData?.pagamento_inicial) + Number(productData?.taxa_documento) + Number(productData?.taxa_transferencia)

    function formatarNumero(numero: string | number) {

        if (numero) {
            let numeroString = typeof numero === 'number' ? numero?.toFixed(2) : numero?.toString();

            let partes = numeroString?.split('.');

            partes[0] = partes[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

            if (partes.length === 1) {
                partes.push('00');
            } else {
                partes[1] = partes[1].slice(0, 2);
                if (partes[1].length === 1) {
                    partes[1] += '0';
                }
            }
            return partes.join(',');
        }

    }


    useEffect(() => {
        getProductData()
    }, [])

    return (
        <>
            <div className='border border-brand-gray-50/80 rounded-md p-2'>
                <div className="grid grid-cols-12 py-4 px-6">
                    <button
                        className={`flex justify-center py-4 col-span-6 md:col-span-6 lg:col-span-6 transition duration-700 ease-in-out hover:bg-brand-yellow-50 group border-b-[2px] border-gray-300 ${activeTab === 1 ? '' : ''}`}
                        onClick={() => handleTabChange(1)}
                    >
                        <p className={`text-black text-lg md:text-base text-center md:text-start uppercase group-hover:text-white ${activeTab === 1 ? 'font-bold' : ''}`}>Financiar</p>
                    </button>
                    <button
                        className={`flex justify-center py-4 col-span-6 md:col-span-6 lg:col-span-6 transition duration-700 ease-in-out hover:bg-brand-yellow-50 group border-b-[2px] border-gray-300 ${activeTab === 2 ? '' : ''}`}
                        onClick={() => handleTabChange(2)}
                    >
                        <p className={`text-black text-lg md:text-base text-center md:text-start uppercase group-hover:text-white ${activeTab === 2 ? 'font-bold' : ''}`}>À VISTA</p>
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 1 && (
                        <div>
                            <div className='px-10'>
                                <div className="flex flex-col mb-3">
                                    <p className="font-bold text-center md:text-start">Valor</p>
                                    <p className='text-center md:text-start'>$ {formatarNumero(productData?.preco)}</p>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <p className="font-bold text-center md:text-start">Taxa</p>
                                    <p className='text-center md:text-start'>{productData?.taxa}</p>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <p className="font-bold text-center md:text-start">Período de pagamento</p>
                                    <p className='text-center md:text-start'>{productData?.periodo_max_pagamento}</p>
                                </div>
                                {!isNaN(valueMonth) &&
                                    <div className="flex flex-col py-2 px-4 rounded-md border border-black mb-4">
                                        <p className="font-bold text-center md:text-start">Valor a pagar por mês</p>
                                        <p className='text-center md:text-start'>$ {formatarNumero(valueMonth)}</p>
                                    </div>
                                }
                                <div className="flex flex-col mb-3">
                                    <p className="montserrat-light text-center mb-4">Escolha o período do pagamento</p>
                                    <div className='bg-gray-100 p-2 rounded-md'>
                                        <div className='flex justify-between'>
                                            <p>{productData?.periodo_min_pagamento}</p>
                                            <p>{productData?.periodo_max_pagamento}</p>
                                        </div>
                                        <div>
                                            <input type="range" className='w-full' value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} id="cowbell" name="cowbell" min={minPeriod} max={maxPeriod} step="1" />
                                            <label htmlFor="cowbell"></label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='px-10 mb-6'>
                                <div className='border-b border-gray-300'>
                                    <p className="text-center font-bold text-xl mb-4">Valor a pagar hoje</p>
                                    <div className="flex flex-col mb-3">
                                        <p className="font-bold text-center md:text-start">Pagamento Inicial</p>
                                        <p className='text-center md:text-start'>$ {productData?.pagamento_inicial}</p>
                                    </div>
                                    <div className="flex flex-col mb-3">
                                        <p className="font-bold text-center md:text-start">Taxa do Documento</p>
                                        <p className='text-center md:text-start'>$ {productData?.taxa_documento}</p>
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <p className="font-bold text-center md:text-start">Taxa de Transferência</p>
                                        <p className='text-center md:text-start'>$ {productData?.taxa_transferencia}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-10 mb-6 pb-6'>
                                {!isNaN(amount) &&
                                    <div className="flex flex-col mb-6">
                                        <p className="montserrat-black text-center md:text-start text-2xl">Total a Pagar</p>
                                        <p className='text-2xl font-bold text-center md:text-start'>${formatarNumero(amount)}</p>
                                    </div>
                                }
                                <Button variant="outlinedGold" full>
                                    INICIAR PAGAMENTO
                                </Button>
                            </div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div>
                            <div className='px-10'>
                                <div className='border-b border-gray-300 mb-6'>
                                    <div className="flex flex-col mb-3 ml-7" >
                                        <p className="font-bold text-center md:text-start">Valor</p>
                                        <p className='text-center md:text-start'>$ {formatarNumero(productData?.preco)}</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className='flex gap-2 justify-center md:justify-start'>
                                            <div className='flex justify-center items-center'>
                                                <Icon icon="zondicons:minus-solid" className='text-red-600 text-2xl' />
                                            </div>
                                            <div className='felx flex-col mb-2'>
                                                <p className="font-bold text-center md:text-start">Desconto</p>
                                                <p className='text-center md:text-start'>$ {formatarNumero(productData?.desconto)}</p>
                                            </div>
                                        </div>
                                        <div className='felx flex-col ml-8'>
                                            <p className="font-bold text-center md:text-start">Total com desconto</p>
                                            <p className='text-center md:text-start'>$ {formatarNumero(Number(productData?.preco) - Number(productData?.desconto))}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-3 gap-2 justify-center md:justify-start">
                                        <div className='flex justify-center items-center'>
                                            <Icon icon="dashicons:plus-alt" className='text-3xl text-green-600' />
                                        </div>
                                        <div className='felx flex-col'>
                                            <p className="font-bold text-center md:text-start">Taxa do Documento</p>
                                            <p className='text-center md:text-start'>$ {formatarNumero(productData?.taxa_documento)}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-3 gap-2 justify-center md:justify-start">
                                        <div className='flex justify-center items-center'>
                                            <Icon icon="dashicons:plus-alt" className='text-3xl text-green-600' />
                                        </div>
                                        <div className='felx flex-col'>
                                            <p className="font-bold text-center md:text-start">Taxa de Transferência</p>
                                            <p className='text-center md:text-start'>$ {formatarNumero(productData?.taxa_transferencia)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-10 mb-6 pb-6'>
                                <div className="flex flex-col mb-6">
                                    <p className="montserrat-black text-center md:text-start text-2xl">Total a Pagar</p>
                                    <p className='text-2xl font-bold text-center md:text-start'>$ {formatarNumero(Number(productData?.preco) - Number(productData?.desconto) + Number(productData?.taxa_documento) + Number(productData?.taxa_transferencia))}</p>
                                </div>
                                <Button variant="outlinedGold" full>
                                    INICIAR PAGAMENTO
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
