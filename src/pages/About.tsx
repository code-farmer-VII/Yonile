import Hero from '../components/About/Hero';
import TrustedBy from '../components/About/TrustedBy';
// import Services from '../components/About/Services';
import WhyChoose from '../components/About/WhyChoose';
import Portfolio from '../components/About/Portfolio';
// import Testimonials from '../components/About/Testimonials';
import CTA from '../components/About/CTA';
import AboutUsSection from '../components/About/AboutSection';
import ResearchingConsultant from '../components/About/ResearchingConsultant';
import { BlogPosts } from '../components/Home/Blog';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <main>
        <Hero />
        <AboutUsSection />
        <ResearchingConsultant />
        <TrustedBy />
        {/* <Services /> */}
        <WhyChoose />
        <Portfolio />
        {/* <Testimonials /> */}
        <BlogPosts />
        <CTA />
      </main>
    </div>
  );
}

export default App;
