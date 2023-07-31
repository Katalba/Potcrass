import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Item from './Components/Item/Item'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='categorias' element={<Item />} />
        <Route path='itemDetail' element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
