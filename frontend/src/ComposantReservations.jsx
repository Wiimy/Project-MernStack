import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MesReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    doctorId: "",
    date: "",
    hour: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/connexion");
          return;
        }

        const resResponse = await axios.get("http://localhost:6001/api/mes-reservations", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setReservations(resResponse.data);

        const docResponse = await axios.get("http://localhost:6001/api/liste_medecins", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDoctors(docResponse.data);
      } catch (err) {
        setError(err.response?.data?.message || "Erreur lors du chargement des données");
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Voulez-vous vraiment vous déconnecter ?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/connexion");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:6001/api/reserver", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setSuccessMessage("Réservation ajoutée avec succès");
      setShowForm(false);
      setFormData({ doctorId: "", date: "", hour: "" });

      const resResponse = await axios.get("http://localhost:6001/api/mes-reservations", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReservations(resResponse.data);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'ajout de la réservation");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 px-4 pt-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:flex-row">
          <h2 className="text-3xl font-handwriting2 text-purple-900 text-center">Mes Rendez-vous</h2>
          <button
            onClick={handleLogout}
            className="bg-pink-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
          >
            Déconnexion
          </button>
        </div>

        {successMessage && (
          <div className="bg-green-200 text-green-700 text-center mb-4 py-2 rounded-lg">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="bg-red-200 text-red-700 text-center mb-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        <div className="text-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className={`text-white px-4 py-2 rounded-lg font-semibold ${showForm ? 'bg-gray-500' : 'bg-purple-400'} hover:bg-purple-700`}
          >
            {showForm ? 'Annuler' : 'Ajouter une réservation'}
          </button>
        </div>

        {showForm && (
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg text-vitacareTeal mb-2">Médecin:</label>
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Sélectionnez un médecin</option>
                  {doctors.map(doctor => (
                    <option key={doctor._id} value={doctor._id}>
                      {doctor.nom} {doctor.prenom} - {doctor.specialite}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-lg text-vitacareTeal mb-2">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg text-vitacareTeal mb-2">Heure:</label>
                <input
                  type="time"
                  name="hour"
                  value={formData.hour}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
              >
                Confirmer la réservation
              </button>
            </form>
          </div>
        )}

        {!error && reservations.length === 0 && !showForm && (
          <div className="text-center text-lg text-vitacareTeal py-6">
            Aucune réservation trouvée.
          </div>
        )}

        {!error && reservations.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full table-auto text-left border border-gray-200 rounded-lg">
              <thead className="bg-vitacareBlue text-white">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Heure</th>
                  <th className="px-4 py-2">Médecin</th>
                  <th className="px-4 py-2">Statut</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map(res => (
                  <tr key={res._id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-2">{new Date(res.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{res.hour}</td>
                    <td className="px-4 py-2">{res.doctorId?.nom} {res.doctorId?.prenom}</td>
                    <td className="px-4 py-2">{res.status || "en attente"}</td>
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

export default MesReservations;
