import React, { useContext } from 'react'
//import img from  '.. /assets/images/logo.jpg'
/* <spam className="logo" >
<img src={img} alt="Athletisme"  id="img"/></spam>*/
import MonContexte from '../../context/Auth'
import './navbar.css'

function Navbar() {
  const {isAuthenticated}= useContext(MonContexte)
  return (
    <div className='navbar'>
      <div className='navContainer'>
       
      {(!isAuthenticated&&(
        <>
      <div class="navItems">
          <button className='navButton' onClick={()=>{window.location.href="/login"}} type="submit">Connecter</button>
          <button className='navButton' onClick={()=>{window.location.href="/inscrit"}} type="submit">S'inscrire</button>
      </div>
      </>
      
      ))||
      <>
      <div class="navItems">
          <button className='navButton' onClick={()=>{window.location.href="/account"}} type="submit">Mon compte</button>
          <button className='navButton' onClick={()=>{window.location.href="/logout"}} type="submit">se deconnecter</button>
      </div>
      </> }
      </div>
      </div>
      )
}

export default Navbar