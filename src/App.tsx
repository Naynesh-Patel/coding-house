import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ServicesIndexPage from '@/pages/ServicesIndex';
import ServiceDetailPage from '@/pages/ServiceDetail';
import IndustriesIndexPage from '@/pages/IndustriesIndex';
import IndustryDetailPage from '@/pages/IndustryDetail';
import PortfolioPage from '@/pages/Portfolio';
import CareersPage from '@/pages/Careers';
import ContactPage from '@/pages/Contact';
import PrivacyPage from '@/pages/Privacy';
import TermsPage from '@/pages/Terms';
import NotFoundPage from '@/pages/NotFound';
import HeroOneDemo from '@/components/ui/demo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="demo" element={<HeroOneDemo />} />
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesIndexPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="industries" element={<IndustriesIndexPage />} />
          <Route path="industries/:slug" element={<IndustryDetailPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
