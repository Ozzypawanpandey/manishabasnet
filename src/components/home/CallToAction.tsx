
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 balance-text">
            Ready to collaborate?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto balance-text">
            I'm always open to discussing new opportunities and connections. Feel free to reach out if you'd like to learn more about my experience or discuss potential collaborations.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90"
          >
            Contact Me
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
