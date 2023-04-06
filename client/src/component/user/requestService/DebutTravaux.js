import React, { useState } from "react";
import "./debutTravaux.css";

function DebutTravaux() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    tel:"",
    poste:"",
    debutTravail:"",
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
      <h1>Annoncer de début de travaux</h1>
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
          Poste de travail:
          <input
            type="text" name="poste" value={request.poste} required onChange={handleChange}/>
        </label>
        <label>
          Date début des travaux:
          <input
            type="date" name="debutTravail" value={request.debutTravail} required onChange={handleChange}/>
        </label>
        <label>
          Service:
          <select name="service" required onChange={handleChange}>
            <option value="">Sélectionnez un service</option>
            <option value="Premiere travail">Premiere travail</option>
            <option value="Aprés une vacance">Aprés une vacance </option>
            <option value="Aprés un déménagement">Aprés un déménagement </option>
            <option value="autres"> autres</option>
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

export default DebutTravaux;
