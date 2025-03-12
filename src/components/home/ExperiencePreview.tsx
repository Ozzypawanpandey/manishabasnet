
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import SectionHeading from '../ui/section-heading';

const ExperiencePreview: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6 md:px-12">
        <SectionHeading
          overline="Professional Journey"
          title="Work Experience"
          description="Building expertise through hands-on customer engagement and product knowledge"
        />
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
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
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              Assisting customers with Samsung products, boosting sales, and ensuring excellent customer satisfaction. Specializing in customer needs assessment and building long-term loyalty.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/experience" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View full experience details
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
