import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormImage from "./FormImage";
import ListColors from "./ListColors";

const FormColors = () => {

  const [color, setColor] = useState(storedColors);




  return (
    <>
      <section className="flex gap-8">
        <div className="flex flex-col justify-center items-center bg-slate-100 p-3 rounded-md w-[100%] borde">
          <h2 className=" text-2xl font-semibold">Administrar colores</h2>

          <Form
            onSubmit
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
                defaultValue="#563d7c"
                title="Choose your color"
                className="h-[100px] w-[100px]"

              />
            </Form.Group>
            <Form.Group className="flex gap-5">
              <Form.Control
                type="text"
                className="w-[30vw] p-3 rounded-md"
                placeholder="Ingrese el color en ingles"
              />
            </Form.Group>

            <Button className=" bg-orange-600 p-3 rounded-md" type="submit">
              Seleccionar
            </Button>
          </Form>
        </div>

        <FormImage />
      </section>

      <div>
        <ListColors colors={color} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default FormColors;
