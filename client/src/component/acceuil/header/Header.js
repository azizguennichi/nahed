import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'
function Header() {
  return (
    <div >
      <Navbar/>
    <div className='header'>
    <div className='headerContainer'>
      <div className='headerList'>
        <div className='headerListItem'>
          <spam>Accueil</spam></div>          
          <div className='headerListItem'>
          <spam>Actualité</spam></div> 
          <div className='headerListItem'>
          <spam>Formation</spam></div> 
          <div className='headerListItem'>
          <spam>Performance Sportive</spam></div> 
        </div>
      </div>
    </div>
    
   
    
      </div>
  )
}

export default Header