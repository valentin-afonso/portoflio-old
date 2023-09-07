import React from 'react'
import '../style/header/Navbar.css'

export default function Navbar() {

  return (
    <div className='navbar'>
        <ul>
            <li>
                <a href='/home#section-projects' className='link_libele'>Mes projets</a>
            </li>
            <li>
                <a href='/home#section-school-career' className='link_libele'>Parcour scolaire</a>
            </li>
            <li>
                <a href='/home#section-experience-pro' className='link_libele'>Experiences professionnels</a>
            </li>   
            <li>
                <a href='/home' className='link_libele'>Contact</a>
            </li>            
        </ul>
    </div>
  )
}
