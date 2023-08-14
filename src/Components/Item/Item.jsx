import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <>

      <Link to={`/Item/${item.id}`}>
        <div className='card-product w-[80vw] md:w-[17vw] h-[40vh] m-10 shadow-xl'>
          <div className='w-full h-[30vh]'>
            <img src={item.image} className='object-cover w-full h-[30vh] object-center' alt={item.name} />
          </div>
          <div className='card-body w-full text-center p-5 '>
            <h5 className='card-title font-bold'>{item.name}</h5>
            <p className='price'>${new Intl.NumberFormat('de-DE').format(item.price)}</p>
          </div>
        </div>
      </Link>

    </>
  )
}

export default Item
