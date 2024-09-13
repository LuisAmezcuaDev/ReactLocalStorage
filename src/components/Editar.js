import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const tituloComponente = 'Editar Pelicula'

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //conseguir el target del evento
        let target = e.target;

        //buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas()
        console.log(pelis_almacenadas);

        //buscamos el indice de un valor en especifico con la siguiente propiedad
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
        
        //creamos un objeto con ese indice y demas datos del formulario
        let peli_atualizada= {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        //actualizar ese elemento con ese indice

        pelis_almacenadas[indice] = peli_atualizada;

        //Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));
        //Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);

    }


  return (
    <div className='edit_form'>

        <h3 className='title'>
            {tituloComponente}
        </h3>

        <form onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type='text'
            name='titulo'
            className='titulo_editado'
            defaultValue={peli.titulo}/>

            <textarea 
            name='descripcion'
            defaultValue={peli.descripcion}
            className='descripcion_editada'
            />

            <input
            type='submit'
            className='editar'
            value='Actualizar'/>
        </form>
    </div>
  )
}
