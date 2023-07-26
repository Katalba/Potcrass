
const Categories = () => {
  return (
    <section className='relative flex-row md:flex p-5'>
      <div className="relative suculentas w-[90%] md:w-[25%] h-[60vh] m-5 saturate-50">
        <div className="absolute w-full h-full grid place-items-center">
          <h3>Suculentas</h3>
        </div>
      </div>
      <div className="relative cactus w-[90%] md:w-[25%] h-[60vh] m-5 saturate-50">
        <div className="absolute w-full h-full grid place-items-center">
          <h3>Cactus</h3>
        </div>
      </div>
      <div className="relative macetas w-[90%] md:w-[25%] h-[60vh] m-5 saturate-50">
        <div className="absolute w-full h-full grid place-items-center">
          <h3>Macetas</h3>
        </div>
      </div>
      <div className="relative regalos w-[90%] md:w-[25%] h-[60vh] m-5 saturate-50">
        <div className="absolute w-full h-full grid place-items-center">
          <h3>Regalos</h3>
        </div>
      </div>
    </section>
  );
}

export default Categories;
