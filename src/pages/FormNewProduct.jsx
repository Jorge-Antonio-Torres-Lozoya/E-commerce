
import useForm from '../hooks/useForm'
import { loadProduct } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
const FormNewProduct = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    console.log(data)
    try {
      const result = await loadProduct(data)
      console.log(result.data)
      if (result.status === 201) {
        navigate(`/${result.data._id}`)
      }
    } catch (error) {
      console.log('Ocurrio un error en Signup: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    isActive: '',
    product_name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    sku: '',
    image: ''
  })
  return (
    <main className='form-signin w-100 mx-auto form-marginTop'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal text-center'>Datos del producto</h1>
        <div className='form-floating'>
          <select
            className='form-select'
            id='isActive'
            name='isActive'
            value={input.isActive}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='true'>True</option>
            <option value='false'>False</option>
          </select>
          <label htmlFor='isActive'>¿Está activo?</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='product_name'
            name='product_name'
            placeholder='Jorge'
            value={input.product_name}
            onChange={handleInputChange}
          />
          <label htmlFor='product_name'>Nombre del producto</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            placeholder='Jorge'
            value={input.description}
            onChange={handleInputChange}
          />
          <label htmlFor='description'> Descripción</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='price'
            name='price'
            placeholder='Torres'
            value={input.price}
            onChange={handleInputChange}
          />
          <label htmlFor='price'>Precio</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='brand'
            name='brand'
            placeholder='brand'
            value={input.brand}
            onChange={handleInputChange}
          />
          <label htmlFor='brand'>Brand</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='category'
            name='category'
            value={input.category}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='Books'>Male</option>
            <option value='Movies'>Female</option>
            <option value='Movies'>Movies</option>
            <option value='Music'>Music</option>
            <option value='Games'>Games'</option>
            <option value='Electronics'>Electronics</option>
            <option value='Computers'>Computers</option>
            <option value='Home'>Home</option>
            <option value='Garden'>Garden</option>
            <option value='Tools'>Tools</option>
            <option value='Grocery'>Grocery</option>
            <option value='Beauty'>Beauty</option>
            <option value='Toys'>Toys</option>
            <option value='Kids'>Kids</option>
            <option value='Baby'>Baby</option>
            <option value='Clothing'>Clothing</option>
            <option value='Shoes'>Shoes</option>
            <option value='Jewelery'>Jewelery</option>
            <option value='Sports'>Sports</option>
            <option value='Outdoors'>Outdoors</option>
            <option value='Automotive'>Automotive</option>
            <option value='Industrial'>Industrial</option>
          </select>
          <label htmlFor='category'>Categoría</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='image'
            name='image'
            placeholder='image'
            value={input.image}
            onChange={handleInputChange}
          />
          <label htmlFor='image'>Imagen(url)</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='sku'
            name='sku'
            placeholder='sku'
            value={input.sku}
            onChange={handleInputChange}
          />
          <label htmlFor='sku'>Sku</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign Up</button>

      </form>
    </main>

  )
}

export default FormNewProduct
