import Button from "react-bootstrap/esm/Button";
import { eliminarColorAPI, listarColoresAPI } from "../helpers/queries";

const ItemColors = ({ colors, setColors, setEditar, setId, setValue }) => {
  const AdminColor = colors.colorInput;
  const colorStyle = {
    backgroundColor: AdminColor,
    height: "150px",
    width: "100%",
  };

  const borrarColor = async () => {
    const respuesta = await eliminarColorAPI(colors.id);
    if (respuesta.status === 200) {
      console.info("Se ha eliminado el color correctamente");
      const obtenerColores = await listarColoresAPI();
      if (obtenerColores.status === 200) {
        const coloresRestantes = await obtenerColores.json();
        setColors(coloresRestantes);
      } else {
        console.error("No se pudieron obtener los colores después de eliminar el color");
      }
    } else {
      console.error("No se pudo eliminar el color");
    }
  };

  const editarColor = () => {
    setEditar(true);
    setId(colors.id);
    setValue("colorInput", colors.colorInput); // Ajusta el nombre del input si es necesario
  };

  return (
    <>
      <div className="flex flex-col w-[12%] justify-evenly items-center gap-2 border p-3 rounded-md bg-slate-200 m-3">
        <h2 className="font-semibold text-lg">Color: {colors.colorInput}</h2>
        <div style={colorStyle}></div>
        <Button onClick={borrarColor}>Eliminar</Button>
        <Button onClick={editarColor}>Editar</Button>
      </div>
    </>
  );
};

export default ItemColors;
