import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PageTransition } from '@/components/ui/Motion';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
