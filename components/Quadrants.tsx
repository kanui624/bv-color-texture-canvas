const Quadrants = () => {
  const quadStyle = 'flex justify-center items-center';
  return (
    <div className="grid h-full grid-cols-2 col-auto grid-rows-2 row-auto">
      {Array.from(Array(4), (e, i) => {
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
