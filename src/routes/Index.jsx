import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Error404 from '../pages/Error404'
import FormNewProduct from '../pages/FormNewProduct'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import SignUp from '../pages/SignUp'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path=':id' element={<ProductDetail />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/item' element={isAuth ? <FormNewProduct /> : <Navigate to='/login' replace />} />
      <Route path='*' element={<Error404 />} />
    </Routes>

  )
}
export default RoutesIndex
