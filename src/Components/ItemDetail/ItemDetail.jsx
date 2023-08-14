import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const ItemDetail = ({ item }) => {
  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.scrollY >= item.scroll) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)

  return (
    <>
      <div className='productImage w-full md:[70vw] h-[60%] md:flex-row xl:flex justify-center mb-10 xl:mb-0 md:pl-5'>
        <img className='w-full md:w-full xl:w-[35vw] h-full  object-cover object-center' src={item.image} alt={item.name} />
        <img className='w-full md:w-full xl:w-[35vw] h-full object-cover object-center' src={item.imageTwo} alt={item.name} />
      </div>
      <div className={`productDetail w-full xl:w-[30vw] h-[60%] space-y-5 md:pr-16 md:pl-10 ${fix ? '' : ''}`}>
        <div className='product-name font-[900] text-[25px] md:text-[40px]'>
          <p>{item.name}</p>
        </div>
        <div className='description'>
          <p className='text-[13px] md:text-[15px] mb-2 md:mb-5'>Vivero especializado en el cultivo de Cactus y Suculentas, si querés alguna en otro tamaño que no ves publicado, consultanos:</p>
          <Link><BsWhatsapp className='text-[13px] md:text-[30px]' /></Link>
        </div>
        <div className='product-price flex justify-end'>
          <p>${new Intl.NumberFormat('de-DE').format(item.price)}</p>
        </div>
        <div className='button flex justify-end'>
          <Link>
            <button className='bg-slate-900 rounded-md text-white w-[110px] h-[30px] md:w-[150px] md:h-[40px] flex items-center justify-center text-[13px] md:text-[15px]'>Add to bag</button>
          </Link>
        </div>
      </div>

    </>
  )
}

export default ItemDetail
