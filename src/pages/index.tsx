import React from 'react';
import Hero from '@/components/module/Hero';
import About from '@/components/module/About';
import WhyMinimal from '@/components/module/WhyMinimal';
import Reviews from '@/components/module/Reviews';
import Author from '@/components/module/Author';
import Contact from '@/components/module/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyMinimal />
      <Reviews />
      <Author />
      <Contact />
    </div>
  );
}
