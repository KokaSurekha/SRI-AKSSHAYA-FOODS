import { useEffect } from 'react';
import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Menu from '@/react-app/components/Menu';
import WhyChoose from '@/react-app/components/WhyChoose';
import Videos from '@/react-app/components/Videos';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer'; 

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <WhyChoose />
      <Videos />
      <Contact />
      <Footer />
    </div>
  );
}
