import { useState} from "react";
import {SlHandbag} from 'react-icons/sl'

const Nav = () => {

  const [isOpen, setIdOpen] = useState(false)

  const handleToggle = () => {
    setIdOpen(!isOpen)
  }

  return (
    <nav className={`nav z-50 top-0 w-full fixed h-[90px] bg-transparent overflow-hidden flex flex-row justify-between items-start px-5 ${isOpen ? 'openActive' : ''} transition-all duration-300 ease-linear`}>
      <div className='icon w-[180px] h-full flex justify-center items-center'>
        <img className="w-full h-full grayscale" src="https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/logo.png?alt=media&token=bd64490b-45a5-484f-9ae8-edf1a3ea0177" alt="logo" />
      </div>

      <section className={`navMenu absolute w-full flex flex-col justify-center items-center gap-7 p-5
          md:flex md:w-[400px] md:h-full md:flex-row md:justify-end  md:relative md:p-0 md:top-0 ${isOpen ? 'activeOpen' : ''}`}>
      <div>
        Suculentas
      </div>
      <div>
        Cactus
      </div>
      <div>
        Regalos
      </div>
      <div className="shoppingBag">
        <SlHandbag className="text-[1.5rem]" />
      </div>
      </section>

      <section className='toggle w-[60px] h-[120px] flex justify-center items-center md:hidden'>
          <div
            className={`nav_toggle w-[50px] h-50px flex flex-col justify-center items-center gap-[3px] cursor-pointer ${isOpen ? 'open' : ''}`}
            onClick={handleToggle}
          >
            <span className={`w-[30px] h-[4px] rounded-sm transition-all duration-300 ease-linear ${isOpen ? 'transform rotate-45 translate-x-0 translate-y-[5.5px]' : ''}`} />
            <span className={`w-[30px] h-[4px] rounded-sm transition-all duration-300 ease-linear ${isOpen ? 'hidden' : ''}`} />
            <span className={`w-[30px] h-[4px] rounded-sm transition-all duration-300 ease-linear ${isOpen ? 'transform -rotate-45 translate-x-0 -translate-y-[2.5px]' : ''}`} />
          </div>
        </section>

    </nav>
  );
}

export default Nav;
