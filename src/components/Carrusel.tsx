import { useState, useCallback } from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation(): JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slideData = [
    { 
      text: "Un detallado mapa galáctico interactivo que muestra los planetas más importantes del universo de Star Wars, sus características principales y las conexiones hiperespaciales entre ellos. Este mapa ofrece información detallada sobre cada mundo, incluyendo su ubicación dentro de la galaxia, su relevancia en la historia, facciones que lo controlan y su relación con otros planetas.", 
      url: "https://juanmabott.github.io/Conquista/",
      alt: "Mapa Galáctico Star Wars - Proyecto Conquista"
    },
    { 
      text: "Información del slide 2", 
      url: "https://example.com/2",
      alt: "Proyecto 2"
    },
    { 
      text: "Información del slide 3", 
      url: "https://example.com/3",
      alt: "Proyecto 3"
    }
  ];

  const handleSlideChange = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Carousel
        className="rounded-xl h-96"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        navigation={(
          { setActiveIndex, activeIndex, length }: { 
            setActiveIndex: (index: number) => void; 
            activeIndex: number; 
            length: number; 
          }
        ) => (
          <>
            {/* Flechas laterales */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-10">
              <button
                onClick={() => {
                  const newIndex = activeIndex === 0 ? length - 1 : activeIndex - 1;
                  setActiveIndex(newIndex);
                  handleSlideChange(newIndex);
                }}
                className="text-white text-2xl bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-200"
                aria-label="Slide anterior"
              >
                ❮
              </button>
              <button
                onClick={() => {
                  const newIndex = activeIndex === length - 1 ? 0 : activeIndex + 1;
                  setActiveIndex(newIndex);
                  handleSlideChange(newIndex);
                }}
                className="text-white text-2xl bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors duration-200"
                aria-label="Siguiente slide"
              >
                ❯
              </button>
            </div>
            {/* Indicadores (dots) en la parte inferior */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {new Array(length).fill("").map((_, i) => (
                <button
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    handleSlideChange(i);
                  }}
                  aria-label={`Ir al slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      >
        <img
          key="slide-1"
          src="./img/Conquista.png"
          alt={slideData[0].alt}
          className="h-full w-full object-cover"
        />
        <img
          key="slide-2"
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt={slideData[1].alt}
          className="h-full w-full object-cover"
        />
        <img
          key="slide-3"
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt={slideData[2].alt}
          className="h-full w-full object-cover"
        />
      </Carousel>
      {/* Overlay animado */}
      <div
        className={`absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent text-white px-6 py-4 transition-all duration-500 ease-in-out ${
          showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col justify-end h-full">
          <p className="text-sm mb-2 line-clamp-4">
            {slideData[activeSlide].text}
          </p>
          <a 
            href={slideData[activeSlide].url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-blue-100 underline decoration-blue-300 hover:decoration-blue-100 transition-colors duration-200 self-start"
          >
            Ver proyecto →
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselCustomNavigation;
