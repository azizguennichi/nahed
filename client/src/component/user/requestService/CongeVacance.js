import React, { useState } from "react";
import "./congeVacance.css";

function CongeVacance() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    tel:"",
    poste:"",
    centreAction:"",
    debutConge:"",
    finConge:"",
    adresse:"",
    codePostal:"",
    service: "",
    message: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleConfirmation = () => {
    const confirmation = window.confirm("Voulez-vous vraiment envoyer le formulaire ?");
    if(confirmation) {
    handleSubmit();
    }
    }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(request)
  }
  return (
    <div className="App">
      <h1>Demander un congés</h1>
      <form onSubmit={handleConfirmation}>
        <label>
          Nom:
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
          Poste de travail:
          <input
            type="text" name="poste" value={request.poste} required onChange={handleChange}/>
        </label>
        <label>
          L'dresse de résidence pendant le congés:
          <input
            type="text" name="adresse" value={request.adresse} required onChange={handleChange}/>
        </label>
        <label>
          Code postal:
          <input
            type="number" name="codePostal" value={request.codePostal} required onChange={handleChange}/>
        </label>
        <label>
          Date debut de congé:
          <input
            type="date" name="debutConge" value={request.debutConge} required onChange={handleChange}/>
        </label>
        <label>
        Date fin de congé:
          <input
            type="date" name="finConge" value={request.finConge} required onChange={handleChange}/>
        </label>
        <label>
          Service:
          <select name="service" required onChange={handleChange}>
            <option value="">Sélectionnez un service</option>
            <option value="Congé de vacances de répos annuelles">Congé de vacances de répos annuelles</option>
            <option value="Congé de vacances exeptionnelles">Congé de vacances exeptionnelles</option>
            <option value="Congé de vacances pour un raison">Congé de vacances pour un raison de santé(avec certificat) </option>
          </select>
        </label>
        <label>
          Message:
          <textarea name="message" value={request.message} required onChange={handleChange}></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default CongeVacance;
