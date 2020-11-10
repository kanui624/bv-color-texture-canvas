interface ColorArr {
  colors: {
    id: number;
    color: string;
  }[];
}

const Quadrants = ({ colors }: ColorArr) => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <div className="grid h-full grid-cols-3 col-auto grid-rows-3 row-auto">
      {colors.map(({ id, color }) => (
        <div key={id} className={quadStyle} style={{ backgroundColor: color }}>
          {color}
        </div>
      ))}
    </div>
  );
};

export default Quadrants;
