import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Services from '../components/Home/Services'
import Portfolio from '../components/Home/Portfolio'
import Clients from '../components/Home/Clients'
import Testimonials from '../components/Home/Testimonials'
import CTA from '../components/Home/CTA'

function App() {
  return (
    <div className="min-h-screen bg-navy-dark">
      <main>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Clients />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}

export default App
