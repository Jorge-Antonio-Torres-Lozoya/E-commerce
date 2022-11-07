import Navbar from './components/Navbar'
import RoutesIndex from './routes/Index'
import { ProductProvider } from './context/SearchContext'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <RoutesIndex />
        </ProductProvider>
      </AuthProvider>
    </>
  )
}

export default App
