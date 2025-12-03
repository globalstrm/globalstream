import { Hero } from '@/components/Hero'
import { Awards } from '@/components/Awards'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Lifestyle } from '@/components/Lifestyle'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { CoveragePreview } from '@/components/CoveragePreview'
import { Partners } from '@/components/Partners'

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="services" aria-label="Services section">
          <Services />
        </section>
        <section id="awards" aria-label="Stats section">
          <Awards />
        </section>
        <section id="coverage-preview" aria-label="Coverage section">
          <CoveragePreview />
        </section>
        <section id="about" aria-label="How it works section">
          <About />
        </section>
        <section id="lifestyle" aria-label="Lifestyle section">
          <Lifestyle />
        </section>
        <section id="testimonials" aria-label="Testimonials section">
          <Testimonials />
        </section>
        <section id="partners" aria-label="Partners section">
          <Partners />
        </section>
        <section id="faq" aria-label="FAQ section">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index