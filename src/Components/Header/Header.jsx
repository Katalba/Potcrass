import Nav from "../Navbar/Nav";
import SpinningText from "../SpinningText/SpinningText";

const Header = () => {
  
  return (
    <header className="w-full h-screen relative">
      <img className="imgFondo bg-cover bg-center w-full h-full" src="https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/fondo.webp?alt=media&token=230ef077-d0cd-48f5-930a-87adc5be2185" alt="fondoHeader" />
      <div className="imgCentral bg-[#c6157fc9] w-[30rem] h-[30rem] rounded-full absolute z-10 bottom-0 left-1/2">
        <img className="absolute bottom-0 w-[35rem] h-[25rem]" src="https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/Portada-removebg-preview.png?alt=media&token=cb1c9130-4bab-4aac-bcfc-e6d0543be2ce" alt="imagenCentral" />
        <SpinningText text={'succulent heaven'} />
      </div>
      <div className="absolute top-[30%] z-15 left-[15%] w-[40%] h-[40%]">
        <h1 className="titulo text-[50px]">Suculentas que enamoran</h1>
        <p>Da un vistazo a nuestras suculentas de colección.</p>
        <button>shop now</button>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
