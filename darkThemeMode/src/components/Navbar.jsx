import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../Theme-Context'

const Navbar = () => {

    const {theme, toggleTheme} = useTheme();

  return (
    <nav className='navbar'>
        <div>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/blog'> Blog </Link>
        </div>
    </nav>
  )
}

export default Navbar