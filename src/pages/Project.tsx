import Hero from '../components/OurWork/Hero';
import Stats from '../components/OurWork/Stats';
import Portfolio from '../components/OurWork/Portfolio';
import CTA from '../components/OurWork/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <CTA />
      </main>
    </div>
  );
}

export default App;
