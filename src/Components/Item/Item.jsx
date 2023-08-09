import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <>
      {/* <div className='col-4'>
        <Link to={`/Item/${item.id}`}>
          <div className='card'>
            <img src={item.image} className='img-fluid' alt={item.name} />
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='price'>${new Intl.NumberFormat('de-DE').format(item.price)}</p>
            </div>
          </div>
        </Link>
      </div> */}

      <Link>
        <div className='card-product w-[80vw] md:w-[17vw] h-[40vh] m-10 shadow-xl hover:skew-y-[390deg]'>
          <div className='w-full h-[30vh]'>
            <img src='https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ZebraCactus.jpg?alt=media&token=fb512145-8e9f-4901-9962-860db54444ec' className='object-cover w-full h-[30vh] object-center' alt='' />
          </div>
          <div className='card-body w-full text-center p-5 '>
            <h5 className='card-title font-bold'>Zebra Cactus</h5>
            <p className='price'>$2000</p>
          </div>
        </div>
      </Link>
      <Link>
        <div className='card-product w-[80vw] md:w-[17vw] h-[40vh] m-10 shadow-xl hover:skew-y-[390deg]'>
          <div className='w-full h-[30vh]'>
            <img src='https://firebasestorage.googleapis.com/v0/b/cactusproject-54bf0.appspot.com/o/ZebraCactus.jpg?alt=media&token=fb512145-8e9f-4901-9962-860db54444ec' className='object-cover w-full h-[30vh] object-center' alt='' />
          </div>
          <div className='card-body w-full text-center p-5 '>
            <h5 className='card-title font-bold'>Zebra Cactus</h5>
            <p className='price'>$2000</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Item
