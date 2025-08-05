"use client";
import { Fade } from "react-awesome-reveal";

export default function SectionGetToNow() {
  return (
    <div className="border-b border-brand-gray-50 pb-10 md:pb-20">
      <div className="main_container">
        <div className="flex flex-col justify-center items-center">
          <Fade direction="up" duration={2000}>
            <h2 className="text-4xl md:text-3xl max-w-[350px] lg:text-5xl text-brand-black-50 font-black mb-4 text-center">
              CONHEÇA A <span translate="no">NEXXLAND</span>
            </h2>
          </Fade>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-6">
              <img
                src="/img/images/img-conheca-a-nexxland.png"
                alt="Conheça a NexxLand"
              />
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center px-6">
              <Fade duration={2000}>
                <p className="text-center md:text-start text-xl md:text-2xl lg:text-4xl mb-6 text-brand-black-50 font-medium">
                  Sua plataforma de compra de terrenos nos EUA
                </p>
              </Fade>
              <p className="text-justify md:text-start montserrat-light">
                A{" "}
                <strong className="font-bold" translate="no">
                  NexxLand
                </strong>{" "}
                é a sua parceira de confiança para investimentos imobiliários
                nos EUA. Com um olhar visionário para oportunidades de
                valorização e construção, selecionamos cada propriedade com base
                em análises profundas de mercado, tendências demográficas
                infraestrutura, e muitos outros dados, traçando o cenário ideal
                para a valorização do seu investimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
