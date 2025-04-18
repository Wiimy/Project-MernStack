import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-200 via-purple-200 to-purple-400 shadow-md py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-handwriting text-purple-700">VitaCare</h1>
        <nav className="space-x-6">
          <Link to="/home" className="text-purple-700 font-semibold hover:text-pink-600">
            Accueil
          </Link>
          <Link to="/connexion" className="text-purple-700 font-semibold hover:text-pink-600">
            Connexion
          </Link>
          <Link to="/inscription" className="text-purple-700 font-semibold hover:text-pink-600">
            Inscription
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
