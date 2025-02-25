import Image from 'next/image';
import React from 'react';

import abImg3 from '/public/images/about/icon.png';
import abImg from '/public/images/about-1.png';

const About = (props) => {
    const youtubeVideoId = "IPaEClPIsEk";
  return (
    <>
    <section className="about-section separator-padding bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
         
          {/* Texte à Droite */}
          <div className="lg:w-1/2 space-y-4">
            <div className="flex items-center mb-4 space-x-2">
              <Image src={abImg3} alt="" width={40} height={40} />
              <h2 className="text-2xl font-semibold text-gray-800">Une Technologie Médicale De Pointe.</h2>
            </div>
             <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {"KOBARAX MEDICAL Sarl, filiale de KOBARAX Co., Ltd. (Japon), est votre partenaire en Afrique de l'Ouest pour des équipements médicaux de qualité. Basés au Sénégal, nous produisons, vendons et assurons la maintenance de dispositifs fiables pour les professionnels de la santé. Notre gamme d'équipements, issue de fabricants de renom, est soutenue par une équipe d'ingénieurs et de techniciens cumulant plus de 30 ans d'expertise. Nous garantissons un service réactif et efficace, permettant à nos clients de se concentrer sur leurs patients."}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
              {"Avec notre engagement envers l'excellence et l'innovation, nous visons à améliorer les soins de santé et à soutenir le bien-être de vos communautés."}
              </p>
          </div>
           {/* Image  à gauche (après le texte en petit écran) */}
         <div className="lg:w-1/2 relative rounded-lg shadow-md overflow-hidden lg:order-first">
            <div className="relative h-0 pb-[56.25%]">
                <Image
                  src={abImg}
                  alt="Notre équipe médicale au travail"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
      {/* Section pour la Vidéo YouTube */}
    <section className="video-section separator-padding bg-gray-200"> {/* fond légèrement gris pour le contraste */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-lg shadow-md overflow-hidden">
          <div className="relative h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;