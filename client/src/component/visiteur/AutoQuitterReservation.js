import React, { useState } from "react";
import "./autoQuitterReservation.css";

function AutoQuitterReservation() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    tel:"",
    dateSortie:"",
    heureSortie: "",
    heureRetour: "",
    destination:"",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleConfirmation = () => {
    const confirmation = window.confirm("Voulez-vous vraiment envoyer le formulaire ?");
    if(confirmation) {
    handleSubmit();
    }
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(request);
  }

  return (
    <div className="App">
      <h1>Autorisation de sortie pendant la reservation</h1>
      <form onSubmit={handleConfirmation}>
        <label>
          Nom complet:
          <input
            type="text" name="name" value={request.name} required onChange={handleChange}/>
        </label>
        <label>
          E-mail:
          <input
            type="email" name="email" value={request.email} required onChange={handleChange}/>
        </label>
        <label>
           Numéro de téléphone:
          <input
            type="number" name="tel" value={request.tel} required onChange={handleChange}/>
        </label>
        <label>
          Date de sortie:
          <input
            type="date" name="dateSortie" value={request.dateSortie} required onChange={handleChange}/>
        </label>
        <label>
          Heure de sortie:
          <input
            type="time" name="heureSortie" value={request.heureSortie} required onChange={handleChange}/>
        </label>
        <label>
          Heure de retour
          <input
            type="time" name="heureRetour" value={request.heureRetour} required onChange={handleChange}/>
        </label>
        <label>
          Destination 
          <input
            type="text" name="poste" value={request.poste} required onChange={handleChange}/>
        </label>
        <label> Raison de sortir  
        <textarea name="raison" value={request.raison} required onChange={handleChange}></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default AutoQuitterReservation;