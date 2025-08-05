'use client'
import { Fade } from "react-awesome-reveal";
import FAQComponent from "../Partials/FAQComponent";

export default function SectionFAQ() {
    return (
        <div className="py-10 md:py-20 bg-white border-b border-brand-black/20">
            <div className="main_container">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 md:col-span-12 lg:col-span-2 flex flex-col justify-center">
                        <Fade direction="up" duration={2000}>                
                            <h2 className='text-4xl md:text-3xl lg:text-5xl text-black font-black mb-4 text-center lg:text-start'>FAQ</h2>
                        </Fade>
                        <p className="text-black text-center lg:text-start mb-6 lg:mb-0">Bem-vindo à nossa seção de Perguntas Frequentes (FAQ)! Aqui você encontrará respostas para as dúvidas mais comuns que nossos clientes têm sobre nossa plataforma de marketplace.</p>
                    </div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-2"></div>
                    <div className="col-span-12 md:col-span-12 lg:col-span-8">
                        <FAQComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}
