'use client'
import { Fade } from "react-awesome-reveal";

export default function SectionHowToBuy() {
  return (
    <div className='border-b border-brand-gray-50 py-10 md:py-20 '>
      <div className='main_container'>
        <div className='flex flex-col justify-center items-center'>
          <Fade direction="up" duration={2000}>                
            <h2 className='text-4xl md:text-3xl max-w-[500px] lg:text-5xl text-brand-black-50 font-black mb-4 text-center'>COMO COMPRAR SEU TERRENO?</h2>
          </Fade>
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-12 md:col-span-4'>
              <div className='h-72 p-8 flex flex-col items-center justify-center'>
                <Fade direction="up" duration={2000}>                
                <img src="/img/icons/icon-step-01.png" alt="Passo 1" className='mb-4 h-14' />
                </Fade>
                <div className='flex gap-2 justify-center items-center flex-col md:flex-row mb-4 max-w-[100%] lg:max-w-[70%]'>
                  <p className='font-bold text-brand-black-50 text-6xl'>1º</p>
                  <p className='font-bold text-brand-black-50 text-xl lg:text-2xl text-center md:text-start'>ESCOLHA SEU TERRENO</p>
                </div>
                <p className='text-center md:text-start max-w-[100%] lg:max-w-[70%] mb-4 text-brand-black-50'>A <strong className='font-bold'>escolha do seu imóvel</strong> é a etapa mais importante do processo de compra.</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <div className='h-72 p-8 flex flex-col items-center justify-center'>
                <Fade direction="up" duration={2000}>                
                <img src="/img/icons/icon-step-02.png" alt="Passo 2" className='mb-4 h-14' />
                </Fade>
                <div className='flex gap-2 justify-center items-center flex-col md:flex-row mb-4 max-w-[100%] lg:max-w-[70%]'>
                  <p className='font-bold text-brand-black-50 text-6xl'>2º</p>
                  <p className='font-bold text-brand-black-50 text-xl lg:text-2xl text-center md:text-start'>COMPRE SEU TERRENO</p>
                </div>
                <p className='text-center md:text-start max-w-[100%] lg:max-w-[70%] mb-4 text-brand-black-50'>Ao decidir, pressione o botão &apos;Comprar agora&apos; e você será redirecionado para o formulário de compra.</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <div className='h-72 p-8 flex flex-col items-center justify-center'>
                <Fade direction="up" duration={2000}>                
                  <img src="/img/icons/icon-step-03.png" alt="Passo 3" className='mb-4 h-14' />
                </Fade>
                <div className='flex gap-2 justify-center items-center flex-col md:flex-row mb-4 max-w-[100%] lg:max-w-[70%]'>
                  <p className='font-bold text-brand-black-50 text-6xl'>3º</p>
                  <p className='font-bold text-brand-black-50 text-xl lg:text-2xl text-center md:text-start'>CONFIRMAÇÃO E DOCUMENTAÇÃO</p>
                </div>
                <p className='text-center md:text-start max-w-[100%] lg:max-w-[70%] mb-4'>Revise e finalize os detalhes da sua compra para garantir tudo está em ordem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
