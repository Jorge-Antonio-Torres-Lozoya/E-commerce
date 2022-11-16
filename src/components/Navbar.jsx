import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/SearchContext'
import { AuthContext } from '../context/AuthContext'
import { useContext, useEffect, useState } from 'react'
import { getSingleUser } from '../services/userServices'
import '../styles/navbar.css'
const Navbar = () => {
  const { isAuth, user, logout } = useContext(AuthContext)
  const [userData, setUserData] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const context = useProductContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    context.setSearch(event.target.inputSearch.value)
    console.log(context.search)
    if (location.pathname !== '/') {
      navigate('/')
    }
    console.log(location.pathname)
  }
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
          console.log(userData)
        }
      } catch (error) {
        console.log('Ocurrio un error: ' + error.message)
      }
    }
    fetchUserData()
  }, [isAuth])

  return (
    <>
      {console.log(userData)}
      <nav className=' navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-lg px-4 '>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>E-commerce</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className=' sizeContainer collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className='d-flex' role='search'>
              <input name='inputSearch' className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-secondary mx-3 my-2 my-sm-0' type='submit'>Search</button>
            </form>
            {
              isAuth
                ? (
                  <>
                    <h5 className='text-white tagName'>Hola {userData?.first_name && userData.first_name}</h5>
                    <Link onClick={logout} className='nav-link active tagName mx-2' aria-current='page' to='/login'>Log out</Link>
                    {
                    userData.role === 'ADMIN' &&
                      <Link className='nav-link active tagName  mx-2' to='/item'> Subir Producto</Link>

                    }
                  </>
                  )
                : (
                  <>
                    <Link className='nav-link active mx-3' aria-current='page' to='/signup'>Registrarse</Link>
                    <Link className='nav-link active mx-2' aria-current='page' to='/login'>Iniciar sesión</Link>
                  </>
                  )
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
