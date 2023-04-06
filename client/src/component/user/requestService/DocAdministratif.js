import React, { useState } from "react";
import "./docAdministratif.css";

function DocAdministratif() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    tel:"",
    poste:"",
    centreAction:"",
    service: "",
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
  };

  return (
    <div className="App">
      <h1>Demander un documentd'administratif</h1>
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
          Centre d'action:
          <input
            type="text" name="centreAction" value={request.centreAction} required onChange={handleChange}/>
        </label>
        <label>
          Service:
          <select name="service" required onChange={handleChange}>
            <option value="">Sélectionnez un document </option>
            <option value="Congé de vacances de répos annuelles"> Attestation de travail</option>
            <option value="Congé de vacances exeptionnelles">Certificat de salaire mensuel </option>
            <option value="Congé de vacances pour un raison">Certificatde salaire annuel </option>
            <option value="Congé de vacances pour un raison">Fiche de donnees salariales </option>
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

export default DocAdministratif;
