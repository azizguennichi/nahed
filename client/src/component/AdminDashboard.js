import React from "react"
/*import React, { useState, useEffect } from 'react';
import { Nav, SideBar, Container } from 'react-bootstrap';
import { Route, Switch, useHistory } from 'react-router-dom';
import UsersTable from './UsersTable';
import './admin.css'
import ReservationsTable from './ReservationsTable';
import ServicesRequestsTable from './ServicesRequestsTable';
import jwt_decode from 'jwt-decode';
//import axios from './axiosInstance';*/
function AdminDashboard()
 {/*
  // State hooks to manage data
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [servicesRequests, setServicesRequests] = useState([]);

  // Fetch users, reservations and services requests data on component mount
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch('/api/reservations')
      .then(res => res.json())
      .then(data => setReservations(data));

    fetch('/api/services-requests')
      .then(res => res.json())
      .then(data => setServicesRequests(data));})
     // Vérifier la validité du jeton d'accès JWT
     const token = localStorage.getItem('jwtToken');
     if (token) {
       const decodedToken = jwt_decode(token);
       const { username, exp } = decodedToken;
       if (username && exp && exp > Date.now() / 1000) {
         setIsAdmin(true);
       }}
    const handleLogout = () => {
      // Supprimer le jeton d'accès JWT du stockage local de l'application
      localStorage.removeItem('jwtToken');
      // Rediriger l'administrateur vers la page de connexion
      window.location.href = '/login'
    }
  // Use history to navigate to different pages
  const history = useHistory()
  */
  return (
    <div className="adminDashbord">

    </div>
      /*<div>
      if (isAdmin) 
    return (
      <div>
        <h1>Tableau de bord</h1>
        <button onClick={handleLogout}>Se déconnecter</button>
      </div>
    )else 
    return (
      <div>
        <h1>Page non autorisée</h1>
      </div>)
      </div>*/
  )}
  
export default AdminDashboard