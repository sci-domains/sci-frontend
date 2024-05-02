import Header from '@/components/Header/Header';
import LandingHero from '@/components/LandingHero/LandingHero';
import { ProtocolDescription } from '@/components/ProtocolDescription/ProtocolDescription';
import { WebAppSection } from '@/components/WebAppSection/WebAppSection';

import { FAQSection } from '@/components/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';
import SCITeamSection from '@/components/SCITeamSection/SCITeamSection';
import { SnapSection } from '@/components/SnapSection/SnapSection';

export function Landing() {
  return (
    <main key="1" className="bg-gray-50 text-gray-900">
      <Header />
      <LandingHero />
      <ProtocolDescription />
      <div id="snap">
        <SnapSection />
      </div>
      <div id="app">
        <WebAppSection />
      </div>
      <div id="team">
        <SCITeamSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
