import BlockContent from "@sanity/block-content-to-react";
import React, { Fragment, useEffect, useState } from 'react';

import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { getClient } from '../../lib/sanity.client';

const Privacy = () => {
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacyData = async () => {
      try {
        const client = getClient();
        const query = `*[_type == "privacyPolicyPage"][0]`;
        const data = await client.fetch(query);
        setPrivacyData(data);
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
        <PageTitle pageTitle={'Politique de confidentialité'} pagesub={'Politique de confidentialité'} />
        <div className="container text-justify md:p-24 p-12">
          <p>{`Politique de confidentialité de KOBARAX MEDICAL SARL`}</p>
        </div>
        <Footer ftClass={'s2'} />
        <Scrollbar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      <PageTitle
        pageTitle={privacyData?.title || 'Politique de confidentialité'}
        pagesub={'Politique de confidentialité'}
      />
      <div className="container text-justify md:p-24 p-12 prose lg:prose-xl">
        {privacyData?.content && (
          <BlockContent blocks={privacyData?.content} />
        )}
      </div>
      <Footer ftClass={'s2'} />
      <Scrollbar />
    </Fragment>
  );
};

export default Privacy;