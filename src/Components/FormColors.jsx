import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormImage from "./FormImage";
import ListColors from "./ListColors";
import { useForm } from "react-hook-form";
import { crearColorAPI, listarColoresAPI } from "../helpers/queries";

const FormColors = () => {
  const [selectedColor, setSelectedColor] = useState("#563d7c");
  const [colors, setColors] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
    reset
  } = useForm();

  const onSubmit = async (colorData) => {
    const respuesta = await crearColorAPI(colorData)
    if (respuesta.status === 201) {
      console.info(`El color ha sido creado con exito`)
      obtenerTareas()
      reset()
    } else {
      console.error("Ha ocurrido un error")
    }
  };


  const obtenerTareas = async () =>{
    const respuesta = await listarColoresAPI()
    if (respuesta.status === 200){
      const data = await respuesta.json()
      setColors(data)
    } else {
      console.error("Ha habido un error al obtener las tareas")
    }
  }

  const handleColorChange = (event) => {
    const { value } = event.target;
    setSelectedColor(value); // Actualizar el estado con el nuevo color seleccionado
    setValue("colorInput", value); // Establecer el valor del input de texto con el color seleccionado
  };

  return (
    <>
      <section className="flex gap-8">
        <div className="flex flex-col justify-center items-center bg-slate-100 p-3 rounded-md w-[100%] border">
          <h2 className="text-2xl font-semibold">Administrar colores</h2>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-5 items-center w-[100%] justify-evenly"
          >
            <Form.Group className="mb-3 flex flex-col">
              <Form.Label
                className="text-center font-semibold text-lg"
                htmlFor="exampleColorInput"
              >
                Color picker
              </Form.Label>
              <Form.Control
                type="color"
                id="exampleColorInput"
                value={selectedColor} 
                title="Choose your color"
                className="h-[100px] w-[100px]"
                onChange={handleColorChange}
                
              />
            </Form.Group>
            <Form.Group className="flex gap-5">
              <Form.Control
                type="text"
                className="w-[30vw] p-3 rounded-md"
                placeholder="Ingrese el color en ingles"
                {...register("colorInput", {
                  required: false,
                  minLength: 2,
                  maxLength: 20,
                })}
              />
            </Form.Group>

            <Button className="bg-orange-600 p-3 rounded-md" type="submit">
              Seleccionar
            </Button>
          </Form>
        </div>

        <FormImage />
      </section>

      <div>
        <ListColors />
      </div>
    </>
  );
};

export default FormColors;
