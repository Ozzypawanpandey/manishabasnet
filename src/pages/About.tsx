
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import AboutContent from '@/components/about/AboutContent';
import PersonalDetails from '@/components/about/PersonalDetails';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container px-6 md:px-12 py-16">
        <AboutContent />
        <PersonalDetails />
      </div>
    </Layout>
  );
};

export default About;
