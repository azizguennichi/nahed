const express = require('express')
const router = express.Router()
const GestionCtrl=require('../controlles/GestionCtrl')

//router.post('/congeVacance', GestionCtrl.CongeVacance)
//router.post('/autoQuitterReservation', GestionCtrl.AutoQuitterReservation)
//router.post('/autoSortie', GestionCtrl.AutoSortie)
//router.post('/debutTravaux', GestionCtrl.DebutTravaux)
//router.post('/docAdministratif', GestionCtrl.DocAdministratif)
//router.post('/bookChambre', GestionCtrl.BookChambre)
//router.get('/bookChambre', GestionCtrl.getBookChambre)
//router.post('/bookSalle', GestionCtrl.BookSalle);
router.post('/inscrit', UserCtrl.inscrit);
router.post('/inscrit', AdminCtrl.inscrit);
router.post('/login', UserCtrl.login);
router.post('/login', AdminCtrl.login);
router.get('/user',  GestionCtrl.getUser);
//router.get()
module.exports = router
//localStorage.setItem('jwtToken', 'myToken')
//const Admin = require('../models/Admin')
//app.use(bodyParser.json())
// Utilisateur enregistré
//app.use(cors());
/*app.get('/requests', (req, res) => {
  const requests = [
    { id: 1, name: 'Congés de vacances' },
    { id: 2, name: 'Autorisation de sortie' },
    { id: 3, name: 'Annonce du début des travaux' },
  ]

  res.json(requests);
})/*const users = [
  {
    username: 'admin',
    password: '$2b$10$3qWgex8eVCF9dGyBbKzzeOEVuwn7vzBSS5C5Ed6EjW6uAVA6QYd0i' // Mot de passe : "password"
  }
];
*/
/*app.listen(3000, () => {
  console.log('Server is running on port 3000')
})*/
/*const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
  },
});
app.post('/api/logout', (req, res) => {
    // Supprime le cookie de session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur de serveur');
      } else {
        res.send('Déconnexion réussie');
      }
    })
  })
  module.exports= axiosInstance;*/
/*
    // Créer un jeton d'accès JWT
    const token = jwt.sign({ username }, 'my_secret_key');

    res.send(token);
  } catch {
    res.status(500).send('Erreur lors de la connexion.');
  }
});

// Route de déconnexion
app.post('/logout', (req, res) => {
  res.send('Vous êtes déconnecté.');
});

app.listen(3000, () => console.log('API en cours d\'écoute sur le port 3000.'));

      // Authentification réussie, envoie la réponse avec le token d'authentification
      res.status(200).json({ token: 'votre_token_d\'authentification' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });
  /// code pour dashbord user 





*/