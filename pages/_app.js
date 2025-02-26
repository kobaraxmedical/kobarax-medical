import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/icomoon.css';
import '../styles/themify-icons.css';
import '../styles/sass/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../store/index';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>KOBARAX MEDICAL Sarl - Une Technologie Médicale De Pointe</title>
        <meta name="description" content="KOBARAX MEDICAL Sarl offre des solutions médicales de pointe pour un plateau médical à la hauteur de vos attentes." />
        <meta name="keywords" content="médecine, technologie médicale, équipements médicaux, santé, innovation médicale" />
        <meta name="author" content="KOBARAX MEDICAL Sarl" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Language" content="fr" />
        <meta property="og:title" content="KOBARAX MEDICAL Sarl - Technologie Médicale De Pointe" />
        <meta property="og:description" content="Découvrez les solutions de KOBARAX MEDICAL pour un plateau médical avancé." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kobarax-medical.com" />
        <meta property="og:image" content="https://www.kobarax-medical.com/images/about-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KOBARAX MEDICAL Sarl" />
        <meta name="twitter:description" content="Technologie médicale innovante pour améliorer les soins de santé." />
        <meta name="twitter:image" content="https://www.kobarax-medical.com/images/about-1.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD pour le SEO local */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "KOBARAX MEDICAL Sarl",
            "description": "KOBARAX MEDICAL Sarl, filiale de KOBARAX Co., Ltd. (Japon), est votre partenaire en Afrique de l'Ouest pour des équipements médicaux de qualité. Basés au Sénégal, nous produisons, vendons et assurons la maintenance de dispositifs fiables pour les professionnels de la santé. Notre gamme d'équipements, issue de fabricants de renom, est soutenue par une équipe d'ingénieurs et de techniciens cumulant plus de 30 ans d'expertise. Nous garantissons un service réactif et efficace, permettant à nos clients de se concentrer sur leurs patients.",
            "url": "https://www.kobarax-medical.com",
            "image": "https://www.kobarax-medical.com/images/about-1.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dakar Plateau",
              "addressLocality": "Dakar",
              "addressCountry": "SN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+221-32-824-64-86",
              "contactType": "Service Client"
            }
          })}
        </script>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
