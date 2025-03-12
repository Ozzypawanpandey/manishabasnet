
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ExperienceSection from '@/components/resume/ExperienceSection';
import SectionHeading from '@/components/ui/section-heading';

const Experience = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container px-6 md:px-12 py-16">
        <SectionHeading
          overline="Career Path"
          title="My Professional Journey"
          description="A detailed look at my work experience and professional growth"
        />
        
        <ExperienceSection />
        
        <div className="py-12">
          <SectionHeading
            overline="Growth & Achievements"
            title="Professional Development"
            description="Key milestones and skills acquired throughout my career"
          />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <p className="text-muted-foreground">Consistently exceeded monthly sales targets, contributing to overall store performance.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <p className="text-muted-foreground">Developed comprehensive knowledge of Samsung's product ecosystem, becoming a trusted advisor to customers.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <p className="text-muted-foreground">Maintained excellent customer satisfaction ratings through attentive service and problem-solving.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <p className="text-muted-foreground">Built strong relationships with repeat customers, enhancing long-term business value.</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <p className="text-muted-foreground">Enhanced product knowledge through continuous learning and staying updated with new technologies.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <p className="text-muted-foreground">Developed advanced customer needs assessment skills to provide tailored solutions.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <p className="text-muted-foreground">Improved sales techniques through practical experience and mentorship.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <p className="text-muted-foreground">Strengthened communication abilities across different customer demographics.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
