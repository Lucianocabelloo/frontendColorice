/* eslint-disable react/prop-types */
import Button from "react-bootstrap/esm/Button";

const ItemColors = () => {

  const AdminColor = null;
  const colorStyle = {
    backgroundColor: AdminColor,
    height: "150px",
    width: "100%",
  };
  console.log(index)



  return (
    <>
      <div className="flex flex-col w-[12%] justify-evenly items-center gap-2 border p-3 rounded-md bg-slate-200 m-3">
        <h2 className=" font-semibold text-lg" >Color:</h2>
        <div  style={colorStyle}></div>
        <Button>Eliminar</Button>
      </div>
    </>
  );
};

export default ItemColors;
