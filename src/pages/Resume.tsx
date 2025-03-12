
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import EducationSection from '@/components/resume/EducationSection';
import ExperienceSection from '@/components/resume/ExperienceSection';
import SkillsSection from '@/components/resume/SkillsSection';

const Resume = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">CURRICULUM VITAE</h1>
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
