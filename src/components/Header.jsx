import React from 'react'
import './Header.css'
import { NavLink } from 'react-router'
const Header = () => {
  return (
    <div className='headerDiv'>
        <div className='karFlixDivPar'>
        <div className='karFlixDiv'>
            <NavLink to='/' className={(isActive)=> isActive?"navLink":"navLink"}>KarFlix</NavLink>
        </div>
        </div>
        <div className='linksDiv'>
        <div><NavLink to='/home' className={`navLink ${(isActive)=> isActive?"active":""}`}>Home</NavLink></div>
        <div><NavLink to='/about' className={`navLink ${(isActive)=> isActive?"active":""}`}>About</NavLink></div>
        <div><NavLink to='/movies' className={`navLink ${(isActive)=> isActive?"active":""}`}>Movies</NavLink></div>
        <div><NavLink to='/contact' className={`navLink ${(isActive)=> isActive?"active":""}`}>Contact</NavLink></div>
        <div><NavLink to='/signin' className={`navLink ${(isActive)=> isActive?"active":""}`}>SignIn</NavLink></div>
        <div><NavLink to='/signup' className={`navLink ${(isActive)=> isActive?"active":""}`}>SignUp</NavLink></div>
        </div>
    </div>
  )
}

export default Header