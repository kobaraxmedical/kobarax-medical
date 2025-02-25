import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import "../styles/icomoon.css";
import '../styles/themify-icons.css';
import '../styles/sass/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";

import { persistor,store } from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>KOBARAX MEDICAL Sarl - Une Technologie Médicale De Pointe, Pour Un Plateau Médical À La Hauteur.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
      </Head>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        <ToastContainer />
      </PersistGate>
    </Provider>
    </div>

  )
}

export default MyApp