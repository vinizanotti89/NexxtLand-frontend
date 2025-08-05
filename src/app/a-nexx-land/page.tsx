import Subheader from "@/components/Header/Subheader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexxLand | A NexxLand",
  description: "Conheça a NexxLand! Saiba mais sobre a nossa empresa e como podemos te ajudar a encontrar o terreno ideal para você!",
};

export default async function Home() {
  return (
    <>
      <Subheader title="A NexxLand" subTitle="A NexxLand" image="/img/banners/banner-hero.png" />
      <div className="main_container py-10">
        <p className="font-bold p-16 text-center rounded font-4xl bg-brand-yellow-100/20">
          A <span translate="no">NexxLand</span> é pioneira no mercado imobiliário dos EUA, especializada nos
          investimento para brasileiros. Nossa missão é oferecer oportunidades de
          investimento acessíveis e seguras, ideal para quem busca solidez e retorno
          financeiro. Nosso compromisso é uma ponte segura com expertise e
          performance de mercado.</p>
      </div>
    </>
  );
}
