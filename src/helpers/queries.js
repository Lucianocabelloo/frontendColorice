const URL_API = import.meta.env.VITE_URL_API

export const listarColoresAPI = async ()=>{
    try {
        const respuesta = await fetch(URL_API);
        return respuesta;
    } catch (error) {
        console.log("Ha habido un error al listar colores", error);
    }
}

export const listarColorAPI = async (id) =>{
try {
    const respuesta = await fetch((`${URI_Producto}/${id}`))
    return respuesta
} catch (error) {
    console.error("Ha habido un error al listar color", error)
}
}

export const crearColorAPI =  async (colorNuevo)=>{
    try {
        const respuesta = await fetch(URL_API,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(colorNuevo)
        })
        return respuesta
    } catch (error) {
        console.error("Ha habido un error al crear color", error)
    }

}

export const editarColorAPI= async (colorNuevo, id) =>{
    try {
        const respuesta = await fetch(`${URL_API}/${id}`, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(colorNuevo)
        })
        return respuesta
    } catch (error) {
        console.error("Ha habido un error al editar el color", error)
    }
}

export const eliminarColorAPI = async (id) =>{
    try {
        const respuesta = await fetch(`${URL_API}/${id}`, {
          method: "DELETE",
        });
        return respuesta;
      } catch (error) {
        console.log(error);
      }
}