import React, { Fragment, useEffect, useState } from 'react';
import BlockContent from "@sanity/block-content-to-react";

import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { getClient } from '../../lib/sanity.client';

const Terms = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacyData = async () => {
      try {
        const client = getClient(); // Get your Sanity client instance
        const query = `*[_type == "termsAndConditions"][0]`;
        const data = await client.fetch(query);
        console.log("data:", data);
        setTermsAndConditions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching privacy data:', error);
        setLoading(false);
      }
    };

    fetchPrivacyData();
  }, []);

  if (loading) {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={"Termes et Conditions d'utilisation"} pagesub={"Politique de confidentialité"} />
            <div className="container">
              <p>Loading...</p>
            </div>
            <Footer ftClass={'s2'} />
            <Scrollbar />
        </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={termsAndConditions?.title || "Termes et Conditions d'utilisation"} pagesub={"Politique de confidentialité"} />
        <div className="container text-justify prose lg:prose-xl md:p-24 p-12">
          {termsAndConditions?.content && (
            <BlockContent blocks={termsAndConditions?.content} />
          )}
        </div>
      <Footer ftClass={'s2'} />
      <Scrollbar />
    </Fragment>
  );
};

export default Terms;