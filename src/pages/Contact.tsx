
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import SectionHeading from '@/components/ui/section-heading';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container px-6 md:px-12 py-16">
        <SectionHeading
          overline="Get In Touch"
          title="Contact Me"
          description="Have a question or want to work together? Feel free to reach out."
          align="center"
          className="md:mx-auto md:max-w-2xl"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <ContactInfo />
          </div>
          
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
