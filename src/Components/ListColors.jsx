import ItemColors from './ItemColors';

const ListColors = ({ colors, handleDelete }) => {
  return (
    <div className='w-[100%] h-[100%] bg-red-500 estilo borde'>
      {colors.map((color, index) => (
        <ItemColors key={index} color={color} index={index} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListColors;
