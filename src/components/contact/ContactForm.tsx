
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "sonner";
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl border border-border shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
            placeholder="Enter your email"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
          placeholder="What's this about?"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all resize-none"
          placeholder="Write your message here..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white font-medium rounded-lg px-6 py-3 flex items-center justify-center space-x-2 transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
