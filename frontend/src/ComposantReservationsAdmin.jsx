import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ComposantReservationsAdmin = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/connexion");
          return;
        }

        const response = await axios.get("http://localhost:6001/api/reservations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReservations(response.data);
        setLoading(false);
      } catch (err) {
        setError(
          err.response?.data?.message || "Erreur lors du chargement des réservations"
        );
        setLoading(false);
        if (err.response?.status === 403) {
          navigate("/non-autorise");
        }
      }
    };

    fetchReservations();
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Voulez-vous vraiment vous déconnecter ?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/connexion");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  if (loading)
    return <div className="text-center p-4 text-gray-600">Chargement en cours...</div>;

  if (error) return <div className="text-center p-4 text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative text-center mb-6">
        <h2 className="text-2xl font-handwriting2 text-purple-800">Tous les rendez-vous</h2>
        <button
          onClick={handleLogout}
          className="absolute top-0 right-0 mt-2 mr-4 px-4 py-2 bg-pink-500 text-white rounded"
        >
          Déconnexion
        </button>
        <Link
          to="/liste_inscrits"
          className="mt-4 inline-block px-4 py-2 bg-purple-500 text-white rounded"
        >
          Voir tous les utilisateurs inscrits
        </Link>
      </div>

      {reservations.length === 0 ? (
        <p className="text-center py-6 text-gray-600">Aucune réservation trouvée.</p>
      ) : (
        <table className="w-full table-auto mt-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border-b">Patient</th>
              <th className="px-4 py-2 text-left border-b">Médecin</th>
              <th className="px-4 py-2 text-left border-b">Date</th>
              <th className="px-4 py-2 text-left border-b">Heure</th>
              <th className="px-4 py-2 text-left border-b">Statut</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id} className="border-b">
                <td className="px-4 py-2">
                  {reservation.patientId?.nom} {reservation.patientId?.prenom}
                </td>
                <td className="px-4 py-2">
                  {reservation.doctorId?.nom} {reservation.doctorId?.prenom}
                </td>
                <td className="px-4 py-2">{formatDate(reservation.date)}</td>
                <td className="px-4 py-2">{reservation.hour}</td>
                <td className="px-4 py-2">{reservation.status || "En attente"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ComposantReservationsAdmin;
