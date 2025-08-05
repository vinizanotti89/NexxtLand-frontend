export type Product = {
  id: number;
  slug: string;
  tituloTerreno: string;
  descricaoTerreno: string;
  agua: string;
  energia: string;
  esgoto: string;
  cep: string;
  classificacao_site: string;
  hoa: string;
  county_nome: string;
  county_site: string;
  tag: "Disponível" | "Coming Soon" | "Reservado" | "Sold" | "In Contract" ;
  imagemDestaque: {
    url: string;
    alt: string;
  };
  galeriaDeImagens: {
    url: string;
    alt: string;
  }[];
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
  link_consultor: string;
  link_mapa: string;
  preco: string;
  desconto: string;
  pagamento_inicial: string;
  periodo_min_pagamento: string;
  periodo_max_pagamento: string;
  taxa: string;
  taxa_documento: string;
  parcel_id: string;
  endereco: string;
  taxa_transferencia: string;
  disponivel: boolean;
};

export type Region = {
  id: number;
  sinopse: string;
  nome: string;
  pdf: string;
  link_video: string;
};
