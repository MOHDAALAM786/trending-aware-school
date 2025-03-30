import { motion } from 'framer-motion';
import Hero from './Hero';
import Features from './Features';
import AboutSection from './AboutSection';
import CurriculumHighlights from './CurriculumHighlights';
import AdmissionsPreview from './AdmissionsPreview';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      <Features />
      <AboutSection />
      <CurriculumHighlights />
      <AdmissionsPreview />
      <Testimonials />
    </div>
  );
};

export default Home;