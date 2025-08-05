import { Product } from "@/protocols";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative col-span-12 sm:col-span-6 lg:col-span-4 overflow-hidden bg-gradient-to-br from-black to-brand-yellow-900">
      <Link href={`/terrenos/${product.id}`} className="group overflow-hidden">
        <div
          className="aspect-[40/30] overflow-hidden bg-cover flex justify-end items-end bg-center bg-no-repeat w-full scale-105 hover:scale-110 transition-all"
          style={{
            backgroundImage: `url(${product.imagemDestaque.url})`,
          }}
        >
          <p
            className={`mr-6 mb-4 
            ${
              product.tag === "In Contract"
                ? "bg-orange-500"
                : product.tag === "Sold"
                  ? "bg-red-500"
                  : product.tag === "Coming Soon"
                    ? "bg-yellow-500"
                    : ""
            } text-white p-2 w-fit text-sm font-bold`}
          >
            {product.tag === "In Contract"
              ? "In Contract"
              : product.tag === "Sold"
                ? "Sold"
                : product.tag === "Coming Soon"
                  ? "Coming Soon"
                  : ""}
          </p>
        </div>
        <div className="flex justify-center items-end bg-black">
          <div className="px-2 py-6 relative z-20">
            <div className="h-10">
              <h3 className="line-clamp-2 drop-shadow-lg text-center mb-2 text-shadow text-base text-white uppercase font-bold">
                {product.tituloTerreno}/FL
              </h3>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-5">
              {product?.especificacoesDoTerreno?.tamanho && (
                <div className="col-span-4 sm:col-span-4 flex flex-col justify-center items-center">
                  <img src="/img/icons/icon-size.png" alt="Icone" className="w-12" />
                  <p className="text-white text-sm font-medium block lg:hidden">
                    Tamanho
                  </p>
                  <p className="text-white text-[10px] text-center font-light h-12">
                    {product?.especificacoesDoTerreno?.tamanho}
                  </p>
                </div>
              )}
              {product?.especificacoesDoTerreno?.dimensoes && (
                <div className="col-span-4 sm:col-span-4 flex flex-col justify-center items-center">
                  <img src="/img/icons/icon-dimensions.png" alt="Icone" className="w-12" />
                  <p className="text-white text-sm font-medium block lg:hidden">
                    Dimensões
                  </p>
                  <p className="text-white text-[10px] text-center font-light h-12">
                    {product?.especificacoesDoTerreno?.dimensoes}
                  </p>
                </div>
              )}
              {product?.especificacoesDoTerreno?.cidade && (
                <div className="col-span-4 sm:col-span-4 flex flex-col justify-center items-center">
                  <img src="/img/icons/icon-location.png" alt="Icone" className="w-12" />
                  <p className="text-white text-sm font-medium block lg:hidden">
                    Localização
                  </p>
                  <p className="text-white text-[10px] text-center font-light h-12 break-all">
                    {product?.especificacoesDoTerreno?.cidade}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <span className="absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-black to-black/0 rounded-md"></span>
      </Link>
    </div>
  );
}
