import { useState } from "react";

interface Project {
  title: string;
  text: string;
  url: string;
  alt: string;
  image: string;
}

export function CarouselCustomNavigation(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const projects: Project[] = [
    
    {
      title: "Mapa Galáctico Star Wars",
      text: "Un detallado mapa galáctico interactivo que muestra los planetas más importantes del universo de Star Wars, sus características principales y las conexiones hiperespaciales entre ellos. Este mapa ofrece información detallada sobre cada mundo, incluyendo su ubicación dentro de la galaxia, su relevancia en la historia, facciones que lo controlan y su relación con otros planetas.",
      url: "https://juanmabott.github.io/Conquista/",
      alt: "Mapa Galáctico Star Wars - Proyecto Conquista",
      image: "./img/Conquista.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div 
        className="relative overflow-hidden npm, -xl h-96"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        {/* Slides Container */}
        <div className="flex h-full transition-transform duration-500 ease-in-out">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`min-w-full h-full relative transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback to Conquista image if TalentoTech image doesn't exist
                  (e.target as HTMLImageElement).src = "./img/Conquista.png";
                }}
              />
              
              {/* Project Title Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-white/10">
                <h3 className="text-white font-bold text-lg tracking-wide">{project.title}</h3>
              </div>

              {/* Overlay animado */}
              <div
                className={`absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white px-6 py-4 transition-all duration-500 ease-in-out ${
                  showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                <div className="flex flex-col justify-end h-full space-y-3">
                  <p className="text-sm leading-relaxed line-clamp-3">
                    {project.text}
                  </p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 underline decoration-blue-300 hover:decoration-blue-100 transition-colors duration-200 self-start font-semibold group"
                  >
                    Ver proyecto 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {projects.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 z-10 backdrop-blur-sm border border-white/10 shadow-lg"
              aria-label="Proyecto anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 z-10 backdrop-blur-sm border border-white/10 shadow-lg"
              aria-label="Proyecto siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Navigation */}
      {projects.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 hover:opacity-80 active:scale-95 ${
                currentSlide === index 
                  ? "bg-blue-400 w-8 shadow-lg shadow-blue-400/50" 
                  : "bg-gray-400 w-3 hover:bg-gray-300"
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CarouselCustomNavigation;
