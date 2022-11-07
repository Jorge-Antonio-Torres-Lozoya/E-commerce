import { Route, Routes } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import SignUp from '../pages/SignUp'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=':id' element={<ProductDetail />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error404 />} />
    </Routes>

  )
}
export default RoutesIndex
