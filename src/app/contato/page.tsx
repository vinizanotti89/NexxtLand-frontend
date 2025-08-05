
import Subheader from "@/components/Header/Subheader";
import { Metadata } from "next";
import ContatoClient from "@/components/Forms/components/ContatoClient";
export const metadata: Metadata = {
  title: "NexxLand | Contato",
  description: "Entre em contato conosco ",
};

export default function ContatoPage() {
  return (
    <>
      <Subheader
        title="Contato"
        subTitle="Contato"
        image="/img/banners/banner-hero.png"
      />
      <ContatoClient />
    </>
  );
}