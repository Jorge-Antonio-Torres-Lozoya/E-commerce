import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { registerUserServices } from '../services/userServices'
import '../styles/signUp.css'

const SignUp = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    console.log(data)
    try {
      const result = await registerUserServices(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 mx-auto form-marginTop'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal text-center'>Please sign up</h1>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='Jorge'
            value={input.first_name}
            onChange={handleInputChange}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Torres'
            value={input.last_name}
            onChange={handleInputChange}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>
        <div className='form-floating'>
          <input
            type='date'
            className='form-control'
            id='birth_date'
            name='birth_date'
            placeholder='birth_date'
            value={input.birth_date}
            onChange={handleInputChange}
          />
          <label htmlFor='birth_date'>Birth Date</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign Up</button>

      </form>
    </main>
  )
}

export default SignUp
