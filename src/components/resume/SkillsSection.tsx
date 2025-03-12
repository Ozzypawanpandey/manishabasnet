
import React from 'react';
import SectionHeading from '../ui/section-heading';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  level: number; // 0-100
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index }) => {
  return (
    <motion.div 
      className="mb-6 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const professionalSkills = [
    { name: "Customer Service", level: 95 },
    { name: "Product Knowledge", level: 90 },
    { name: "Sales Techniques", level: 85 },
    { name: "Problem Solving", level: 80 },
    { name: "Communication", level: 95 },
  ];
  
  const personalSkills = [
    { name: "Adaptability", level: 90 },
    { name: "Time Management", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Attention to Detail", level: 85 },
    { name: "Creativity", level: 75 },
  ];

  return (
    <section className="py-12">
      <SectionHeading
        overline="Capabilities"
        title="Skills & Expertise"
        description="Core competencies I've developed throughout my career"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Professional Skills</h3>
          <div>
            {professionalSkills.map((skill, index) => (
              <SkillItem 
                key={skill.name} 
                name={skill.name} 
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold mb-6">Personal Skills</h3>
          <div>
            {personalSkills.map((skill, index) => (
              <SkillItem 
                key={skill.name} 
                name={skill.name} 
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
