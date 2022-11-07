/* eslint-disable camelcase */

import { Link } from 'react-router-dom'
import imagenDefault from '../assets/default.png'

const CardAllProducts = ({ product_name, image, price, _id }) => {
  return (
    <>
      <Link to={`/${_id}`}>
        <div className='card' style={{ width: '18rem' }}>
          <img src={image || imagenDefault} className='card-img-top' alt='...' />
          <div className='card-body'>
            <p className='card-text'>{product_name}</p>
            <span className='card-text'>${price}</span>

          </div>
        </div>
      </Link>

    </>

  )
}

export default CardAllProducts
