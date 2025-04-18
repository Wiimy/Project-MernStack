import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ComposantConnexion = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:6001/api/connexion", { email, pass });

      if (response.data.token) {
        setSuccessMessage("Connexion réussie !");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);

        setTimeout(() => {
          if (response.data.user.role === "admin") navigate("/liste_inscrits");
          else if (response.data.user.role === "patient") navigate("/mes-reservations");
          else if (response.data.user.role === "medecin") navigate("/mes-rendez-vous");
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 px-4">
      
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
         
          <h3 className="text-3xl font-handwriting2 text-center text-gray-700 mb-4">
            Connexion
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Mot de passe :</label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}
            {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}

            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition"
            >
              Se connecter
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-600">
            Pas encore de compte ?{" "}
            <a href="/inscription" className="text-purple-600 font-semibold hover:underline">
              Inscrivez-vous ici
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ComposantConnexion;
