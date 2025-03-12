
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/section-heading';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              overline="About Me"
              title="Professional with customer-focused approach"
              description="A dedicated Samsung Experience Consultant with strong communication skills and expertise in customer service."
            />
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently employed at Samsung through Rolling Plans Pvt. Ltd., I specialize in guiding customers through Samsung's product ecosystem, enhancing sales performance, and ensuring exceptional customer satisfaction.
              </p>
              <p>
                My approach combines technical knowledge with interpersonal skills to create meaningful customer connections and drive business results.
              </p>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium hover:underline mt-4"
            >
              Learn more about me
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
              {/* This would typically contain a profile image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-lg">
                Profile Image
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 rounded-2xl border border-border bg-background"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-1/3 h-1/3 rounded-xl bg-accent/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
