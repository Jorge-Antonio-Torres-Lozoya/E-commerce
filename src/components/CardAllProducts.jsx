/* eslint-disable react/jsx-handler-names */
/* eslint-disable camelcase */

import { Link } from 'react-router-dom'
import imagenDefault from '../assets/default.png'

const CardAllProducts = ({ product_name, image, price, _id }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = imagenDefault
  }
  return (
    <>
      <Link to={`/${_id}`}>
        <div className='card' style={{ width: '18rem' }}>
          <img onError={addDefaultSrc} src={image || imagenDefault} className='card-img-top' alt='...' />

          <div className='card-body d-flex justify-content-center flex-column align-items-center'>
            <p className='card-text fs-4'>{product_name}</p>
            <span className='card-text'>${price}</span>

          </div>
        </div>
      </Link>

    </>

  )
}

export default CardAllProducts
