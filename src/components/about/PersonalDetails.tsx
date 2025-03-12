
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/section-heading';

const PersonalDetails: React.FC = () => {
  const details = [
    { label: "Full Name", value: "Manisha Basnet" },
    { label: "Date of Birth (B.S.)", value: "2058-01-19" },
    { label: "Nationality", value: "Nepali" },
    { label: "Gender", value: "Female" },
    { label: "Religion", value: "Hindu" },
    { label: "Father's Name", value: "Ganesh Bahadur Basnet" },
    { label: "Mother's Name", value: "Apsara Basnet" },
    { label: "Permanent Address", value: "Gorkha-3, Gorkha" },
    { label: "Contact Address", value: "Gorkha-5, Gorkha" },
    { label: "Email", value: "manisha.basnet4090@gmail.com" },
    { label: "Cell Number", value: "+977-9823324324" },
  ];

  return (
    <section className="py-12">
      <SectionHeading
        overline="Personal Information"
        title="About Me"
        description="Get to know me better"
      />
      
      <motion.div 
        className="mt-8 bg-white p-8 rounded-2xl border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {details.map((detail, index) => (
            <motion.div 
              key={detail.label}
              className="border-b border-border pb-3 flex justify-between"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="font-medium">{detail.label}:</span>
              <span className="text-muted-foreground">{detail.value}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-8 pt-6 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            I hereby declare that the above mentioned information about me is true to the best of my knowledge.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PersonalDetails;
