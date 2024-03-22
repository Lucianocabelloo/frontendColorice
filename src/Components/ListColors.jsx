import ItemColors from './ItemColors';

const ListColors = ({ colors }) => {
  return (
    <div className='w-[100%] h-[100%] bg-red-500 estilo borde'>
      {colors.map((color, index) => (
        <ItemColors key={index} color={color} index={index}/>
      ))}
    </div>
  );
};

export default ListColors;
