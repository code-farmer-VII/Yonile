import Hero from '../components/detailProject/Hero';
import Process from '../components/detailProject/Process';
import Services from '../components/detailProject/Services';
import Results from '../components/detailProject/Results';
import Milestone from '../components/detailProject/Milestone';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <main>
        <Hero />
        <Process />
        <Services />
        <Results />
        <Milestone />
      </main>
    </div>
  );
}

export default App;
