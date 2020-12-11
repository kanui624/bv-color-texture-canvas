// Components
import Layout from './Layout';
import NavLinks from './NavLinks';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS
import quadStyles from '../styles/quad.module.css';

const Quadrants = ({ colors }: { colors: ColorArray[] }) => {
  const quadStyle = 'flex justify-center items-center';
  const companyName = 'baklavegan';
  return (
    <Layout cName="container mx-auto">
      <NavLinks />
      <div className="grid h-full grid-rows-4 row-auto">
        {colors.map(({ id, color, fontFamily }) => (
          <div
            key={id}
            style={{ backgroundColor: color }}
            className={quadStyle}
          >
            <h2 className={quadStyles.font} style={{ fontFamily: fontFamily }}>
              {companyName}
              <br />
              {companyName.toLocaleUpperCase()}
              <br />
              {color}
            </h2>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Quadrants;
