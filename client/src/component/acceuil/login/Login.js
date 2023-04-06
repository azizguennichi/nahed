import React, { useEffect, useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MonContexte from "../../context/Auth";
function Login() {
  const { isAthenticated } = useContext(MonContexte);
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const passwordVisibilityHandler = () => {
    const passwordInput = document.getElementById("password-input");
    const toggleButton = document.getElementById("toggle-password-button");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML = "Masquer";
    } else {
      passwordInput.type = "password";
      toggleButton.innerHTML = "Afficher";
    }
  };
  useEffect(() => {
    if (isAthenticated) {
      history.replace("/");
    }
  }, [history, isAthenticated]);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
  };

  const auth = getAuth();
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        if (user.role === "admin") {
          history.push("/admin/AdminDashboard");
        } else {
          history.push("/user/UserDashboard");
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <Header />
      <div className="login-box">
        <h2>Se connecter</h2>
        <form onSubmit={loginSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={user.email}
              name="email"
              required
              onChange={onChangeInput}
            />
            <label>Nom d'utilisateur</label>
          </div>
          <div className="user-box">
            <label for="password-input">Mot de passe</label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={user.password}
              required
              onChange={onChangeInput}
            />
            <button
              id="toggle-password-button"
              type="button"
              onClick={passwordVisibilityHandler}
            >
              Afficher
            </button>
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
