import Subheader from "@/components/Header/Subheader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexxLand | Como comprar?",
  description: "Saiba como comprar na NexxLand!",
};

export default async function Home() {
  return (
    <>
      <Subheader title="Como comprar?" subTitle="Como comprar?" image="/img/banners/banner-hero.png" />
      <div className="main_container py-10">
        <p className="font-bold p-16 text-center rounded font-4xl bg-brand-yellow-100/20">
        Comprar um terreno nos Estados Unidos com a NexxLand será uma experiência simples, segura e rentável. Explore nosso catálogo on-line para encontrar o terreno ideal para o seu perfil de investimento. Em seguida, nos envie o seu pedido que vamos entrar em contato para fecharmos a sua compra. Se surgir alguma dúvida, entre em contato conosco para obter mais detalhes e iniciar o processo de compra. Nossa equipe está pronta para auxiliar em todas as etapas, desde a escolha do lote, passando pela documentação, até o fechamento do negócio. Oferecemos suporte completo para garantir uma experiência de compra de uma maneira, fácil, tranquila e transparente.
        </p>
      </div>
    </>
  );
}
