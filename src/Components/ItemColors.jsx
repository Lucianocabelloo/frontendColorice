/* eslint-disable react/prop-types */
import Button from "react-bootstrap/esm/Button";

const ItemColors = () => {

  const AdminColor = color;
  const colorStyle = {
    backgroundColor: AdminColor,
    height: "150px",
    width: "100%",
  };



  return (
    <>
      <div className="flex flex-col w-[12%] justify-evenly items-center gap-2 border p-3 rounded-md bg-slate-200 m-3">
        <h2 className=" font-semibold text-lg" >Color: {color}</h2>
        <div  style={colorStyle}></div>
        <Button onClick={() => handleDelete(index)} className="p-3 bg-red-600 rounded-md w-[100%]">Eliminar</Button>
      </div>
    </>
  );
};

export default ItemColors;
