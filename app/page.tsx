import { Hero } from '@/components/Hero';
import { Studio } from '@/components/Studio';
import { Finishes } from '@/components/Finishes';
import { Leistungen } from '@/components/Leistungen';
import { Portfolio } from '@/components/Portfolio';
import { Ablauf } from '@/components/Ablauf';
import { Rezension } from '@/components/Rezension';
import { Kontakt } from '@/components/Kontakt';
import { GoldDivider } from '@/components/GoldDivider';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <Hero />
      <Studio />
      <GoldDivider />
      <Finishes />
      <Leistungen />
      <GoldDivider />
      <Portfolio />
      <Ablauf />
      <Rezension />
      <GoldDivider />
      <Kontakt />
      <ScrollAnimations />
    </>
  );
}
