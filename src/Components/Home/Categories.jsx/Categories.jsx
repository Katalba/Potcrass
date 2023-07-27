import Title from "../../Title/Title";

const Categories = () => {
  return (
    <>
    <Title title={'Explora nuestras categorías'} />
    <section className='relative flex-row justify-center md:flex md:h-[100vh] p-5 w-full space-x-5'>
        <div className="relative suculentas saturate-50 ">
          <div className="absolute grid place-items-center bgGradient">
            <h3 className="text-[15px] font-bold">Suculentas</h3>
          </div>
        </div>
        <div className="relative cactus saturate-50 ">
          <div className="absolute grid place-items-center bgGradient">
            <h3 className="text-[15px] font-bold">Cactus</h3>
          </div>
        </div>
        <div className="relative macetas saturate-50 ">
          <div className="absolute grid place-items-center bgGradient">
            <h3 className="text-[15px] font-bold">Macetas</h3>
          </div>
        </div>
        <div className="relative regalos saturate-50 ">
          <div className="absolute grid place-items-center bgGradient rounded-full">
            <h3 className="text-[15px] font-bold">Regalos</h3>
          </div>
        </div>
    </section>
    </>
  );
}

export default Categories;

