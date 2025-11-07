// import Hero from '../components/Services/Hero';
// import Services from '../components/Services/Services';
// import WhyChoose from '../components/Services/WhyChoose';
// import CTA from '../components/Services/CTA';

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-900">
//       <main>
//         <Hero />
//         <Services />
//         <WhyChoose />
//         <CTA />
//       </main>
//     </div>
//   );
// }

// export default App;


import Hero from '../components/OurWork/Hero';
import Stats from '../components/OurWork/Stats';
import Portfolio from '../components/OurWork/Portfolio';
import CTA from '../components/OurWork/CTA';
import HeroSecound from '../components/Services/Hero';


function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Stats />
        <HeroSecound />
        <Portfolio />
        <CTA />
      </main>
    </div>
  );
}

export default App;
