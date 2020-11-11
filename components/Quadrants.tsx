// Interfaces
import ColorArray from '../interfaces/ColorArray';

const Quadrants = ({ colors }: { colors: ColorArray[] }) => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <div className="grid h-full grid-rows-4 row-auto">
      {colors.map(({ id, color, textColor }) => (
        <div key={id} style={{ backgroundColor: color }} className={quadStyle}>
          <h2
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            BAKLAVEGAN
            <br />
            baklavegan
            <br />
            {color.toLocaleUpperCase()}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Quadrants;
