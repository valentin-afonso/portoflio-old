import React from 'react'
import Navbar from './Navbar'
import '../style/header/Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='content'>
        <Navbar />
      </div>
    </div>
  )
}
