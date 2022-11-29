

function Listado (colaboradores) {
    return( 
        <section className="listado">
            <h4><strong>Listado de colaboradores</strong></h4>
            { 
            colaboradores.colaboradores.length == 0 ? 
            <p>No existen colaboradores</p> : 
            colaboradores.colaboradores.map( (colaborador) =>  (
                <p key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</p>
            ))
                
          
            }

        
        </section>

    );
}

export default Listado;