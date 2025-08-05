import Subheader from "@/components/Header/Subheader";
import FAQComponent from "@/components/Partials/FAQComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexxLand | FAQ",
  description:
    "Perguntas Frequentes sobre a NexxLand. Tire suas dúvidas sobre nossos terrenos e como adquiri-los.",
};

export default async function Home() {
  return (
    <>
      <Subheader
        title="Perguntas Frequentes"
        subTitle="Perguntas Frequentes"
        image="/img/banners/banner-hero.png"
      />
      <div className="py-10 md:py-20">
        <div className="main_container">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-12 lg:col-span-2 flex flex-col pt-10">
              <h2 className="text-4xl md:text-3xl lg:text-5xl text-brand-black-50 font-black mb-4 text-center lg:text-start">
                FAQ
              </h2>
              <p className="text-brand-black-50 text-center lg:text-start mb-6 lg:mb-0">
                Bem-vindo à nossa seção de Perguntas Frequentes (FAQ)! Aqui você
                encontrará respostas para as dúvidas mais comuns que nossos
                clientes têm sobre nossa plataforma de negócios imobiliários nos
                EUA.
              </p>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-10">
              <FAQComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
