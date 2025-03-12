
import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/section-heading';
import { motion } from 'framer-motion';

interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  board: string;
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, institution, year, grade, board, index 
}) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl border border-border mb-6 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <GraduationCap size={20} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p className="text-muted-foreground">{institution}</p>
        </div>
        
        <div className="md:text-right">
          <div className="text-sm font-medium text-primary">{year}</div>
          <div className="text-sm text-muted-foreground">{grade}</div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        Board: {board}
      </div>
    </motion.div>
  );
};

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "BBS (Bachelor of Business Studies)",
      institution: "Drabya Shah Multiple Campus",
      year: "2081 B.S.",
      grade: "1st Division",
      board: "Tribhuvan University"
    },
    {
      degree: "+2",
      institution: "Takshashila Academy",
      year: "2076 B.S.",
      grade: "3.02 GPA",
      board: "NEB"
    },
    {
      degree: "SEE (Secondary Education Examination)",
      institution: "Manakama English Boarding School",
      year: "2073 B.S.",
      grade: "3.50 GPA",
      board: "NEB"
    }
  ];

  return (
    <section className="py-12">
      <SectionHeading
        overline="Academic Background"
        title="Education"
        description="My academic journey and qualifications"
      />
      
      <div className="mt-8">
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            year={edu.year}
            grade={edu.grade}
            board={edu.board}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
