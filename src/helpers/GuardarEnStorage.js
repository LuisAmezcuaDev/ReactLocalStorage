
export const GuardarEnStorage = (clave, elemento) => {
       
    //consegiir los elementos que tenemos en el localStorage

    let elements = JSON.parse(localStorage.getItem(clave));

    console.log(elements);
    //comprobar si es un array

    if (Array.isArray(elements)) {
        //si lo que esta dentro del localStorage es un array entonces
        //Añadir dentro del array un elemento nuevo
        elements.push(elemento)
    }else{
        //si lo que esta en elements no es un array entonces
        //Crear un array con la nueva peli
        elements = [elemento];

    }
    //guardar en el local storage

    localStorage.setItem(clave, JSON.stringify(elements));

    //devolver el objeto guardado 

    return elemento;

}