import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './logout.css'
const Logout = () => {
  const history = useNavigate()

  useEffect(() => {
    // Effectue une requête HTTP POST vers l'API de déconnexion de Node.js
    fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      // Redirige l'utilisateur vers la page de connexion
      history.push('/login')
    })
  })

  return (
    <div>
      <h1>Déconnexion en cours...</h1>
    </div>
  )
}

export default Logout