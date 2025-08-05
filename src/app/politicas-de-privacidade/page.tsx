import Subheader from "@/components/Header/Subheader";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nexx Land | Políticas de Privacidade",
  description: "Políticas de Privacidade da Nexx Land",
};

export default async function Home() {
  return (
    <>
      <Subheader title="Políticas de Privacidade" subTitle="Políticas de Privacidade" image="/img/banners/banner-hero.png"/>
      <div className="main_container py-10">
        <p className="font-bold text-brand-yellow-50 text-center font-4xl">Em breve</p>
      </div>
    </>
  );
}
