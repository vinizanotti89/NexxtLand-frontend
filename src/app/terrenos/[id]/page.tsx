import Subheader from "@/components/Header/Subheader";
import { Product } from "@/protocols";
import { api } from "@/services/axios";
import SwiperProductGallery from "@/components/Swipers/SwiperProductGallery";
import { Metadata } from "next";
import SwiperOthersLands from "@/components/Swipers/SwiperOthersLands";
import TitleDivider from "@/components/Partials/TitleDivider";
import CardPriceDetail from "@/components/Cards/CardPriceDetail";
import SectionHowToBuyDetail from "@/components/Sections/SectionHowToBuyDetail";
import TabProduct from "@/components/Partials/TabProduct";
import Icon from "@/components/Adapters/Icon";
import FAQComponent from "@/components/Partials/FAQComponent";

export const fetchCache = "force-no-store";

type LandPageProps = {
  params: {
    id: string;
    country: string;
    country_site: string;
    county_nome: string;
  };
};

const getData = async (id: string) => {
  const response = await api.get(`/produtos/${id}`);
  return response.data.results.produto as Product;
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getData(params.id);

  return {
    title: product.tituloTerreno,
    description: product.descricaoTerreno,
    openGraph: {
      images: [
        {
          url: product.imagemDestaque.url,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: LandPageProps) {
  const product = await getData(params.id);

  const descriptionParagrapths = product?.descricaoTerreno.split("\n");

  const price = Number(product?.preco);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const price3Installments = (price / 3).toFixed(2);
  const price5Installments = (price / 5).toFixed(2);

  const formattedPrice3Installments = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price3Installments as any);

  const formattedPrice5Installments = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price5Installments as any);

  console.log(product?.county_nome);

  return (
    <>
      <Subheader title="Terrenos" subTitle="Detalhe do Terreno" image="" />
      <div className="main_container">
        <p className="text-center font-bold text-2xl my-10">
          {product?.tituloTerreno}
        </p>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <SwiperProductGallery product={product} />
            {descriptionParagrapths?.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base mb-4 text-center md:text-start mt-6">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="col-span-12 md:col-span-1"></div>
          <div className="col-span-12 md:col-span-5">
            <p
              className={`${
                product.tag === "Disponível"
                  ? "bg-green-500 text-white p-2 w-fit"
                  : product.tag === "Reservado"
                    ? "bg-red-500 text-white p-2 w-fit"
                    : "bg-yellow-500 text-white p-2 w-fit"
              } text-sm font-bold`}
            >
              {product.tag}
            </p>
            <p className="mt-4 mb-4">
              Location:{" "}
              <span className="text-brand-yellow-50">
                {product.especificacoesDoTerreno.estado}
              </span>
              ,{" "}
              <span className="text-brand-yellow-50">
                {product.especificacoesDoTerreno.cidade}
              </span>
            </p>
            <TabProduct product={product} />
          </div>
          <TitleDivider title="Detalhes de compra e Preço" />

          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4 justify-center items-center mb-20">
              <div className="col-span-12 md:col-span-1"></div>
              <CardPriceDetail
                title='"À VISTA"'
                price={formattedPrice}
                link={product?.link_consultor}
                portion="1 Parcela"
              />
              <CardPriceDetail
                title='"PARCELADO"'
                price={formattedPrice3Installments}
                link={product?.link_consultor}
                portion="3 Parcelas"
              />
              <CardPriceDetail
                title='"PARCELADO"'
                price={formattedPrice5Installments}
                link={product?.link_consultor}
                portion="5 Parcelas"
              />
              <div className="col-span-12 md:col-span-1"></div>
            </div>
            <TitleDivider title="Como Comprar seu Terreno?" />
            <SectionHowToBuyDetail title={product?.tituloTerreno} />
            <TitleDivider title="Nossa garantia de 100% de satisfação" />
            <div>
              <p className="text-sm md:text-xl text-center">Se você decidir utilizar nosso parcelamento, e não puder continuar fazendo os pagamentos por qualquer motivo, informe-nos, e você não nos deverá mais nada. 
              </p>
              <p className=" text-xl text-center font-bold my-5">
              Caso você tenha pago pelo menos 50% do valor total da propriedade, lhe daremos um crédito de 50% do valor pago para uma compra futura no prazo de 6 meses contados a partir da data da informação da desistência.

              </p>
              <p className="text-sm md:text-xl text-center">
              Nós vamos retirar dessa seção na página de detalhes do terreno e colocar no FAQ como resposta para a pergunta:  &quot;Como funciona a garantia da Nexxland?&quot;
              </p>
            </div>
          </div>

          <div className="col-span-12">
            {(product?.especificacoesDoTerreno?.cidade === "Port Charlotte" ||
              product?.especificacoesDoTerreno?.cidade === "North Port") && (
              <TitleDivider title="Apresentação" />
            )}

            {(product?.especificacoesDoTerreno?.cidade === "Port Charlotte" ||
              product?.especificacoesDoTerreno?.cidade === "North Port") && (
              <iframe
                src="https://app.frame.io/presentations/15e678e2-6f87-4fa2-a32c-0f66446c9e6e"
                className="mt-8 w-full h-[60vh] md:h-[784px] overflow-y-hidden"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="col-span-12 md:col-span-12">
            <TitleDivider title="Especificações" />
            <div>
              <p className="text-center font-bold text-xl flex items-center">
                <Icon
                  icon="majesticons:map-marker"
                  fontSize={32}
                  className="mr-2"
                />{" "}
                {product?.endereco}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-1 px-2">
              {product?.especificacoesDoTerreno?.cidade && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Cidade</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.cidade}
                    </p>
                  </div>
                </div>
              )}

              {product?.county_nome && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Condado</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.county_nome}</p>
                  </div>
                </div>
              )}

              {product?.cep && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">CEP</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.cep}</p>
                  </div>
                </div>
              )}

              {product?.especificacoesDoTerreno?.dimensoes && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Dimensões</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.dimensoes}
                    </p>
                  </div>
                </div>
              )}

              {product?.especificacoesDoTerreno?.tamanho && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Tamanho</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.tamanho}
                    </p>
                  </div>
                </div>
              )}

              {product?.especificacoesDoTerreno?.estradaDeAcesso && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Estrada de Acesso</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.estradaDeAcesso}
                    </p>
                  </div>
                </div>
              )}

              {product?.parcel_id && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Parcel ID</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.parcel_id}</p>
                  </div>
                </div>
              )}

              {product?.especificacoesDoTerreno?.sugestaoDeUso && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Sugestão de uso</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.sugestaoDeUso}
                    </p>
                  </div>
                </div>
              )}

              {product?.tag && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Status</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.tag}</p>
                  </div>
                </div>
              )}

              {product?.classificacao_site && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">
                      Classificação para o site
                    </p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.classificacao_site}
                    </p>
                  </div>
                </div>
              )}

              {product?.agua && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Água</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.agua}</p>
                  </div>
                </div>
              )}

              {product?.esgoto && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Esgoto</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.esgoto}</p>
                  </div>
                </div>
              )}

              {product?.energia && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Energia</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.energia}</p>
                  </div>
                </div>
              )}

              {product?.county_site && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Site do Condado</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <a
                      href={product.county_site}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="font-semibold text-blue-500">
                        {product?.county_site}
                      </p>
                    </a>
                  </div>
                </div>
              )}
              {/* {product?.endereco && <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">
                      Endereço
                    </p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.endereco}
                    </p>
                  </div>
                </div>} */}
              {product?.especificacoesDoTerreno?.zoneamento && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Zoneamento</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.zoneamento}
                    </p>
                  </div>
                </div>
              )}

              {product?.especificacoesDoTerreno
                ?.valorEstimadoDasTaxasAnuais && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">
                      Valor estimado das taxas anuais
                    </p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {
                        product?.especificacoesDoTerreno
                          ?.valorEstimadoDasTaxasAnuais
                      }
                    </p>
                  </div>
                </div>
              )}

              {product?.especificacoesDoTerreno?.descricaoLegal && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Descrição legal</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">
                      {product?.especificacoesDoTerreno?.descricaoLegal}
                    </p>
                  </div>
                </div>
              )}

              {product?.hoa && (
                <div className="col-span-12 md:col-span-6 flex gap-1">
                  <div className="w-full md:w-[40%] bg-black flex items-center justify-center px-2 py-2">
                    <p className="text-center text-white">Hoa</p>
                  </div>
                  <div className="w-full md:w-[60%] bg-brand-yellow-100/20 px-2 flex items-center">
                    <p className="font-semibold">{product?.hoa}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 px-2">
              <p className="text-center">
                <span className="font-bold">Aviso Importante:</span>
              </p>
              <p className="text-center mb-2">
                As informações fornecidas são consideradas corretas e
                confiáveis, porém não podem ser garantidas pelo Vendedor.
                Algumas imagens podem mostrar a área próxima ao lote em questão,
                e podem apresentar para alguma não conformidade com a visualização atual.
              </p>
            </div>

            {product.link_mapa && <TitleDivider title="Mapa" />}

            {product.link_mapa && (
              <div>
                <div className="map-container">
                  <div
                    dangerouslySetInnerHTML={{ __html: product?.link_mapa }}
                  />
                </div>
              </div>
            )}

            {product?.especificacoesDoTerreno?.video.url && (
              <TitleDivider title="Vídeo" />
            )}
            {product?.especificacoesDoTerreno?.video.url && (
              <div className="flex justify-center">
                <video controls className="rounded-lg w-[600px]">
                  <source
                    src={product?.especificacoesDoTerreno?.video.url}
                    type="video/mp4"
                  />
                  <p>
                    Your browser doesn&apos;t support HTML video. Here is a
                    <a href={product?.especificacoesDoTerreno?.video.url}>
                      link to the video
                    </a>
                    instead.
                  </p>
                </video>
              </div>
            )}

            <TitleDivider title="Perguntas Frequentes" />
            <FAQComponent />

            <div className="hidden">
              <SwiperOthersLands />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
