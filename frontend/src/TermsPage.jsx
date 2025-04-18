import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-handwriting text-[#FDCB82] mb-8 text-center">
          Conditions d'Utilisation
        </h1>

        <p className="text-lg text-[#B0BEC5] leading-relaxed mb-6">
          En utilisant <span className="text-[#FDCB82] font-semibold">VitaCare</span>, vous acceptez les présentes conditions d'utilisation.
          Nous nous réservons le droit de modifier ces conditions à tout moment. Veuillez consulter régulièrement cette page pour prendre
          connaissance des mises à jour.
        </p>

        <p className="text-lg text-[#B0BEC5] leading-relaxed mb-6">
          <strong className="text-[#FDCB82]">Responsabilités de l'utilisateur :</strong> Vous êtes responsable de la gestion de vos rendez-vous
          et des informations fournies lors de la réservation. Toute fausse déclaration peut entraîner l'annulation du rendez-vous.
        </p>

        <p className="text-lg text-[#B0BEC5] leading-relaxed">
          <strong className="text-[#FDCB82]">Propriété intellectuelle :</strong> Tous les droits de propriété intellectuelle liés à la
          plateforme <span className="text-[#FDCB82] font-semibold">VitaCare</span>, y compris le design, le contenu et les fonctionnalités,
          sont la propriété exclusive de VitaCare.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
