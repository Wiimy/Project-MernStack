import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ComposantInscription = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:6001/api/inscription", {
        nom,
        prenom,
        email,
        pass,
        dateNaissance,
        role,
      });

      if (response.data.message === "Utilisateur crée") {
        setSuccessMessage("Inscription réussie !");
        setTimeout(() => navigate("/connexion"), 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-handwriting2 text-center  text-gray-700 mb-4">Inscription</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="date"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="patient">Patient</option>
              <option value="medecin">Médecin</option>
              <option value="admin">Administrateur</option>
            </select>

            {error && <div className="text-red-500 text-sm">{error}</div>}
            {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              S'inscrire
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Vous avez déjà un compte ?{" "}
            <a href="/connexion" className="text-pink-600 font-semibold hover:underline">
              Connectez-vous ici
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ComposantInscription;
