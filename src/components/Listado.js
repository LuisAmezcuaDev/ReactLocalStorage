import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {  

  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);

  //se va a ejecutar una vez cuando se cargue por primera vez el componente y mostrarlo por pantalla inmediatamente
  useEffect(() => {
    console.log('Componentes del listado de peliculas cargado');
    //mandamos llamar a la funcion que se encarga de mostrar las peliculas
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    //traemos los datos de la lista de pelis y los guardamos en una variable
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    //aqui simplemente guardamos lo que tenemos dentro de nuestra variable de peliculas dentro de nuestra variable de estado
    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas

    let pelisAlmacenadas = conseguirPeliculas();

    //filtrar las peliculas para eliminar del array la que no quiero
    let nuevoArrayPelis = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id))
    //actualizar estado del listado
    setListadoState(nuevoArrayPelis)

    //actualizar los datos en ell localSTorage
    localStorage.setItem('pelis', JSON.stringify(nuevoArrayPelis))
  }
  return (
    <>
        {listadoState != null ? listadoState.map(peli => {
          return (
            <article className="peli-item" key = {peli.id}>
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>
                <button className="edit" onClick={() => {setEditar(peli.id)}}>Editar</button>
                <button className="delete" onClick={ () => borrarPeli(peli.id)}> Borrar</button>

                {/* aparece el formulario de editar */}
                {editar === peli.id && (
                  
                  <Editar peli={peli}
                          conseguirPeliculas={conseguirPeliculas}
                          setEditar={setEditar}
                          setListadoState={setListadoState}/>
                )}
            </article>
          );
         })
        
        : <h2>No hay peliculas para mostrar</h2>
        
        }
    </>
  )
}
