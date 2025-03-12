
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ExperiencePreview from '@/components/home/ExperiencePreview';
import SkillsPreview from '@/components/home/SkillsPreview';
import LanguagesSection from '@/components/home/LanguagesSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ExperiencePreview />
      <SkillsPreview />
      <LanguagesSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
