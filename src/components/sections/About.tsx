import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2>Sobre Mí</h2>
      <div className="about-text">
        <p>
          Soy desarrollador full stack y llegué a la programación por el lado menos obvio:
          modeando servidores de juegos. Lo que arrancó escribiendo scripts en Lua para
          cambiarle las reglas a un juego terminó en una carrera en la UTN y en construir
          aplicaciones web de verdad con TypeScript, React y NestJS.
        </p>
        <p>
          Hoy laburo en plataformas full stack sobre PostgreSQL y Docker —de un sistema de
          recursos para profesionales de salud mental a una app de reconocimientos entre
          equipos— y me sigue moviendo lo mismo de siempre: entender cómo funciona algo por
          dentro y construirlo bien. Me recibo a fines de 2026 y busco un equipo donde seguir
          creciendo.
        </p>
      </div>
    </section>
  );
};

export default About;
