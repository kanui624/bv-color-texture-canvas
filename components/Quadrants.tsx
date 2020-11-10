const Quadrants = ({
  colors,
}: {
  colors: {
    id: number;
    color: string;
  }[];
}) => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <div className="grid h-full grid-cols-3 col-auto grid-rows-3 row-auto">
      {colors.map(({ id, color }) => (
        <div className={quadStyle} key={id}>
          {color}
        </div>
      ))}
    </div>
  );
};

export default Quadrants;
