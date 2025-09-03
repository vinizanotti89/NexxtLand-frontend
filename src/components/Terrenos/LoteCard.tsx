'use client';

import Link from 'next/link';
import ImageCarousel from './ImageCarousel';

export interface Lote {
  id: string;
  title: string;
  address: string;
  images: string[];
  slug?: string;
}

interface LoteCardProps {
  lote: Lote;
}

export default function LoteCard({ lote }: LoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Carrossel de Imagens */}
      <div className="p-4">
        <ImageCarousel images={lote.images} title={lote.title} />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 pt-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {lote.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm">
          {lote.address}
        </p>

        
      </div>
    </div>
  );
}