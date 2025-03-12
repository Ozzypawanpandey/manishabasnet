
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Manisha Basnet</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Samsung Experience Consultant with strong communication skills and expertise in customer relations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail size={16} className="mr-2" />
                <a href="mailto:manisha.basnet4090@gmail.com" className="hover:text-primary transition-colors">
                  manisha.basnet4090@gmail.com
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone size={16} className="mr-2" />
                <a href="tel:+9779823324324" className="hover:text-primary transition-colors">
                  +977-9823324324
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                <span>Gorkha-5, Gorkha, Nepal</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Links</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Manisha Basnet. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <span>Designed with precision • Built with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
