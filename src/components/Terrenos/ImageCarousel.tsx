import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const validImages = images.filter(
    (img) => typeof img === "string" && img.trim() !== ""
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Estados para touch gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  // Distância mínima para considerar um swipe
  const minSwipeDistance = 50;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Funções para touch gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && validImages.length > 1) {
      nextImage();
    }
    if (isRightSwipe && validImages.length > 1) {
      prevImage();
    }
  };

  // Suporte a teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          closeFullscreen();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  if (validImages.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Nenhuma imagem disponível</p>
      </div>
    );
  }

  return (
    <>
      {/* Carrossel Principal */}
      <div className="relative w-full">
        {/* Imagem Principal */}
        <div 
          ref={carouselRef}
          className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center p-2"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={validImages[currentIndex]}
            alt={`${title} - Imagem ${currentIndex + 1}`}
            width={800}
            height={600}
            className="max-w-full max-h-full w-auto h-auto object-contain"
            sizes="(max-width: 480px) 180vw, (max-width: 640px) 180vw, (max-width: 768px) 180vw, (max-width: 960px) 180vw, (max-width: 1024px) 180vw, (max-width: 1200px) 180vw, (max-width: 1440px) 180vw, 180vw"
            priority={currentIndex === 0}
          />
          
          {/* Botão Maximizar */}
          <button
            onClick={openFullscreen}
            className="absolute top-2 right-2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Ver em tela cheia"
          >
            <Maximize2 size={14} className="sm:w-4 sm:h-4" />
          </button>

          {/* Navegação */}
          {validImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </>
          )}

          {/* Indicador de posição */}
          {validImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-xs sm:text-sm">
              {currentIndex + 1} / {validImages.length}
            </div>
          )}

        </div>

        {/* Miniaturas */}
        {validImages.length > 1 && (
          <div className="flex gap-1 sm:gap-1.5 md:gap-2 mt-3 sm:mt-4 overflow-x-auto pb-2">
            {validImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentIndex
                    ? 'border-blue-500'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Image
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal Fullscreen */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Fechar tela cheia"
          >
            <X size={24} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Image
              src={validImages[currentIndex]}
              alt={`${title} - Imagem ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {/* Navegação Fullscreen */}
            {validImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>

                {/* Indicador Fullscreen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-2 rounded text-sm sm:text-base">
                  {currentIndex + 1} / {validImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}