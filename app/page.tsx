import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*
        Section-für-Section-Aufbau. Freigegeben & gebaut:
        ✓ Hero (Layout A · Lower-Third, Oliv-Akzent, Video-Slot)
        Nächste Sections folgen nach Freigabe:
        Studio · Finishes · Leistungen · Portfolio · Ablauf · Rezension · Kontakt · Footer
      */}
    </>
  );
}
