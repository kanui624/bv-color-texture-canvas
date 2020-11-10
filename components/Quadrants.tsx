const Quadrants = () => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <div className="grid h-full grid-cols-3 col-auto grid-rows-3 row-auto">
      {Array.from(Array(9), (e, i) => {
        return (
          <div key={i} className={quadStyle}>
            {i}
          </div>
        );
      })}
    </div>
  );
};

export default Quadrants;
