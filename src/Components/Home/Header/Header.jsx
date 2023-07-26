import Nav from "../../Navbar/Nav";
import SpinningText from "../SpinningText/SpinningText";
import {BsArrowRight} from 'react-icons/bs'

const Header = () => {
  
  return (
    <header className="w-full h-screen relative">
      <img className="imgFondo object-cover bg-center w-full h-[60vh] md:h-full" src="https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/fondo.webp?alt=media&token=230ef077-d0cd-48f5-930a-87adc5be2185" alt="fondoHeader" />
      <div className="flex justify-center w-full md:w-0 absolute h-[60vh] top-0 md:top-[100%] md:h-0 md:left-1/2">
        <div className="imgCentral bg-[#c6157fc9] w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] rounded-full absolute z-10 bottom-0 md:left-1/2">
          <img className="absolute bottom-0 w-[25rem] h-[15rem] md:w-[35rem] md:h-[25rem]" src="https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/Portada-removebg-preview.png?alt=media&token=cb1c9130-4bab-4aac-bcfc-e6d0543be2ce" alt="imagenCentral" />
        <SpinningText text={'succulent heaven'} />
        </div>
      </div>
      <div className="relative md:absolute md:top-[30%] z-15 left-0 md:left-[15%] w-full md:w-[40%] h-[40%] flex-row space-y-5 p-10 md:p-0">
        <h1 className="text-[25px] md:text-[50px]">Suculentas que <br />enamoran</h1>
        <p className="text-[13px] md:text-[15px]">Da un vistazo a nuestras suculentas de colección.</p>
        <button className="bg-slate-900 rounded-md text-white w-[110px] h-[30px] md:w-[150px] md:h-[40px] flex items-center justify-center text-[13px] md:text-[15px]">shop now <BsArrowRight className="ml-4" /></button>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
