import Hero from '../components/About/Hero';
import TrustedBy from '../components/About/TrustedBy';
import Services from '../components/About/Services';
import WhyChoose from '../components/About/WhyChoose';
import Portfolio from '../components/About/Portfolio';
import Testimonials from '../components/About/Testimonials';
import CTA from '../components/About/CTA';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}

export default App;
