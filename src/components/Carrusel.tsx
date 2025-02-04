import { useState } from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation(): JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slideData = [
    { text: "Mapa informativo intergalactico de Star Wars con informacion de los planetas y relaciones entre ellos", url: "https://juanmabott.github.io/Conquista/" },
    { text: "Información del slide 2", url: "https://example.com/2" },
    { text: "Información del slide 3", url: "https://example.com/3" }
  ];

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
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={() => {
                  const newIndex = activeIndex === 0 ? length - 1 : activeIndex - 1;
                  setActiveIndex(newIndex);
                  setActiveSlide(newIndex);
                }}
                className="text-white text-2xl bg-black/50 p-2 rounded-full"
              >
                ❮
              </button>
              <button
                onClick={() => {
                  const newIndex = activeIndex === length - 1 ? 0 : activeIndex + 1;
                  setActiveIndex(newIndex);
                  setActiveSlide(newIndex);
                }}
                className="text-white text-2xl bg-black/50 p-2 rounded-full"
              >
                ❯
              </button>
            </div>
            {/* Indicadores (dots) en la parte inferior */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    setActiveSlide(i);
                  }}
                />
              ))}
            </div>
          </>
        )}
      >
        <img
          key="slide-1"
          src="./img/Conquista.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          key="slide-2"
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          key="slide-3"
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      {/* Overlay animado */}
      <div
        className={`absolute left-0 right-0 bottom-0 h-1/4 bg-black/70 text-white text-center px-4 py-2 transition-all duration-500 ${
          showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <a href={slideData[activeSlide].url} target="_blank" rel="noreferrer" className="underline">
          {slideData[activeSlide].text}
        </a>
      </div>
    </div>
  );
}

export default CarouselCustomNavigation;
