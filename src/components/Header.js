import React from 'react'
import NavBar from './Navbar/NavBar'
import Hero from './partials/Hero'

const Header = () => {
  return (
    <Header className='main-header'>
        <div className="container">
            <NavBar />
            <Hero />
        </div>
    </Header>
  )
}

export default Header
