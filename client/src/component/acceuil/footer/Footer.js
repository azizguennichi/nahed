import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div> 
 <div class="footer-container">
     <div class="footer-left">
       <h3>À propos</h3>
     </div>
     <div class="footer-middle">
       <h3>Liens utiles</h3>
       <ul>
         <li><a href="/">Accueil</a></li>
         <li><a href="/">À propos</a></li>
         <li><a href="/">Contact</a></li>
       </ul>
     </div>
     <div class="footer-right">
       <h3>Contact</h3>
       <ul>
         <li><i class="localisation"></i>Cité universitaire sud Gabes </li>
         <li><i class="phone"></i> +77888999</li>
         <li><i class="envelope"></i> athletisme@gmail.com.com</li>
       </ul>
     </div>
   </div>
    </div>
    )
  }
  export default Footer