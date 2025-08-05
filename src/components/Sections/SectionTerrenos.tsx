"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import { api } from "@/services/axios";
import Subheader from "../Header/Subheader";
import Icon from "../Adapters/Icon";
import Cookies from 'js-cookie'


type Region = {
  nome: string;
  id: string;
  sinopse: string;
  pdf: string;
  link_video: string;
};

type Category = {
  nome: string;
  id: string;
};

type Product = {
  id: string;
  imagemDestaque: { url: string };
  tituloTerreno: string;
  descricaoTerreno: string;
  tag: string;
  endereco: string;
  cidade: string;
  especificacoesDoTerreno: {
    id: number;
    tamanho: string;
    dimensoes: string;
    estradaDeAcesso: string;
    zoneamento: string;
    sugestaoDeUso: string;
    numeroDoPacoteAvaliador: string;
    valorEstimadoDasTaxasAnuais: number;
    descricaoLegal: string;
    informacoesAdicionais: string;
    video: {
      url: string;
      alt: string;
    };
    mapa: {
      latitude: number;
      longitude: number;
      zoom: number;
      alt: string;
    };
    preco: number;
    estado: string;
    cidade: string;
    area: number;
    tipo: string;
  };
};

export default function SectionTerrenos() {
  const [url, setUrl] = useState("/produtos");
  const [translatedText, setTranslatedText] = useState('Estoque');


  const { data: products, isLoading } = useSWR<Product[]>(
    url,
    async (url: string) => {
      const response = await api.get(url);
      return response.data.results.produtos;
    },
  );

  const [availableFilter, setAvailableFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [tags, setTags] = useState<Category[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [regionResponse, categoryResponse, tagResponse] =
          await Promise.all([
            api("/cidades"),
            api("/categorias"),
            api("/tags"),
          ]);
        setRegions(regionResponse.data.data.cidades);
        setCategories(categoryResponse.data.data.categorias);
        setTags(tagResponse.data.data.tags);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (regions.length > 0 && categories.length > 0) {
      setUrl(
        `/produtos?disponibilidade=${availableFilter}&search=${searchFilter}&categoria_id=${categoryFilter}&regiao=${regionFilter}`,
      );
    }
  }, [availableFilter, searchFilter, categoryFilter, regionFilter]);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);

    const currentLang = Cookies.get('googtrans');

    if (currentLang === '/auto/en') {
        setTranslatedText('Inventory');
    } else if (currentLang === '/auto/es') {
        setTranslatedText('Existencias');
    } else {
        setTranslatedText('Estoque');
    }
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <>
      <Subheader
        title="Terrenos"
        subTitle="Terrenos"
        image="/img/banners/b-1.jpg"
      />
      <div className="py-10 md:py-20">
        <div className="main_container">
          <div className="flex gap-2 md:justify-between mb-2 flex-col md:flex-row">
            <div className="flex gap-2 md:items-center flex-col md:flex-row">
              <select
                className="bg-zinc-100 p-1 px-2 rounded"
                onChange={(e) => setAvailableFilter(e.target.value)}
              >
                <option value="">Disponibilidade</option>
                {tags?.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.nome}
                  </option>
                ))}
              </select>

             {/*  <select
                className="bg-zinc-100 p-1 px-2 rounded"
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Categorias</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nome}
                  </option>
                ))}
              </select> */}

              <select
                className="bg-zinc-100 p-1 px-2 rounded"
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option value="">Regiões</option>
                {regions?.map((region) => (
                  <option key={region.id} value={region.nome}>
                    {region.nome}
                  </option>
                ))}
              </select>

              <p
                className="text-brand-yellow-50 text-sm cursor-pointer hover:brightness-150 transition-all font-bold flex items-center gap-1"
                onClick={() => {
                  setUrl("/produtos");
                }}
              >
                <Icon icon="tdesign:filter-clear" className="w-4 h-4" />
                Clear Filters
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-brand-yellow-50 text-sm font-bold">Search:</p>
              <input
                type="text"
                className="bg-zinc-100 p-1 px-2 rounded"
                placeholder="Search"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table-lote w-full">
              <thead>
                <tr className="bg-zinc-100 w-full">
                  <th className="text-black w-[200px]">Image</th>
                  <th className="text-black hidden lg:table-cell">
                    <div className="flex justify-center">Address</div>
                  </th>
                 {/*  <th className="text-black w-[200px]"><div className="flex justify-center">Title</div></th> */}
                  <th className="text-black w-[115px]">
                    <div className="flex justify-center" translate="no">{translatedText}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading &&
                  Array.from(Array(6).keys()).map((_, i) => (
                    <tr key={i}>
                      <td>
                        <div className="aspect-[4/3] bg-zinc-200 animate-pulse h-[110px]"></div>
                      </td>
                      <td>
                        <p className="bg-zinc-200 animate-pulse h-4 w-32 mb-2"></p>
                        <p className="bg-zinc-200 animate-pulse h-4 w-32 mb-2"></p>
                        {/*  <p className="bg-zinc-200 animate-pulse h-4 w-32 mb-2"></p>
                        <p className="bg-zinc-200 animate-pulse h-4 w-32 mb-2"></p>
                        <p className="bg-zinc-200 animate-pulse h-4 w-32 mb-2"></p> */}
                      </td>
                      <td>
                        <p className="bg-zinc-200 animate-pulse h-6 w-20"></p>
                      </td>
                      <td className="lg:block hidden">
                        <div className="px-5">
                          <p className="bg-zinc-200 animate-pulse h-6 w-[880px] mb-1"></p>
                          <p className="bg-zinc-200 animate-pulse h-6 w-[880px] mb-1"></p>
                          <p className="bg-zinc-200 animate-pulse h-6 w-[880px] mb-1"></p>
                          <p className="bg-zinc-200 animate-pulse h-6 w-[880px] mb-1"></p>
                        </div>
                      </td>
                    </tr>
                  ))}
                {products?.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center">
                      <p className="text-brand-yellow-50 text-sm font-bold">
                        No results found
                      </p>
                    </td>
                  </tr>
                )}
                {products?.map((product) => (
                  <tr key={product.id}>
                    <td className="lg:max-w-[10px] max-w-auto">
                      <Link href={`/terrenos/${product.id}`}>
                        <img
                          src={product.imagemDestaque.url}
                          className="w-[100px] max-w-[100px] md:max-w-[200px] lg:w-full h-32 object-cover"
                          alt="product"
                        />
                      </Link>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="px-5 text-center">
                        <p className="leading-7">
                          {product.endereco}, {product.especificacoesDoTerreno.cidade}
                        </p>
                      </div>
                    </td>
                    {/* <td>
                      <Link href={`/terrenos/${product.id}`}>
                        <p className="text-brand-yellow-50 text-xs md:text-sm cursor-pointer text-center hover:text-brand-black-50 transition-all font-bold">
                          {product.tituloTerreno}
                        </p>
                      </Link>
                    </td> */}
                    <td>
                      <div className="flex justify-center">
                        <p
                          className={`${
                            product.tag === "Disponível"
                              ? "text-green-500"
                              : product.tag === "Sob Contrato"
                                ? "text-yellow-500"
                                : "text-red-500"
                          } text-sm font-bold`}
                        >
                          {product.tag}
                        </p>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}