// Interfaces
import ColorArray from '../interfaces/ColorArray';

const Quadrants = ({ colors }: { colors: ColorArray[] }) => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <div className="grid h-full grid-cols-2 col-auto grid-rows-2 row-auto">
      {colors.map(({ id, color, textColor }) => (
        <div key={id} style={{ backgroundColor: color }} className={quadStyle}>
          <h2
            style={{
              color: 'white',
              textAlign: 'center',
              backgroundColor: textColor,
            }}
          >
            BAKLAVEGAN
            <br />
            baklavegan
            <br />
            {color}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Quadrants;
