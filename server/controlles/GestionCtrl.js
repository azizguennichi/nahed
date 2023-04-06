const  Gestion=require('../models/GestionModel')
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const GestionCtrl={
    

      CongeVacancee:async (req, res) => {
         const congeVacance = new CongeVacance(req.body);
         if (message.length < 10) {
             return res.status(400).json({ msg: 'Le champ message doit avoir au moins 10 caractères' })}
         try {
           await congeVacance.save()
           res.status(201).json({ message: 'La demande de congé a été créée avec succès' });
         } catch (error) {
           res.status(400).json({ error: error.message })
         }
       },
       AutoQuitterReservation:async (req, res) => {
         const autoQuitter = new AutoQuitterReservation(req.body)
         if (raison.length < 10) {
           return res.status(400).json({ msg: 'Le champ message doit avoir au moins 10 caractères' })}
         try {
             await autoQuitter.save()
             res.status(201).json({ message: 'La demande de quitter a été créée avec succès' });
           } catch (error) {
             res.status(400).json({ error: error.message })
           }
         },
         AutoSortie:async (req, res) => {
             const autoSortie = new AutoSortie(req.body)
             if (raison.length < 10) {
               return res.status(400).json({ msg: 'Le champ message doit avoir au moins 10 caractères' })}
             try {
                 await autoSortie.save()
                 res.status(201).json({ message: 'La demande de sortie a été créée avec succès' });
               } catch (error) {
                 res.status(400).json({ error: error.message })
               }
             },
             DocAdministratif:async (req, res) => {
                 const docAdministratif = new DocAdministratif(req.body);
                 if (message.length < 10) {
                     return res.status(400).json({ msg: 'Le champ message doit avoir au moins 10 caractères' })}
                 try {
                   await docAdministratif.save()
                   res.status(201).json({ message: 'La demande de docAdministratif a été créée avec succès' });
                 } catch (error) {
                   res.status(400).json({ error: error.message })
                 }
               },
               DebutTravaux:async (req, res) => {
                 const debutTravaux = new DebutTravaux(req.body);
                 if (message.length < 10) {
                     return res.status(400).json({ msg: 'Le champ message doit avoir au moins 10 caractères' })}
                 try {
                   await debutTravaux.save()
                   res.status(201).json({ message: 'La demande de debutTravaux a été créée avec succès' });
                 } catch (error) {
                   res.status(400).json({ error: error.message })
                 }
               },
               BookChambre:async (req, res, next) => {
                 const chambre = new BookChambre(req.body)
             
                 try {await chambre.save()
                     res.status(201).json({
                       message: "Reservation created successfully!",
                       reservation: savedReservation
                     });
                   }
                   catch(err ){
                     res.status(500).json({
                       message: "Failed to create !",
                       error: err.message
                     })
                   }
               },
               
               getBookChambre :async (req, res, next) => {
                 BookChambre.find()
                   .then(reservation => {
                     res.status(200).json({
                       message: "Services fetched successfully!",
                       reservation: reservation
                     });
                   })
                   .catch(err => {
                     res.status(500).json({
                       message: "Failed to fetch services!",
                       error: err
                     });
                   });
               },
               BookSalle :async (req, res) => {
                 if (objectif.length < 10) {
                     return res.status(400).json({ msg: 'Le champ message doit avoir au moins 10 caractères' })}
                 try {
                   const Reservation = new BookSalle(req.body);
                   const savedReservation = await Reservation.save();
                   res.json(savedReservation);
                 } catch (err) {
                   console.error(err);
                   res.status(500).send('Erreur serveur')
                 }
               }
      }
    module.exports=GestionCtrl
        


