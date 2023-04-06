import React, { useState, useEffect } from "react";
import MonContexte from "./component/context/Auth";
import axios from "axios";
import "./App.css";
import {
  // BrowserRouter as Redirect,
  Routes,
  Route,
} from "react-router-dom";

import MyComponent from "./component/MyComponent";

import Acceuil from "./component/acceuil/Acceuil";
import Login from "./component/acceuil/login/Login";
import Inscrit from "./component/acceuil/inscrit/Inscrit.js";
import Footer from "./component/acceuil/footer/Footer";
import Header from "./component/acceuil/header/Header";
import Navbar from "./component/acceuil/navbar/Navbar";

//import AdminDashboard from './component/admin/AdminDashboard';
import Profile from "./component/profile/Profile";
import Account from "./component/acceuil/account/Account";
import Logout from "./component/acceuil/logout/Logout";

import UserDashbord from "./component/user/UserDashbord";
import VisiteurDashbord from "./component/visiteur/VisiteurDashbord";

import MyServices from "./component/user/myServices/MyServices";
import MyRequests from "./component/visiteur/myRequest/MyRequests";
import AutoQuitterReservation from "./component/visiteur/AutoQuitterReservation";
import BookSalle from "./component/visiteur/requestBooking/salle/BookSalle";
import BookChambre from "./component/visiteur/requestBooking/chambre/BookChambre";
import Salle from "./component/visiteur/requestBooking/salle/Salle";
import Chambre from "./component/visiteur/requestBooking/chambre/Chambre";

import AutoSortie from "./component/user/requestService/AutoSortie";
import CongeVacance from "./component/user/requestService/CongeVacance";
import DebutTravaux from "./component/user/requestService/DebutTravaux";
import DocAdministratif from "./component/user/requestService/DocAdministratif";

import Foyer from "./component/visiteur/foyer/Foyer";

import AdminDashbord from "./component/admin/AdminDashbord";
import HerRequest from "./component/admin/herRequest/HerRequest";
import HerService from "./component/admin/herService/HerService";
//import HerUser from './component/admin/herUser/ HerUser'

import AuthApi from "./component/services/AuthApi";

function App() {
  // const [users, setUsers] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(AuthApi());
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users")
  //     .then((res) => setUsers(res.data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    // <MonContexte.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <div className="App">
      <div className="content">
        {/* <h1>{users}</h1> */}
        <Routes>
          <Route
            path="/autoQuitterReservation"
            element={<AutoQuitterReservation />}
          />
          <Route path="/autoSortie" element={<AutoSortie />} />
          <Route path="/congeVacance" element={<CongeVacance />} />
          <Route path="/debutTravaux" element={<DebutTravaux />} />
          <Route path="/docAdministratif" element={<DocAdministratif />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscrit" element={<Inscrit />} />
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/adminDashbord" element={<AdminDashbord />} />
          <Route path="/userDashbord" element={<UserDashbord />} />
          <Route path="/visiteurDashbord" element={<VisiteurDashbord />} />
          <Route path="/herRequest" element={<HerRequest />} />
          <Route path="/herService" element={<HerService />} />
          <Route path="/myservices" element={<MyServices />} />
          <Route path="/myrequests" element={<MyRequests />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/header" element={<Header />} />
          <Route path="/bookChambre" element={<BookChambre />} />
          <Route path="/bookSalle" element={<BookSalle />} />
          <Route path="/chambre" element={<Chambre />} />
          <Route path="/foyer" element={<Foyer />} />
          <Route path="/salle" element={<Salle />} />
          <Route path="/authApi" element={<AuthApi />} />
          <Route path="/my-component" element={<MyComponent />} />

          {/* <Redirect to="/acceuil" /> */}
        </Routes>
      </div>
    </div>
  );
}
/* </MonContexte.Provider> */
export default App;
