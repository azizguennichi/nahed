import React, { useState } from 'react'
import axios from 'axios'

const BookChambre = () => {
  const [form, setForm] = useState({
    nameComplet: '',
    email: '',
    tel: '',
    nbrPersonne: '',
    entre: '',
    sortie: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleConfirmation = () => {
    const confirmation = window.confirm("Voulez-vous vraiment envoyer le formulaire ?")
    if(confirmation) {
    handleSubmit();
    }
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/bookchambre', form)
      .then(response => {
        console.log(response.data)
        // Rediriger l'utilisateur vers une page de confirmation ou de succès
      })
      .catch(error => {
        console.error(error)
      });
  };

  return (
    <form onSubmit={handleConfirmation}>
      <div>
        <label for="nameComplet">Nom complet :</label>
        <input type="text" name="nameComplet" id="nameComplet" value={form.nameComplet} onChange={handleChange} required />
      </div>
      <div>
        <label for="email">Email :</label>
        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <label for="tel">Téléphone :</label>
        <input type="number" name="tel" id="tel" value={form.tel} onChange={handleChange} required />
      </div>
      <div>
        <label for="nbrPersonne">Nombre de personnes :</label>
        <input type="number" name="nbrPersonne" id="nbrPersonne" value={form.nbrPersonne} onChange={handleChange} required />
      </div>
      <div>
        <label for="entre">Date d'entrée :</label>
        <input type="date" name="entre" id="entre" value={form.entre} onChange={handleChange} required />
      </div>
      <div>
        <label for="sortie">Date de sortie :</label>
        <input type="date" name="sortie" id="sortie" value={form.sortie} onChange={handleChange} required />
      </div>
      <button type="submit">Réserver</button>
    </form>
  );
};

export default BookChambre