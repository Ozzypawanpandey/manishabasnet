
import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../ui/section-heading';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-12">
      <SectionHeading
        overline="Professional History"
        title="Work Experience"
        description="My journey in the professional world"
      />
      
      <motion.div 
        className="mt-8 bg-white p-8 rounded-2xl border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Briefcase size={20} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Samsung Experienced Consultant</h3>
            <p className="text-muted-foreground">Rolling Plans Pvt. Ltd.</p>
          </div>
          
          <div className="md:text-right">
            <div className="text-sm font-medium text-primary">Oct 2023 - Present</div>
            <div className="text-sm text-muted-foreground">Gorkha, Nepal</div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border space-y-4">
          <p className="text-muted-foreground">
            Currently employed as an SEC for Samsung through Rolling Plans Pvt.Ltd. specializing in assisting customers with Samsung products, boosting sales, and ensuring excellent customer satisfaction.
          </p>
          
          <div className="space-y-2">
            <h4 className="font-medium">Key Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Provide comprehensive product information and demonstrations to customers</li>
              <li>Identify customer needs and recommend appropriate Samsung products</li>
              <li>Maintain product displays and ensure proper merchandising</li>
              <li>Meet sales targets and track performance metrics</li>
              <li>Stay updated on new product releases and features</li>
              <li>Resolve customer inquiries and address product concerns</li>
              <li>Build relationships with potential and existing customers</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Consistently exceeded monthly sales targets</li>
              <li>Developed strong product knowledge across Samsung's ecosystem</li>
              <li>Maintained high customer satisfaction ratings</li>
              <li>Contributed to store's overall sales growth</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
