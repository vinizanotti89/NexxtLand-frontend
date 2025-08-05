'use client'
import { Fade } from "react-awesome-reveal";

export default function SectionCertificates() {
  return (
    <div className="py-10 md:py-20">
      <div className="main_container">
        <div className="grid grid-cols-12 gap-2">
          <div className=" col-span-12 md:col-span-4">
            <Fade direction="up" duration={2000}>                
              <h2 className='text-4xl md:text-3xl lg:text-5xl font-black text-brand-black-50 mb-4 text-center md:text-start'>GARANTIAS</h2>
            </Fade>
            <p className="text-brand-black-50 text-center md:text-start">Queremos que você compre terrenos com confiança, por isso todas as nossas ofertas de terrenos vêm com garantia de 100% de satisfação, saiba mais.</p>
          </div>
          <div className=" col-span-12 md:col-span-8 flex items-center justify-center md:justify-end gap-3 flex-col md:flex-row">
            <img src="/img/logo/logo-selo-de-garantia-01.png" alt="100% de Garantia" className="w-16 md:w-20"/> 
            <img src="/img/logo/logo-selo-de-garantia-02.png" alt="Compra Segura"  className="h-16 md:h-20"/> 
            <img src="/img/logo/logo-selo-de-garantia-ssl-03.png" alt="Site Seguro" className="h-16 md:h-20" /> 
          </div>
        </div>
      </div>
    </div>
  )
}
