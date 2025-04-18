const Footer = ({ setSection }) => {
  return (
    <footer className="bg-purple-400 py-6 mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center">
          <h3 className="text-xl font-handwriting1 text-purple-900">Contact</h3>
          <p className="text-sm text-gray-800 " >E-mail : contact@vitacare.com</p>
          <p className="text-sm text-gray-800 ">Téléphone : +212 6 12 34 56 78</p>
          <p className="text-sm text-gray-800 ">Adresse : 76 avenue Annakhil Rabat, Maroc</p>
        </div>
      <div>
  <p className="text-1sm  text-gray-700 font-light ">
    © 2025 <span className="font-semibold text-purple-600 font-handwriting1">VitaCare</span>. Tous droits réservés.
  </p>

      </div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <button onClick={() => setSection("about")} className="text-purple-900 hover:underline font-handwriting1 text-lg">À propos</button>
          <button onClick={() => setSection("privacy")} className="text-purple-900 hover:underline font-handwriting1 text-lg">Confidentialité</button>
          <button onClick={() => setSection("terms")} className="text-purple-900 hover:underline font-handwriting1 text-lg">Conditions</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
