import { useState } from "react";

export function CarouselCustomNavigation(): JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false);

  const projectData = { 
    text: "Un detallado mapa galáctico interactivo que muestra los planetas más importantes del universo de Star Wars, sus características principales y las conexiones hiperespaciales entre ellos. Este mapa ofrece información detallada sobre cada mundo, incluyendo su ubicación dentro de la galaxia, su relevancia en la historia, facciones que lo controlan y su relación con otros planetas.", 
    url: "https://juanmabott.github.io/Conquista/",
    alt: "Mapa Galáctico Star Wars - Proyecto Conquista"
  };

  // Proyectos futuros comentados hasta tener contenido real
  // const slideData = [
  //   projectData,
  //   { 
  //     text: "Información del slide 2", 
  //     url: "https://example.com/2",
  //     alt: "Proyecto 2"
  //   },
  //   { 
  //     text: "Información del slide 3", 
  //     url: "https://example.com/3",
  //     alt: "Proyecto 3"
  //   }
  // ];

  return (
    <div 
      className="relative overflow-hidden rounded-xl h-96"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img
        src="./img/Conquista.png"
        alt={projectData.alt}
        className="h-full w-full object-cover"
      />
      
      {/* Overlay animado */}
      <div
        className={`absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent text-white px-6 py-4 transition-all duration-500 ease-in-out ${
          showOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col justify-end h-full">
          <p className="text-sm mb-2 line-clamp-4">
            {projectData.text}
          </p>
          <a 
            href={projectData.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-blue-100 underline decoration-blue-300 hover:decoration-blue-100 transition-colors duration-200 self-start cursor-pointer z-20"
          >
            Ver proyecto →
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselCustomNavigation;
