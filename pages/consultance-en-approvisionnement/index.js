import Image from 'next/image'
import Link from "next/link";
import React, { Fragment } from "react";

import Footer from "../../components/footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";

const Page = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={'Consultance en Approvisionnement'} pagesub={"Consultance en Approvisionnement"} />
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
        </section>

        <section className="bg-white rounded-xl shadow-lg p-12 text-center md:flex md:items-center md:space-x-8">
          <div className="md:flex-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {"Consultance en Approvisionnement en Tout Genre d'Equipement Medicaux"}
            </h3>
            <p className="text-lg text-justify text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {"En tant qu’entreprise spécialisée dans la vente et l’entretien d’équipements médicaux, nous comprenons l’importance de solutions rentables pour les prestataires de soins de santé. C’est pourquoi nous proposons des services de conseil pour vous assurer d’obtenir le meilleur rapport qualité-prix pour votre investissement. Notre équipe d’experts travaillera avec vous pour identifier vos besoins uniques et vous recommander les solutions d’équipement médical les plus adaptées à votre budget et à vos exigences. Nous nous engageons à fournir le meilleur service et le meilleur soutien possible pour vous aider à améliorer les soins aux patients tout en maîtrisant les coûts, de l'acquisition à la réforme."}
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 md:w-1/3 mt-8 md:mt-0">
            <Image
              src="/images/property-consultant.jpg"
              alt="Image représentative du Sénégal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <div className="bg-[#1e6c92] grid md:grid-cols-2 mt-16 gap-8 items-center rounded-xl shadow-lg p-12">
          <div className="space-y-4">
            <p className="text-xl font-bold text-center leading-relaxed text-gray-100">
              {`Vous avez un projet d'acquisition d'équipements médicaux pour votre structure de santé? Consultez-nous maintenant pour tous vos besoins.`}
            </p>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/kobarax-medical-4.png"
              alt="Equipment industriel d'assemblage"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <section className="bg-white rounded-xl mt-16 shadow-lg p-12 text-center md:flex md:items-center md:space-x-8">
          <div className="md:flex-1">
            <p className="text-lg text-justify text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {"Nous vous offrons aussi un service personnalisé qui vous garantit des équipements de haute qualité avec un coût total de possession optimal."}
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 md:w-1/3 mt-8 md:mt-0">
            <Image
              src="/images/kobarax-medical-3.png"
              alt="Image représentative du Sénégal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <h3 className="text-3xl text-center font-bold text-gray-800 mb-6 mt-16">
          {"Vous souhaitez approfondir cette opportunité de partenariat, n'hésitez pas à nous contacter."}
        </h3>
        <div className="bg-[#1e6c92] text-center mt-8 items-center rounded-xl shadow-lg p-2">
          <Link href="/contact" className="text-xl hover:underline font-bold text-center leading-relaxed text-gray-100">
            {"Contactez-nous maintenant"}
          </Link>
        </div>
      </main>
      <Footer/>
      <Scrollbar />
    </Fragment>
  );
};

export default Page;