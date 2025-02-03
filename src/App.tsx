import './App.css'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Carrusel from './components/Carrusel'

function App() {
  return (
    <>
      <div className="background-container">
        <div className="grid-pattern"></div>
        <div className="radial-gradient"></div>
      </div>
      <div className="portfolio">
        <header className="header">
          <div className="profile-image">
            <img src="/img/pfp.jpg" alt="Foto de perfil" />
          </div>
          <h1>Juan Manuel</h1>
          <p>Desarrollador</p>
        </header>

        <section className="about">
          <h2>Sobre Mí</h2>
          <p>Soy un desarrollador apasionado por crear soluciones web innovadoras y efectivas.</p>
        </section>

        <section className="projects">
          <h2>Mis Proyectos</h2>
          <Carrusel />
        </section>

        <Skills />

        <Contact />
      </div>
    </>
  )
}

export default App
