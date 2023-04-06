import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Salle = () => {
  const [salles, setSalles] = useState([]);

  useEffect(() => {
    axios.get('/api/salle')
      .then(response => {
        setSalles(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleReserve = (salle) => {
    axios.post('/api/reserve', { salle })
      .then(response => {
        console.log(response.data)
        // Rediriger l'utilisateur vers une page de confirmation ou de succès
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nom de la salle</th>
          <th>Capacité</th>
          <th>État de la réservation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {salles.map((salle) => (
          <tr key={salle.id}>
            <td>{salle.nom}</td>
            <td>{salle.capacite}</td>
            <td>{salle.reserve ? 'Réservée' : 'Disponible'}</td>
            <td>
              {!salle.reserve && <button onClick={() => handleReserve(salle)}>Réserver</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Salle;
