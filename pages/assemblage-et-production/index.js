import { CheckCircle, Factory, Settings, Shield } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import React from "react";

import AssemblageProduction from "../../components/AssemblageProduction";
import Footer from "../../components/footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";

const Page = () => {
  const productionFeatures = [
    {
      icon: Factory,
      title: "Processus de Production Avancé",
      description: "Nous utilisons des technologies de pointe pour garantir la précision et la qualité de chaque équipement médical, en intégrant les dernières innovations technologiques."
    },
    {
      icon: Settings,
      title: "Assemblage Précis",
      description: "Chaque composant est assemblé avec une attention méticuleuse aux détails, en suivant des protocoles stricts et des normes internationales de fabrication."
    },
    {
      icon: CheckCircle,
      title: "Contrôle Qualité Rigoureux",
      description: "Nos procédures de test exhaustives à chaque étape de la production garantissent la fiabilité, la sécurité et la performance de nos équipements médicaux."
    },
    {
      icon: Shield,
      title: "Conformité Réglementaire",
      description: "Nous respectons intégralement les normes internationales les plus exigeantes, assurant la conformité et la sécurité de chaque équipement produit."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageTitle
        pageTitle={'Assemblage et Production'}
        pagesub={"Assemblage et Production d'Équipements Médicaux"}
      />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Notre Expertise en Production {"d'Équipements"} Médicaux
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Nous combinons innovation technologique, précision {"d'ingénierie"} et rigueur médicale 
              pour produire des équipements de santé qui répondent aux plus hauts standards de qualité et de performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productionFeatures.map((feature, index) => (
              <AssemblageProduction
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-12 text-center md:flex md:items-center md:space-x-8">
          <div className="md:flex-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Notre Engagement envers la Production au Sénégal
            </h3>
            <p className="text-lg text-justify text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {"Nous nous engageons à produire des équipements médicaux de haute qualité au Sénégal en utilisant un processus méticuleux qui est efficace, sûr et rentable. Nous privilégions la qualité, la sécurité et l'efficacité. Notre processus commence par l'identification de l'équipement nécessaire et l'achat de matières premières et de composants de haute qualité compatibles avec le processus de fabrication. Avec l’aide de nos techniciens qualifiés et d’équipements de pointe, nous comptons assembler les équipements avec la plus grande précision et soin. Nous mettrons en œuvre des mesures de contrôle de qualité strictes tout au long du processus de fabrication pour garantir les normes de qualité les plus élevées. Nous nous engageons à minimiser les déchets et à optimiser l'utilisation des ressources afin de minimiser l'impact environnemental. Nos plans d'assemblage et de production sont conçus pour répondre aux besoins de nos clients tout en maintenant les plus hauts standards d'excellence manufacturière."}
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 md:w-1/3 mt-8 md:mt-0">
            <Image
              src="/images/senegal-in-map.jpg?height=600&width=800"
              alt="Image représentative du Sénégal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>
        <div className="bg-[#1e6c92] grid md:grid-cols-2 mt-16 gap-8 items-center rounded-xl shadow-lg p-12">
        <div className="space-y-4">
          <p className="text-xl text-justify font-bold text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
            {`Avec la tendance vers la miniaturisation des produits et leur complexité 
            croissante, des solutions de collage, de soudage et d'assemblage ultra-précises 
            sont indispensables pour assurer le bon fonctionnement des appareils de nouvelle 
            génération. Aussi la frontière entre l'assemblage automatisé et l'inspection de 
            la qualité s'estompe-t-elle de plus en plus.`}
          </p>
          <p className="text-xl font-bold text-center leading-relaxed text-gray-100">
            {`Travaillons ensemble pour faire une réelle différence dans la vie de ceux qui en ont le plus besoin.`}
          </p>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/images/kobarax-medical-9.png"
            alt="Equipment industriel d'assemblage"
            width={900}
            height={600}
            objectFit="cover"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
      <h3 className="text-3xl text-center font-bold text-gray-800 mb-6 mt-16">
            {"Vous souhaitez approfondir cette opportunité de partenariat, n'hésitez pas à nous contacter. "}
            </h3>
      <div className="bg-[#1e6c92] text-center mt-8 items-center rounded-xl shadow-lg p-2">
          <Link href="/contact" className="text-xl hover:underline font-bold text-center leading-relaxed text-gray-100">
            {"Contactez-nous maintenant"}
          </Link>
      </div>
      </main>
      
      <Footer />
      <Scrollbar />
    </div>
  );
};

export default Page;