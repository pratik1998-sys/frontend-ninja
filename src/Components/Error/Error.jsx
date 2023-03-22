import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'

const Error = () => {
  return (
    <div className='error'>
      <h3>There was an error...</h3>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <button>Back to home</button>
      </Link>
    </div>
  )
}

export default Error
