import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Link from "next/link";

const ServicesApresVente = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle
        pageTitle={"Services Après-Vente"}
        pagesub={"Nos engagements pour votre satisfaction"}
      />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Introduction Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Votre satisfaction, notre priorité
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {`Chez Kobarax Medical, nous ne considérons pas la vente comme une fin, mais comme le début d'une relation durable. C'est pourquoi nous mettons à votre disposition un service après-vente complet et réactif, conçu pour répondre à tous vos besoins.`}
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Nos services à votre disposition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1: Maintenance & Repairs */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-wrench text-4xl text-[#1e6c92] mb-4"></i>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Maintenance et Réparations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe de techniciens qualifiés assure la maintenance et la
                réparation de vos équipements, avec des interventions rapides et
                efficaces.
              </p>
            </div>

            {/* Service 2: Technical Assistance */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <i className="fas fa-headset text-4xl text-[#1e6c92] mb-4"></i>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Assistance Technique
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`Une question, un problème ? Notre service d'assistance technique est disponible pour vous accompagner et vous apporter des solutions personnalisées.`}
              </p>
            </div>

            {/* Service 3: Updates & Upgrades */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-sync-alt text-4xl text-[#1e6c92] mb-4"></i>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Mises à Jour et Évolutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`Bénéficiez des dernières mises à jour et évolutions de vos produits, afin d'optimiser leurs performances et prolonger leur durée de vie.`}
              </p>
            </div>

            {/* Service 4: Spare Parts */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <i className="fas fa-shipping-fast text-4xl text-[#1e6c92] mb-4"></i>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Pièces de Rechange
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`Nous vous fournissons rapidement les pièces de rechange d'origine nécessaires, pour une réparation sans compromis sur la qualité.`}
              </p>
            </div>
          </div>
        </section>
        {/* Contact Us Section */}
        <section className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {`Vous souhaitez approfondir cette opportunité de partenariat, n'hésitez pas à nous contacter. `}
          </h3>
          <div className="bg-[#1e6c92] rounded-xl shadow-lg p-2 inline-block">
            <Link
              href="/contact"
              className="text-xl hover:underline font-bold text-gray-100 px-4 py-2 rounded transition-colors duration-300 hover:bg-[#1a5979]"
            >
              Contactez-nous maintenant
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ServicesApresVente;