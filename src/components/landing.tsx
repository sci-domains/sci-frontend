import Header from '@/components/Header/Header';
import LandingHero from '@/components/LandingHero/LandingHero';
import { ProtocolDescription } from '@/components/ProtocolDescription/ProtocolDescription';

import { SnapSection } from '@/components/SnapSection/SnapSection';
export function Landing() {
  return (
    <main key="1" className="bg-gray-50 text-gray-900">
      <Header />
      <LandingHero />
      <ProtocolDescription />
      <SnapSection />
    </main>
  );
}
