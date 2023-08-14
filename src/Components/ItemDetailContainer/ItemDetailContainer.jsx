import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' // Import useParams from react-router-dom
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProduct()
  }, [id])

  return (
    <section className='w-full h-screen flex items-center'>
      <ItemDetail item={product} />
    </section>
  )
}

export default ItemDetailContainer
