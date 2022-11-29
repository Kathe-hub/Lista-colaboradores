import { useState } from "react";


function Buscador ({inputFiltrar, filtrar}) {
    
    

    return(
        <header>
         <div className="row">
            <div className="col-8">
             <h1><strong>Buscador de Colaboradores</strong></h1>
            </div>

            <div className="col-4">
            <input onChange={inputFiltrar} type="search" name="buscador" id="buscador" placeholder="Busca un colaborador" />
            <button onClick={filtrar} className="btn btn-primary ps-3 ms-2">Buscar</button>
            </div>
        
        </div>
        </header>

    );
}

export default Buscador;