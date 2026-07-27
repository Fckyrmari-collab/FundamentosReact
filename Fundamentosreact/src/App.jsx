import { useState } from 'react'
import foto from './assets/imagen.jpg'
import header from "./components/header"
import perfil from "./components/perfil"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>ANALISIS Y DESARROLLO DE SOFTWARE</h1>
      <h2>TECNOLOGO</h2>
      <p>HOJA DE VIDA APRENDIZ</p>
      <img src={foto} alt="Foto de inicio" width="250"/>
      <h2>MARIA PAULA SOLANO COMBARIZA </h2>
      <h2>19</h2>
      <h2>BOGOTÁ DC</h2>
      <h2>dinosolispau679@gmail.com</h2>
      <h2>ADSO</h2>
     </div>
     <div>
      <h1>CURSOS REALIZADOS</h1>
      <h2>Tenico en Sistemas</h2>
      <h2>Desarollo de hadware</h2>
     </div>
     <div>
      <h1>OBJETIVO PROFESIONAL</h1>
      <h2> Deseo adquirir experiencia en el desarrollo de interfaces interactivas y mejorar mis habilidades como desarrollador de software.</h2>
      <h2>Por que deseas aprender react? - ¿En qué tipo de proyectos le gustaría utilizarlo? </h2>
      <h2>
        Deseo aprender React para desarrollar aplicaciones web modernas y mejorar mis habilidades como desarrollador. Me gustaría utilizar esta tecnología en proyectos como sistemas de gestión, plataformas de datos y otras aplicaciones que ofrezcan una buena experiencia al usuario.
      </h2>
     </div>
     <button>Conoce más sobre mí</button>
    </>
  )
}

export default App