// Components
import Layout from './Layout';
import NavLinks from './NavLinks';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

const Quadrants = ({ colors }: { colors: ColorArray[] }) => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <Layout cName="container mx-auto">
      <NavLinks />
      <div className="grid h-full grid-rows-4 row-auto">
        {colors.map(({ id, color, textColor }) => (
          <div
            key={id}
            style={{ backgroundColor: color }}
            className={quadStyle}
          >
            <h2
              style={{
                color: textColor,
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
    </Layout>
  );
};

export default Quadrants;
