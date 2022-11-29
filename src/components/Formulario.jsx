import { useState} from 'react';


function Formulario ({agregarNombreColaborador, agregarCorreoColaborador, agregarColaborador}) 
{

    return(
        <section className='container'>
            <form className='form'>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label"><strong>Nombre del colaborador</strong></label>
                    <input onChange={agregarNombreColaborador} type="text" className="form-control" name="nombre" id="nombre" placeholder="Ingresa el nombre del colaborador" />
                </div>

                <div className="mb-3">
                    <label htmlFor="correo" className="form-label"><strong>Correo del colaborador</strong></label>
                    <input onChange={agregarCorreoColaborador} type="mail" className="form-control" name="correo" id="correo" placeholder="Ingresa el correo del colaborador" />
                </div>

                

            
            </form>

                <div className='mb-3'>
                    <button type="submit" className="btn btn-primary" onClick={agregarColaborador} /* disabled={nombreColaborador == '' || correoColaborador == '' ? true : false} */>Agregar colaborador</button>
                </div>






        </section>

    );
}

export default Formulario;