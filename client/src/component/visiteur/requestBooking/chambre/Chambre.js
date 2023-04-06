import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './chambre.css'
const Chambres = () => {
  const [chambres, setChambres] = useState([])

  useEffect(() => {
    // Récupération de la liste des chambres depuis l'API
    axios.get('/api/chambres')
      .then(response => {
        setChambres(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const reserverChambre = (id) => {
    // Envoi d'une requête POST à l'API pour réserver la chambre
    axios.post(`/api/chambres/${id}/reserver`)
      .then(response => {
        // Actualisation de la liste des chambres
        setChambres(chambres.map(chambre => chambre._id === id ? response.data : chambre))
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom de la chambre</th>
          <th>Nombre de lits</th>
          <th>Nombre de tables</th>
          <th>Nombre de chaises</th>
          <th>État</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {chambres.map(chambre => (
          <tr key={chambre._id}>
            <td>{chambre.nameChambre}</td>
            <td>{chambre.nbrlit}</td>
            <td>{chambre.nbrtable}</td>
            <td>{chambre.nbrchaise}</td>
            <td>{chambre.etat ? 'Disponible' : 'Réservée'}</td>
            <td>
              {chambre.etat ? (
                <button onClick={() => reserverChambre(chambre._id)}>Réserver</button>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Chambres