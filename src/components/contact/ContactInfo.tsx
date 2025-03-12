
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link, delay }) => {
  return (
    <motion.div 
      className="flex items-start space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <ContactItem 
        icon={<Mail size={18} />}
        title="Email"
        value="manisha.basnet4090@gmail.com"
        link="mailto:manisha.basnet4090@gmail.com"
        delay={0.1}
      />
      
      <ContactItem 
        icon={<Phone size={18} />}
        title="Phone"
        value="+977-9823324324"
        link="tel:+9779823324324"
        delay={0.2}
      />
      
      <ContactItem 
        icon={<MapPin size={18} />}
        title="Location"
        value="Gorkha-5, Gorkha, Nepal"
        delay={0.3}
      />
      
      <motion.div 
        className="pt-8 mt-8 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="font-medium mb-4">Connect on Social Media</h3>
        <div className="flex space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-border hover:bg-primary hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noreferrer" 
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-border hover:bg-primary hover:text-white transition-colors"
            aria-label="Twitter Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-border hover:bg-primary hover:text-white transition-colors"
            aria-label="Instagram Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
