import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-handwriting text-[#FDCB82] mb-8 text-center">
          Politique de Confidentialité
        </h1>

        <p className="text-lg text-[#B0BEC5] leading-relaxed mb-6">
          Chez <strong className="text-[#FDCB82]">VitaCare</strong>, la confidentialité et la sécurité de vos informations personnelles sont
          notre priorité. Nous collectons uniquement les données nécessaires pour le bon fonctionnement de la plateforme,
          telles que les informations relatives aux rendez-vous et aux utilisateurs.
        </p>

        <p className="text-lg text-[#B0BEC5] leading-relaxed">
          Nous nous engageons à ne jamais vendre, louer ou partager vos données personnelles avec des tiers sans votre consentement explicite.
          Nous mettons en œuvre des mesures de sécurité avancées pour protéger vos informations et nous conformer aux lois de protection
          des données en vigueur.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
