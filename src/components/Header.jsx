import React from 'react'
import { logo } from '../assets'

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <button>Github</button>
      </nav>
    </header>
  )
}

export default Header