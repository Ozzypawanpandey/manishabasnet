
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/section-heading';

const AboutContent: React.FC = () => {
  return (
    <section className="py-12">
      <SectionHeading
        overline="Professional Profile"
        title="My Story"
        description="A journey of growth and development"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <motion.div 
          className="col-span-3 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            Welcome to my professional portfolio. I'm Manisha Basnet, a Samsung Experience Consultant based in Gorkha, Nepal. My journey in customer service and technology began with a passion for connecting people with solutions that enhance their daily lives.
          </p>
          
          <p className="text-muted-foreground">
            With a background in Business Studies from Drabya Shah Multiple Campus, I've developed a strong foundation in understanding customer needs and business operations. Since October 2023, I've been working with Samsung through Rolling Plans Pvt. Ltd., where I specialize in guiding customers through Samsung's diverse product ecosystem.
          </p>
          
          <p className="text-muted-foreground">
            My approach combines technical product knowledge with interpersonal skills to create meaningful customer connections. I believe that exceptional customer service goes beyond simply explaining features—it's about understanding needs, solving problems, and building relationships.
          </p>
          
          <p className="text-muted-foreground">
            As technology continues to evolve rapidly, I remain committed to staying current with the latest advancements and helping customers navigate an increasingly complex digital landscape. I take pride in my ability to translate technical information into practical advice that empowers customers to make confident decisions.
          </p>
        </motion.div>
        
        <motion.div 
          className="col-span-2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="sticky top-24">
            <div className="aspect-[3/4] rounded-2xl bg-secondary overflow-hidden">
              {/* This would typically contain a profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-lg">
                Profile Image
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-border bg-background"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
