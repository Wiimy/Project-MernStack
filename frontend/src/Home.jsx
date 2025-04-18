import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [section, setSection] = useState("default");

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold font-handwriting1 text-purple-800 mb-4">VitaCare</h1>
        <h2 className="text-3xl text-gray-800 font-semibold mb-2">
          Bienvenue sur votre espace de santé
        </h2>
        <p className="text-lg text-gray-700 italic max-w-xl mb-6">
          Connectez-vous ou créez un compte pour gérer vos rendez-vous médicaux en toute simplicité.
        </p>

        <div className="space-x-4">
          <a
            href="/connexion"
            className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Connexion
          </a>
          <a
            href="/inscription"
            className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition"
          >
            Inscription
          </a>
        </div>
      </main>

      {/* Section dynamique */}
      <section className="w-full max-w-4xl mx-auto my-10 px-6 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg overflow-y-auto max-h-[300px]">
        <h3 className="text-2xl font-handwriting1 text-purple-800 mb-4">
          {section === "about" && "À propos"}
          {section === "privacy" && "Politique de confidentialité"}
          {section === "terms" && "Conditions d'utilisation"}
        </h3>
        <div className="text-gray-700 space-y-4 text-sm text-justify">
          {section === "about" && (
            <>
              <p>
                VitaCare est une plateforme dédiée à la gestion simplifiée des rendez-vous médicaux.
                Notre objectif est de connecter patients, médecins et professionnels de santé de manière fluide,
                en assurant confort, sécurité et efficacité.
              </p>
              <p>
                Nous croyons que la technologie peut améliorer l’accès aux soins et la qualité de vie de chacun.
                Rejoignez notre communauté pour une santé plus connectée.
              </p>
            </>
          )}
          {section === "privacy" && (
            <>
              <p>
                Nous respectons votre vie privée. Toutes les données personnelles que vous nous confiez sont traitées de façon
                confidentielle, conformément à la réglementation en vigueur.
              </p>
              <p>
                Aucune de vos informations ne sera partagée à des tiers sans votre consentement explicite.
              </p>
              <p>
                Vous pouvez à tout moment accéder, modifier ou supprimer vos données depuis votre compte.
              </p>
            </>
          )}
          {section === "terms" && (
            <>
              <p>
                En utilisant VitaCare, vous acceptez nos conditions d’utilisation. Vous vous engagez à fournir des informations exactes
                et à respecter les règles de conduite sur notre plateforme.
              </p>
              <p>
                Toute utilisation frauduleuse ou abusive entraînera la suspension du compte concerné.
              </p>
              <p>
                VitaCare se réserve le droit de modifier les présentes conditions à tout moment.
              </p>
            </>
          )}
          {section === "default" && (
            <p className="text-center text-gray-500">Cliquez sur un lien dans le footer pour voir plus d’informations.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer setSection={setSection} />
    </div>
  );
};

export default Home;
