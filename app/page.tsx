import dynamic from 'next/dynamic';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Lazy load components below the fold for better performance
const FilterSection = dynamic(() => import('./components/FilterSection'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
});
const WhyUsSection = dynamic(() => import('./components/WhyUsSection'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
});
const PurificationProcess = dynamic(() => import('./components/PurificationProcess'), {
  loading: () => <div style={{ minHeight: '700px' }} />,
});
const ImageShowcase = dynamic(() => import('./components/ImageShowcase'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
});
const IndustrialFiltersSection = dynamic(() => import('./components/IndustrialFiltersSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const RecentCustomers = dynamic(() => import('./components/RecentCustomers'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
});
const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => <div style={{ minHeight: '600px' }} />,
});
const AboutUs = dynamic(() => import('./components/AboutUs'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
});
const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main role="main">
        <HeroSection />
        <FilterSection />
        <WhyUsSection />
        <PurificationProcess />
        <ImageShowcase />
        <IndustrialFiltersSection />
        <RecentCustomers />
        <FAQ />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}