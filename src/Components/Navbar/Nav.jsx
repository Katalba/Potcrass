import { useState } from 'react'
import { Link } from 'react-router-dom'
import {SlHandbag} from 'react-icons/sl'


const Nav = () => {
  const [isOpem, setIdOpen] = useState(false)

  const handleToggle = () => {
    setIdOpen(!isOpem)
  }

  const [color, setColor] = useState(false)
  const [textColor, setTextColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true)
      setTextColor(true)
    } else {
      setColor(false)
      setTextColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <>
      <nav className={`nav z-50 top-0 w-full fixed h-[90px] ${color ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-transparent' }  md:h-[90px] md:max-h-[90px] lg:h-[90] overflow-hidden flex flex-row justify-between items-start px-5 ${isOpem ? 'openActive' : ''} transition-all duration-300 ease-linear`}>

        {/* logotipo */}

        <section className={`icon w-[125px] md:w-[180px] h-full flex justify-center items-center ${textColor ? 'grayscale-0' : 'grayscale'}`}>
          <Link to='/'>
            <img src='https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/logo.png?alt=media&token=bd64490b-45a5-484f-9ae8-edf1a3ea0177' alt='logotipo' />
          </Link>
        </section>

        {/* menu de navegacion */}
        <section className={`${textColor ? 'text-white' : 'text-black'} navMenu absolute top-[90px] left-0 bg-whiteWi w-full flex flex-col justify-center items-center gap-7 p-5 md:flex md:w-[400px] md:h-full md:flex-row md:justify-end  md:relative md:p-0 md:top-0 ${isOpem ? 'activeOpen' : ''}`}>
          <Link > Home </Link>
          <Link > Suculentas </Link>
          <Link > Cactus </Link>
          <Link > Macetas </Link>
          <Link > Regalos </Link>
          <Link >
          <SlHandbag className="text-[1.5rem]" /> 
           </Link>
        </section>

        {/* toggle */}
        <section className='toggle w-[60px] h-[90px] flex justify-center items-center md:hidden'>
          <div className={`nav_toggle w-[50px] h-50px flex flex-col justify-center items-center gap-[3px] cursor-pointer ${isOpem ? 'open' : ''}`} onClick={handleToggle}>
            <span className={`w-[30px] h-[3px] bg-black rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform rotate-45 translate-x-0 translate-y-[5.5px]' : ''}`} />
            <span className={`w-[30px] h-[3px] bg-black rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'hidden' : ''}`} />
            <span className={`w-[30px] h-[3px] bg-black rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform -rotate-45 translate-x-0 -translate-y-[2.5px]' : ''}`} />
          </div>
        </section>
      </nav>
    </>
  )
}

export default Nav
