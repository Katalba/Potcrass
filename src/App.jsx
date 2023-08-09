import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Nav'
import Home from './Components/Home/Home'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='categorias' element={<ItemListContainer />} />
      </Routes>
    </>
  )
}

export default App
