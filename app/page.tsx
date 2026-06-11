import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Studio } from '@/components/Studio';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Studio />
      {/*
        Section-für-Section-Aufbau. Freigegeben & gebaut:
        ✓ Hero (Layout A · Lower-Third, Oliv, echtes Hero-Video)
        ✓ Studio (Konzept D · Folien-Swatch-Fächer, 3D-Tilt)
        Nächste Sections nach Freigabe:
        Finishes · Leistungen · Portfolio · Ablauf · Rezension · Kontakt · Footer
      */}
    </>
  );
}
