import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';
//creamos una constante la cual se va a encargar de crear los datos del formulario

export const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: '',
    });

    //esta parte funciona para desesctructurar lo que se tiene en el objeto JSON de pelistate
    const {titulo, descripcion} = peliState;

    //creamos una constante que se va a encargar de traer los datos del formulario
    const conseguirDatosForm = e =>{
        //evita recargar la pantalla para evitar el corte de los datos
        e.preventDefault();

        //conseguir datos del formulario

        let target = e.target; //consigue todo el evento para poder traer los datos del form
        let titulo = target.titulo.value; //extrae los datos del campo por medio del name de los campos
        let descripcion = target.descripcion.value;

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //guardar estado para reflejar el cambio del estado del usuario 
        setPeliState(peli);

        //Actualizar el estado del listado principal.

        setListadoState(elementos => {
            //lo que se realiza es que se traera el estado de los elementos que se tienen dentro del estado
            // mas el elemento de peli
            return[...elementos, peli]
        });

        //guardar en el almacenamiento local
        GuardarEnStorage('pelis', peli);
    }


  return (
    <div className="add">
        <h3 className="title"> {tituloComponente} </h3>

        <strong>
            {(titulo && descripcion) && 'Haz creado la pelicula: ' + titulo}
        </strong>

            <form onSubmit={conseguirDatosForm}>

                <input type="text" 
                    id="titulo" 
                    placeholder="Titulo" 
                    name ="titulo"
                />

                <textarea 
                    id="description" 
                    placeholder="Descripción"
                    name='descripcion'>
                </textarea>

                <input type="submit" 
                       id="save" 
                       value="Guardar" 
                />

            </form>
    </div>
  )

}
