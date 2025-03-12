
import React from 'react';
import SectionHeading from '../ui/section-heading';

interface LanguageCardProps {
  language: string;
  proficiency: string;
  level: number; // 1-5
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, proficiency, level }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-border">
      <h3 className="text-lg font-semibold mb-2">{language}</h3>
      <p className="text-sm text-muted-foreground mb-4">{proficiency}</p>
      
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${level * 20}%` }}
        ></div>
      </div>
    </div>
  );
};

const LanguagesSection: React.FC = () => {
  const languages = [
    {
      language: "Nepali",
      proficiency: "Fluent reading, writing and speaking",
      level: 5
    },
    {
      language: "English",
      proficiency: "Good reading, writing and speaking",
      level: 4
    },
    {
      language: "Hindi",
      proficiency: "Good reading and speaking",
      level: 3.5
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-6 md:px-12">
        <SectionHeading
          overline="Language Proficiency"
          title="Languages I Speak"
          description="Communication abilities across multiple languages"
          align="center"
          className="md:mx-auto md:max-w-2xl"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {languages.map((lang, index) => (
            <LanguageCard
              key={index}
              language={lang.language}
              proficiency={lang.proficiency}
              level={lang.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
