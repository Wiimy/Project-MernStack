import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ListeInscrits = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/connexion");
          return;
        }
        const response = await axios.get("http://localhost:6001/api/liste_inscrits", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUtilisateurs(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Erreur lors du chargement des utilisateurs");
      }
    };

    fetchUtilisateurs();
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Voulez-vous vraiment vous déconnecter ?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/connexion");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 px-4 pt-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:flex-row">
          <h2 className="text-3xl font-handwriting2 text-purple-900 text-center">
            Liste des utilisateurs inscrits
          </h2>
          <div className="flex gap-3">
            <button
              onClick={handleLogout}
              className="bg-pink-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
            >
              Déconnexion
            </button>
            <Link
              to="/toutesreservations"
              className="bg-purple-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700"
            >
              Voir tous les rendez-vous
            </Link>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-center mb-4 font-medium">{error}</div>
        )}

        {!error && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
              <thead className="bg-vitacareBlue text-white">
                <tr>
                  <th className="px-4 py-2">Nom</th>
                  <th className="px-4 py-2">Prénom</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Date de naissance</th>
                  <th className="px-4 py-2">Rôle</th>
                </tr>
              </thead>
              <tbody>
                {utilisateurs.map((user) => (
                  <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-2">{user.nom}</td>
                    <td className="px-4 py-2">{user.prenom}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{new Date(user.dateNaissance).toLocaleDateString()}</td>
                    <td className="px-4 py-2 capitalize">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListeInscrits;
