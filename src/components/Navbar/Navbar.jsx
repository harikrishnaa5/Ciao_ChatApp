import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Ciao</span>
      <div className='user'>
        <img src="" alt="" />
        <span>Hari</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar