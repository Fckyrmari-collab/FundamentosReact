import { useState } from "react";
import foto from "./assets/imagen.jpg";
import Header from "./components/Header";
import DatosBasicos from "./components/Perfil";
import Cursos from "./components/Cursos";
import Piepagina from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor">
        <Header />
        <DatosBasicos />
        <Cursos />
        <Piepagina />
      </div>
    </>
  )
}

export default App;
