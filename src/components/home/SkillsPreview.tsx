
import React from 'react';
import { MessageSquare, Users, ThumbsUp } from 'lucide-react';
import SectionHeading from '../ui/section-heading';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-border transition-all duration-300 hover:shadow-md">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const SkillsPreview: React.FC = () => {
  const skills = [
    {
      icon: <MessageSquare size={20} />,
      title: "Communication",
      description: "Strong communication skills, making interactions with customers smooth and effective."
    },
    {
      icon: <Users size={20} />,
      title: "Customer Needs Analysis",
      description: "Able to quickly identify customer needs and offer practical solutions."
    },
    {
      icon: <ThumbsUp size={20} />,
      title: "Relationship Building",
      description: "Excellent at building customer trust and encouraging long-term loyalty."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 md:px-12">
        <SectionHeading
          overline="Professional Skills"
          title="My Core Strengths"
          description="Key capabilities that enable me to excel in customer-facing roles"
          align="center"
          className="md:mx-auto md:max-w-2xl"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
