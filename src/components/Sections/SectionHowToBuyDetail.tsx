import React from 'react'

export default function SectionHowToBuyDetail({title}: {title: string}) {
  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className='col-span-12 md:col-span-4'>
        <div className='h-72 p-8 flex flex-col items-center justify-center'>
          <img src="/img/icons/icon-step-01.png" alt="Passo 1" className='mb-4 h-14' />
          <div className='flex gap-2 justify-center items-center flex-col md:flex-row mb-4 max-w-[100%] lg:max-w-[70%]'>
            <p className='font-bold text-brand-black-50 text-6xl'>1º</p>
            <p className='font-bold text-brand-black-50 text-xl lg:text-2xl text-center md:text-start'>ESCOLHA SEU TERRENO</p>
          </div>
          <p className='text-center md:text-start max-w-[100%] lg:max-w-[70%] mb-4 text-brand-black-50'>A <strong className='font-bold'>escolha do seu imóvel</strong> é a etapa mais importante do processo de compra.</p>
        </div>
      </div>
      <div className='col-span-12 md:col-span-4'>
        <div className='h-72 p-8 flex flex-col items-center justify-center'>
          <img src="/img/icons/icon-step-02.png" alt="Passo 2" className='mb-4 h-14' />
          <div className='flex gap-2 justify-center items-center flex-col md:flex-row mb-4 max-w-[100%] lg:max-w-[70%]'>
            <p className='font-bold text-brand-black-50 text-6xl'>2º</p>
            <p className='font-bold text-brand-black-50 text-xl lg:text-2xl text-center md:text-start'>COMPRE SEU TERRENO</p>
          </div>
          <p className='text-center md:text-start max-w-[100%] lg:max-w-[70%] mb-4 text-brand-black-50'>Ao decidir, pressione o botão &apos;Comprar agora&apos; e você será redirecionado para o formulário de compra.</p>
        </div>
      </div>
      <div className='col-span-12 md:col-span-4'>
        <div className='h-72 p-8 flex flex-col items-center justify-center'>
          <img src="/img/icons/icon-step-03.png" alt="Passo 3" className='mb-4 h-14' />
          <div className='flex gap-2 justify-center items-center flex-col md:flex-row mb-4 max-w-[100%] lg:max-w-[70%]'>
            <p className='font-bold text-brand-black-50 text-6xl'>3º</p>
            <p className='font-bold text-brand-black-50 text-xl lg:text-2xl text-center md:text-start'>CONFIRMAÇÃO E DOCUMENTAÇÃO</p>
          </div>
          <p className='text-center md:text-start max-w-[100%] lg:max-w-[70%] mb-4'>Revise e finalize os detalhes da sua compra para garantir tudo está em ordem.</p>
        </div>
      </div>
      <div className="col-span-12 justify-center items-center mt-10 flex flex-col">
        <p className='font-bold text-xl text-brand-black-50 mb-4'>Formas de Pagamento</p>
        <div className='flex gap-4 justify-center items-center'>
            <a
                 href={`https://wa.me/14075805970?text=Olá%20Atendimento!%20Estou%20no%20Brasil.%20Gostaria%20de%20saber%20mais%20sobre:%20${title}`}
                target="_blank"
                className="flex flex-col items-center w-fit justify-center gap-2 p-4 font-bold border border-brand-yellow-50 hover:border-black hover:bg-white  text-white hover:text-brand-black-50 bg-brand-yellow-50 transition duration-700 ease-in-out"
                rel="noreferrer"
            >
              <p className='text-xl'>Estou no BRASIL</p>
              <p className='text-center text-sm md:text-base'>Necessário utilizar rede de cambio para efetuar o pagamento</p>
                
            </a>
            <a
                 href={`https://wa.me/14075805970?text=Olá%20Atendimento!%20Estou%20nos%20EUA.%20Gostaria%20de%20saber%20mais%20sobre:%20${title}`}
                target="_blank"
                className="flex flex-col items-center w-fit justify-center gap-2 p-4 font-bold border border-brand-yellow-50 hover:border-black hover:bg-white  text-white hover:text-brand-black-50 bg-brand-yellow-50 transition duration-700 ease-in-out"
                rel="noreferrer"
            >
                 <p className='text-xl'>Estou nos EUA</p>
                 <p className='text-center text-sm md:text-base'>Necessário utilizar rede de cambio para efetuar o pagamento</p>
            </a>
        </div>
      </div>
  </div>
  )
}
