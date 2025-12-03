import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 3, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using Global Stream's internet services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
              <p className="text-muted-foreground">
                Global Stream provides fiber-optic internet services to residential and business customers. Service availability, speeds, and features may vary by location. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your account information</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use Policy</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute malware, viruses, or harmful code</li>
                <li>Engage in unauthorized access or hacking activities</li>
                <li>Send spam or unsolicited communications</li>
                <li>Interfere with network security or integrity</li>
                <li>Resell or redistribute our services without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Pay all charges according to your selected plan</li>
                <li>Provide valid payment information</li>
                <li>Authorize automatic monthly billing (if applicable)</li>
                <li>Pay late fees for overdue accounts</li>
                <li>Cover any collection costs for unpaid balances</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Level Agreement</h2>
              <p className="text-muted-foreground">
                While we strive to provide 99.9% uptime, service interruptions may occur due to maintenance, upgrades, or factors beyond our control. We are not liable for service disruptions, but may provide credits for extended outages as outlined in our Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Equipment</h2>
              <p className="text-muted-foreground">
                Equipment provided by Global Stream remains our property. You are responsible for its safekeeping and must return it upon service termination. Lost, stolen, or damaged equipment may result in replacement charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Installation and Service Calls</h2>
              <p className="text-muted-foreground">
                Professional installation is included for eligible customers. Service calls for issues caused by customer equipment or actions may incur charges. You must provide safe access to installation locations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contract Terms</h2>
              <p className="text-muted-foreground">
                Our residential plans are contract-free. You may cancel at any time with no early termination fees. Business plans may have different terms as specified in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Privacy and Data</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Global Stream is not liable for indirect, incidental, or consequential damages arising from service use or interruption. Our total liability is limited to the amount you paid for services in the preceding month.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold Global Stream harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes will be resolved through binding arbitration in accordance with applicable arbitration rules. You waive the right to participate in class action lawsuits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms. We will provide notice of material changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Termination</h2>
              <p className="text-muted-foreground">
                We may suspend or terminate your service for violations of these terms, non-payment, or fraudulent activity. You may cancel your service at any time by contacting customer service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the United States and the state in which you receive service, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms and Conditions:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Global Stream</strong><br />
                Phone: <a href="tel:8559450333" className="text-accent-blue hover:underline">(855) 945-0333</a><br />
                Available 24/7
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
