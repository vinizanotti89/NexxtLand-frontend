"use client";
import { Fade } from "react-awesome-reveal";

export default function SectionWhyBuy() {
  return (
    <div className="grid grid-cols-12 gap-2 pb-10 md:pb-20 lg:mt-0 mt-2">
      <Fade duration={2000} className="col-span-12 md:col-span-4">
        <div>
          <a href="/terrenos" rel="noreferrer">
            <div
              className=" h-72 p-8 flex flex-col items-center justify-center group hover:-translate-y-2 transition duration-700 ease-in-out cursor-pointer"
              style={{ backgroundImage: `url(/img/banners/bg-why-buy-01.png` }}
            >
              <img
                src="/img/icons/icon-flag-why.png"
                alt="Icon não perca tempo"
                className="mb-4"
              />
              <p className="text-white text-center max-w-[60%] mb-4 font-light">
                Transforme suas aspirações em realidade através de investimentos
                imobiliários cuidadosamente analisados e recomendados por nossa
                equipe de especialistas.
              </p>
              <p className="text-center text-white text-3xl font-black">
                TERRENOS
              </p>
            </div>
          </a>
        </div>
      </Fade>
      <Fade duration={2000} className="col-span-12 md:col-span-4">
        <div>
          <a href="/terrenos" rel="noreferrer">
            <div
              className=" h-72 p-8 flex flex-col items-center justify-center group hover:-translate-y-2 transition duration-700 ease-in-out cursor-pointer"
              style={{ backgroundImage: `url(/img/banners/bg-why-buy-02.png` }}
            >
              <img
                src="/img/icons/icon-nexxland-why.png"
                alt="Icon saiba mais"
                className="mb-4"
              />
              <p className="text-white text-center max-w-[60%] mb-4 font-light">
                Descubra como nosso modelo de negócio inovador e transparente
                faz da NexxLand a sua parceira ideal para investimentos
                imobiliários nos EUA.
              </p>
              <p className="text-center text-white text-3xl font-black">
                POR QUE A <span translate="no">NEXXLAND</span>?
              </p>
            </div>
          </a>
        </div>
      </Fade>
      <Fade duration={2000} className="col-span-12 md:col-span-4">
        <div>
          <a href="/terrenos" rel="noreferrer">
            <div
              className=" h-72 p-8 flex flex-col items-center justify-center group hover:-translate-y-2 transition duration-700 ease-in-out cursor-pointer"
              style={{ backgroundImage: `url(/img/banners/bg-why-buy-03.png` }}
            >
              <img
                src="/img/icons/icon-flag-two-why.png"
                alt="Icon explore"
                className="mb-4"
              />
              <p className="text-white text-center max-w-[60%] mb-4 font-light">
                Explore as garantias que oferecemos para a solidez dos seus
                investimentos imobiliários.
              </p>
              <p className="text-center text-white text-3xl font-black">
                GARANTIAS
              </p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
}
