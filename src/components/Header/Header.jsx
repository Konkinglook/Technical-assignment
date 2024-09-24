import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav>
        <ul className='nav-wrapper'>
          <li><Link to="/">Movie</Link></li>
          <li><Link to="/favorite">Favorite Movie</Link></li>
        </ul>
    </nav>
  )
}

export default Header