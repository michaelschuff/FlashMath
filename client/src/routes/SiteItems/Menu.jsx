import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    // <img src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' class='menu-icon' />
    <Link to='/.' className='menu-icon'>
      Logout
    </Link>
  )
}
