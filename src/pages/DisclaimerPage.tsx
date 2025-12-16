import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Disclosure } from '@/components/Disclosure'
import { AlertTriangle, Phone } from 'lucide-react'

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue/10 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-accent-blue" />
            </div>
            <h1 className="text-5xl font-black text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground">
              Important information about our services
            </p>
          </div>

          {/* Main Disclosure */}
          <div className="mb-12">
            <Disclosure />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Independent Third-Party Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Global Stream operates as an independent third-party service assistance platform. We are NOT:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• An internet service provider (ISP)</li>
                <li>• A cable or telecommunications company</li>
                <li>• Affiliated with, endorsed by, or representing any service provider</li>
                <li>• An authorized reseller or agent of any provider</li>
                <li>• Directly providing internet, cable, TV, or phone services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We provide assistance in finding, comparing, and understanding service options available in your area. Our role is purely advisory and consultative.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Service Fees</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Global Stream charges a <strong>separate service fee</strong> for our assistance platform. This fee is:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Separate from and in addition to any provider service costs</li>
                <li>• For our consultation, comparison, and assistance services</li>
                <li>• Clearly disclosed before any agreement is made</li>
                <li>• Subject to our Refund Policy terms</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You will separately contract with and pay service providers directly for their services. We do not bill or collect payments on behalf of service providers.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Trademarks & Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All provider names, logos, trademarks, service marks, and brand names mentioned on this website are the property of their respective owners. The use of such marks is for descriptive and comparative purposes only and does not imply:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Endorsement by the trademark owner</li>
                <li>• Affiliation or partnership with the trademark owner</li>
                <li>• Authorization to use the trademark owner's services</li>
                <li>• Any official relationship with the trademark owner</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Examples include but are not limited to: Xfinity®, Spectrum®, AT&T®, Verizon®, Cox®, CenturyLink®, Frontier®, Optimum®, and all other mentioned providers are trademarks of their respective companies.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Accuracy of Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information about available services:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Service availability may change without notice</li>
                <li>• Pricing and promotions are subject to provider terms</li>
                <li>• Service features and specifications may vary by location</li>
                <li>• Provider offers may have expiration dates and eligibility requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We recommend confirming all details directly with the service provider before making any commitment. Information displayed is for guidance purposes and may not reflect real-time availability or current promotional offers.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">No Guarantees</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Global Stream does not guarantee:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Service availability in your specific location</li>
                <li>• Specific pricing, speeds, or service features</li>
                <li>• Installation timelines or service activation</li>
                <li>• Provider performance, reliability, or customer service quality</li>
                <li>• Acceptance of your application by any service provider</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                All service agreements, installations, and ongoing service are managed directly between you and the service provider you choose.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Privacy & Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information solely to facilitate our assistance services. Please note:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• We never request provider account passwords or login credentials</li>
                <li>• Information collected is used per our Privacy Policy</li>
                <li>• We may share necessary contact information with providers you choose</li>
                <li>• You consent to contact via phone, email, or SMS by using our service</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                For complete details, please review our <a href="/privacy-policy" className="text-accent-blue hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Global Stream is not responsible or liable for:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Service provider performance, outages, or service quality</li>
                <li>• Billing disputes between you and service providers</li>
                <li>• Installation issues or equipment problems</li>
                <li>• Provider policy changes or service modifications</li>
                <li>• Contractual disputes with service providers</li>
                <li>• Any direct or indirect damages arising from provider services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Our service is limited to assistance in finding and comparing options. Any service issues must be addressed directly with your chosen provider.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Geographic Restrictions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our assistance services are available for customers seeking services within the United States. Service availability varies by location, and some areas may have limited provider options. We assist with finding services where available but cannot guarantee provider coverage in all areas.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this disclaimer at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes indicates acceptance of the updated disclaimer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Last Updated:</strong> December 16, 2025
              </p>
            </section>

          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-br from-accent-blue to-accent-emerald rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Questions About Our Services?</h3>
            <p className="text-xl mb-6 text-white/90">
              Our team is here to provide clarity and assistance
            </p>
            <a
              href="tel:8556837625"
              className="inline-flex items-center gap-3 bg-white text-accent-blue px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Speak With Support (855) 683-7625
            </a>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}
