import { useEffect, useState } from 'react'
import Item from '../Item/Item'
import axios from 'axios'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products')
      setProducts(data)
    }
    fetchproducts()

    // axios.get('http://localhost:5000/api/products')
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error))
  }, [])

  return (

    <section className='w-full h-auto mt-[90px]'>
      <div className='w-full flex flex-wrap justify-center'>
        {products.map(product => <Item item={product} key={product.id} />
        )}
      </div>
    </section>

  )
}

export default ItemListContainer
