import Hero from '../components/Services/Hero';
import Services from '../components/Services/Services';
import WhyChoose from '../components/Services/WhyChoose';
import CTA from '../components/Services/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <CTA />
      </main>
    </div>
  );
}

export default App;
