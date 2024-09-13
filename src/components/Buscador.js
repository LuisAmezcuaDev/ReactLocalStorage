import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  //estado para busquedas
  const [busqueda, setBusqueda] = useState('');

  //estado de busquedas no encontradas
  const [noEncontrado, setNoEncontrado] = useState(false);


  const buscarPeli = (e) => {
    // crear un estado y actualizarlo

    setBusqueda(e.target.value); 
    
    //filtrar para buscar coincidencias

    let pelis_encontradas = listadoState.filter(peli => {

      //comprobamos si el elemento que estamos buscando incluye lo que estoy buscando, si lo incluye esa peli esta creada y mostrara un resultado
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    
    //si la busqueda es menor o igual a 1 y no hay coincidencias, entonces se mostrarán todas las peliculas
    if ((busqueda.length <= 1) || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false)
    }


    //Actualizar el estado del listado principal de lo que se ha logrado filtrar
    setListadoState(pelis_encontradas);


  }
  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda} </h3>

        {(noEncontrado == true && busqueda.length > 1) && (
          <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
        )}
        <form>

            <input 
              type="text" 
              id="search_field" 
              name='busqueda'
              autoComplete='off'
              value={busqueda}
              onChange={buscarPeli}
            />

            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
