'use client';

import LoteCard, { Lote } from './LoteCard';

//ADICIONAR LOTES
const LOTES_DATA: Lote[] = [
  {
    id: '1',
    title: 'Lote 1',
    address: 'Terrel Terrace, 8109',
    images: [
      '/img/terrenos/_8109-N-Terrel-Terrace/00_CAPA_/89.jpeg',
      '/img/terrenos/_8109-N-Terrel-Terrace/01_SATELITE_/90.jpeg',
      '/img/terrenos/_8109-N-Terrel-Terrace/02_FOTOS_REAIS_/IMG_2256.jpeg',
      '/img/terrenos/_8109-N-Terrel-Terrace/02_FOTOS_REAIS_/IMG_2257.jpeg',
      '/img/terrenos/_8109-N-Terrel-Terrace/02_FOTOS_REAIS_/IMG_2258.jpeg',
      '/img/terrenos/_8109-N-Terrel-Terrace/02_FOTOS_REAIS_/IMG_2259.jpeg',
    ],
    slug: 'lote1',
  },
  {
    id: '2',
    title: 'Lote 2',
    address: 'Malibu Rd, 8600 ',
    images: [
      '/img/terrenos/_8600-N-Malibu-Rd/02_FOTOS_REAIS_/IMG_2206.jpeg', 
      '/img/terrenos/_8600-N-Malibu-Rd/02_FOTOS_REAIS_/IMG_2207.jpeg',
      '/img/terrenos/_8600-N-Malibu-Rd/02_FOTOS_REAIS_/IMG_2208.jpeg',
      '/img/terrenos/_8600-N-Malibu-Rd/02_FOTOS_REAIS_/IMG_2217.jpeg',
      '/img/terrenos/_8600-N-Malibu-Rd/02_FOTOS_REAIS_/IMG_2218.jpeg',
    ],
    slug: 'terreno-residencial-centro',
  },
];

export default function SectionTerrenos() {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Terrenos Disponíveis
          </h1>
          <p className="text-gray-600">
            Explore nossa seleção de terrenos disponíveis.
          </p>
        </div>

        {/* Grid de Lotes */}
        {LOTES_DATA.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LOTES_DATA.map((lote) => (
              <LoteCard key={lote.id} lote={lote} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum lote encontrado
            </h3>
            <p className="text-gray-600">
              No momento não há terrenos cadastrados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
