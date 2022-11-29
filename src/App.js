import { useState } from "react";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");
  const [filtrado, setFiltrado] = useState("");

  const agregarNombreColaborador = (e) => {
    setNombreColaborador(e.target.value);
  };

  const agregarCorreoColaborador = (e) => {
    setCorreoColaborador(e.target.value);
  };

  const agregarColaborador = () => {
    const nuevoColaborador = {
      id: colaboradores.length + 1,
      nombre: nombreColaborador,
      correo: correoColaborador,
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const inputFiltrar = (e) => {
    setFiltrado(e.target.value);
  };

  const filtrar = (e) => {
    const filtrarLista = colaboradores.filter(
      (el) => el.nombre.toLowerCase() === filtrado.toLowerCase()
    );
    setColaboradores(filtrarLista);
  };

  return (
    <main className="container">
      <Buscador inputFiltrar={inputFiltrar} filtrar={filtrar} />
      <Formulario
        agregarNombreColaborador={agregarNombreColaborador}
        agregarCorreoColaborador={agregarCorreoColaborador}
        agregarColaborador={agregarColaborador}
      />
      <hr />
      <Listado colaboradores={colaboradores} />
    </main>
  );
}

export default App;
