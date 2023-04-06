import React, { useState } from "react";
import './foyer.css'
function Foyer() {
  const [rooms] = useState(
    {
      name: "foyer",
      nbrchambre:"10",
      nbrchambrevide:"5",
      nbrchambrereser:"5",
      heureouvert:"8h",
      heureferme:"22h"
    }
  )
  
  return (
    
     
    <div>
      <h1>Gestion de foyer</h1>
      {rooms.map((rooms, index) => (
        <div key={index}>
         <h2>{rooms.name}</h2>
          <ul>
            <li><h3>Nombre de chambre:{rooms.nbrchambre}</h3></li>
            <li><h3>Nombre de chambre vide:{rooms.nbrchambrevide}</h3></li>
            <li><h3>Nombre de chambre reservé :{rooms.nbrchambrereser}</h3></li>
            <li><h3>Il est ouvert à  :{rooms.heureouvert}</h3></li>
            <li><h3>Il est fermé à  :{rooms.heureferme}</h3></li>
          </ul>
        </div>
        
      ))}
    </div>
    
   
  )
}

export default Foyer