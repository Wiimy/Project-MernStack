import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ComposantInscription from "./ComposantInscription";
import ComposantConnexion from "./ComposantConnexion";
import ListeInscrits from "./ComposantInscrits";
import MesReservations from "./ComposantReservations";
import ComposantReservationsMedecin from "./ComposantReservationsMedecin";
import ComposantReservationsAdmin from "./ComposantReservationsAdmin";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import PrivacyPage from "./PrivacyPage";
import TermsPage from "./TermsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes */}
        <Route path="/inscription" element={<ComposantInscription />} />
        <Route path="/connexion" element={<ComposantConnexion />} />
        <Route path="/liste_inscrits" element={<ListeInscrits />} />
        <Route path="/mes-reservations" element={<MesReservations />} />
        <Route path="/mes-rendez-vous" element={<ComposantReservationsMedecin />} />
        <Route path="/toutesreservations" element={<ComposantReservationsAdmin />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/privacy-page" element={<PrivacyPage/>} />
        <Route path="/terms-page" element={<TermsPage />} />



        
        {/* Redirection vers la page d'accueil */}
        <Route path="/home" element={<Home />} />

        {/* Redirection vers l'accueil par défaut */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Composants Header et Footer */}
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
