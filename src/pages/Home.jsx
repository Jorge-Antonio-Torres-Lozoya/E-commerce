import CardAllProducts from '../components/CardAllProducts'
// import useGetData from '../hooks/useGetData'
import { useProductContext } from '../context/SearchContext'
import '../styles/home.scss'
const Home = () => {
  const context = useProductContext()

  return (
    <>
      <section className='contenedorRoot '>
        <div className='columns'>
          {
    context.loading
      ? <p className='textLoading py-2'>Cargando...</p>
      : context.data.filter(product => {
        if (context.search === '') {
          return product
        } else if (product.product_name.toLowerCase().includes(context.search.toLowerCase())) {
          return product
        }
        return null
      })
        .map((product, index) => (
          <aside key={index} className='cardProduct '>
            <CardAllProducts {...product} />
          </aside>
        ))

  }
        </div>
      </section>
    </>
  )
}

export default Home
