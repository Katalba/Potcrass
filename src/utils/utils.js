import axios from 'axios'

export const fetchproducts = async () => {
  const { data } = await axios.get('http://localhost:5000/api/products')
  return (data)
}
