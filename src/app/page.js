// src/app/page.js
import HeroSection from '../components/home/HeroSection';
import LiveDemo from '../components/home/LiveDemo';
import SolutionsSection from '../components/home/SolutionsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ContactSection from '../components/home/ContactSection';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <FeaturesSection />
        <LiveDemo />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}