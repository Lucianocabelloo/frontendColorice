import ItemColors from './ItemColors';

const ListColors = ({colors, setColors}) => {
  return (
    <div className='w-[100%] h-[100%] bg-red-500 estilo borde'>
      {colors.map(colors => {
        return(
          <ItemColors key={colors.id} colors={colors} setColors={setColors} />
        )
      })}
    </div>
  );
};

export default ListColors;
