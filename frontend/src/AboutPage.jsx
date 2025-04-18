import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-handwriting text-[#FDCB82] mb-8 text-center">
          À propos de VitaCare
        </h1>

        <p className="text-lg text-[#B0BEC5] leading-relaxed mb-6">
          <strong className="text-[#FDCB82]">VitaCare</strong> est une plateforme innovante qui facilite la gestion des rendez-vous médicaux.
          Notre objectif est d'offrir une solution simple et rapide pour réserver des consultations médicales,
          en mettant l'accent sur la satisfaction des patients et l'efficacité des professionnels de santé.
        </p>

        <p className="text-lg text-[#B0BEC5] leading-relaxed">
          Nous travaillons en collaboration avec des médecins, des cliniques et des hôpitaux pour assurer
          une prise en charge rapide et de qualité. Que vous soyez à la recherche d'un médecin généraliste,
          d'un spécialiste ou d'un professionnel de santé, <strong className="text-[#FDCB82]">VitaCare</strong> est là pour vous aider à trouver
          le bon praticien et à réserver un rendez-vous facilement.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
