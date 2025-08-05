"use client";
import { Product } from "@/protocols";
import { api } from "@/services/axios";
import { Icon } from "@iconify/react";

export function WhatsappButton() {
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=14075805970`}
      target="_blank"
      className="fixed bottom-10 md:bottom-20 lg:right-20 right-5 z-50 cursor-pointer"
      rel="noreferrer"
    >
      <div className="col-span-12 md:col-span-4 flex justify-center">
        <div className="lg:hidden block">
          <Icon icon="logos:whatsapp-icon" fontSize={55} />
        </div>
        <div className="rounded-full hidden lg:block border-[4px] border-brand-yellow-50 w-[80px] h-[80px] relative">
          <img
            src="/img/images/imagem-avatar-nexxland.png"
            alt="avatar Nexxland"
            className="object-cover w-full h-full rounded-full"
          />

          <div className="absolute w-6 h-6 bg-green-500 rounded-full top-0 right-0 animate-pulse"></div>
        </div>
      </div>
    </a>
  );
}
