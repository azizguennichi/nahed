const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// Créer le modèle pour les services
const DocAdministratif = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  centreAction: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const AutoSortie = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  dateSortie: {
    type: Date,
    required: true,
  },
  heureSortie: {
    type: Date,
    required: true,
  },
  heureRetour: {
    type: Date,
    required: true,
  },
  raison: {
    type: String,
    required: true,
  },
});
const CongeVacance = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  centreAction: {
    type: String,
    required: true,
  },
  debutConge: {
    type: Date,
    required: true,
  },
  finConge: {
    type: Date,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const AutoQuitterReservation = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  dateSortie: {
    type: Date,
    required: true,
  },
  heureSortie: {
    type: Date,
    required: true,
  },
  heureRetour: {
    type: Date,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  raison: {
    type: String,
    required: true,
  },
});

const DebutTravaux = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  debutTravail: {
    type: Date,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const Chambre = new Schema({
  nameChambre: {
    type: Number,
    required: true,
  },
  nbrlit: {
    type: Number,
    required: true,
  },
  nbrtable: {
    type: Number,
    required: true,
  },
  nbrchaise: {
    type: Number,
    required: true,
  },
  etat: {
    type: Boolean,
    required: true,
  },
});
const BookChambre = new Schema({
  nameComplet: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  nbrPersonne: {
    type: Number,
    required: true,
  },
  entre: {
    type: Date,
    required: true,
  },
  sortie: {
    type: Date,
    required: true,
  },
});
const BookSalle = new Schema({
  nameComplet: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  nbrPersonne: {
    type: Number,
    required: true,
  },
  heureEntre: {
    type: Date,
    required: true,
  },
  HeureSortie: {
    type: Date,
    required: true,
  },
  objectif: {
    type: String,
    required: true,
  },
});
const Salle = new Schema({
  nameSalle: {
    type: String,
    required: true,
  },
  capacite: {
    type: Number,
    required: true,
  },
  heureOuvert: {
    type: Date,
    required: true,
  },
  heureFerme: {
    type: Date,
    required: true,
  },
  etat: {
    type: Boolean,
    required: true,
  },
});
const Foyer = new Schema({
  name: {
    type: String,
    required: true,
  },
  nbrchambretotal: {
    type: Number,
    required: true,
  },
  nbrchambrevide: {
    type: Number,
    required: true,
  },
  nbrchambrereser: {
    type: Number,
    required: true,
  },
  heureouvert: {
    type: Date,
    required: true,
  },
  heureferme: {
    type: Date,
    required: true,
  },
});

const GestionModel = model(
  "Service",
  new Schema({ any: {} }, { discriminatorKey: "type" })
);
GestionModel.discriminator("DocAdministratif", DocAdministratif);
GestionModel.discriminator("AutoSortie", AutoSortie);
GestionModel.discriminator("CongeVacance", CongeVacance);
GestionModel.discriminator("AutoQuitterReservation", AutoQuitterReservation);
GestionModel.discriminator("DebutTravaux", DebutTravaux);
GestionModel.discriminator("BookSalle", BookSalle);
GestionModel.discriminator("BookChambre", BookChambre);
GestionModel.discriminator("Salle", Salle);
GestionModel.discriminator("Chambre", Chambre);
GestionModel.discriminator("Foyer", Foyer);
module.exports = GestionModel;

// Exemple d'utilisation du modèle User
/*const admin = new User({
  username: 'nahed',
  email: 'nahedghali77@gmail.com',
  password: 'nahoudagh@'
});
admin.save((err, admin) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Admin créé avec succès:', admin);
  }
});*/
