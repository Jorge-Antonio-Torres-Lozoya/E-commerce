import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import useForm from '../hooks/useForm'
import { loginUserServices } from '../services/userServices'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = async (data) => {
    try {
      const result = await loginUserServices(data)
      console.log(result.data.token)
      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/')
      }
    } catch (err) {
      console.log('Ocurrio un erron en Login: ' + err.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 mx-auto  '>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal text-center'>Please sign in</h1>
        <div className='form-floating my-2'>
          <input
            type='email'
            className='form-control'
            id='floatingEmail'
            name='email'
            placeholder='name@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingEmail'>Email address</label>
        </div>
        <div className='form-floating my-2'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>

      </form>
    </main>
  )
}

export default Login
