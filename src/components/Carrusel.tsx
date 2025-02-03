import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation(): JSX.Element {
  return (
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
              onClick={() =>
                setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1)
              }
              className="text-white text-2xl bg-black/50 p-2 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1)
              }
              className="text-white text-2xl bg-black/50 p-2 rounded-full"
            >
              ›
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
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselCustomNavigation;
