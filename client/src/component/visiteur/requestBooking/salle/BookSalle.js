import React, { useState } from 'react';
import axios from 'axios';

const BookSalle = () => {
  const [form, setForm] = useState({
    nameComplet:'',
    email:'',
    tel:'',
    nbrPersonne:'',
    heureEntre:'',
    heureSortie:'',
    objectif:''})
    const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const handleConfirmation = () => {
    const confirmation = window.confirm("Voulez-vous vraiment envoyer le formulaire ?");
    if(confirmation) {
    handleSubmit();
    }
    }
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/book-salle', form) 
      .then(response => {
        console.log(response.data);
        setSuccess(true);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const { nameComplet, email, tel, nbrPersonne, heureEntre, heureSortie, objectif } = form;

  return (
    <div>
      <h2>Réserver une salle</h2>
      {success && <p>Votre réservation a été enregistrée avec succès !</p>}
      {!success && (
        <form onSubmit={handleConfirmation}>
          <div>
            <label htmlFor="nameComplet">Nom complet</label>
            <input type="text" id="nameComplet" name="nameComplet" value={nameComplet} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Adresse email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="tel">Numéro de téléphone</label>
            <input type="tel" id="tel" name="tel" value={tel} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="nbrPersonne">Nombre de personnes</label>
            <input type="number" id="nbrPersonne" name="nbrPersonne" value={nbrPersonne} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="heureEntre">Heure d'entrée</label>
            <input type="time" id="heureEntre" name="heureEntre" value={heureEntre} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="heureSortie">Heure de sortie</label>
            <input type="time" id="heureSortie" name="heureSortie" value={heureSortie} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="objectif">Objectif</label>
            <textarea id="objectif" name="objectif" value={objectif} onChange={handleChange} />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Réserver</button>
        </form>
      )}
    </div>
  );
};
export default BookSalle;