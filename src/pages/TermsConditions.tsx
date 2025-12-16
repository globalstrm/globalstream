import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Disclosure } from '@/components/Disclosure'

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 16, 2025</p>
          
          <div className="mb-10">
            <Disclosure />
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using Global Stream's service assistance platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use our assistance services. These terms govern your use of our platform and the assistance we provide in finding and comparing internet, cable, TV, and phone service options.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Nature of Services</h2>
              <p className="text-muted-foreground mb-4">
                Global Stream operates as an independent third-party service assistance platform. We:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide assistance in finding and comparing available service providers</li>
                <li>Offer consultation and guidance on service options in your area</li>
                <li>Facilitate connections between customers and service providers</li>
                <li>Charge a separate service fee for our assistance platform</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We are NOT a service provider and do not directly sell or provide internet, cable, TV, or phone services. We are not affiliated with, endorsed by, or representing any service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Fees</h2>
              <p className="text-muted-foreground mb-4">
                By using our assistance services, you agree to pay our service fee, which is:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Separate from and in addition to any provider service costs</li>
                <li>Clearly disclosed before you agree to use our services</li>
                <li>For our consultation, comparison, and facilitation services only</li>
                <li>Subject to our Refund Policy terms and conditions</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You will contract directly with and pay service providers separately for their services. Global Stream does not bill or collect payments on behalf of any service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To use our assistance services, you must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials (if applicable)</li>
                <li>Promptly update any changes to your contact information</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Acceptable Use Policy</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide false or misleading information</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Use our platform for fraudulent purposes</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. No Guarantees</h2>
              <p className="text-muted-foreground mb-4">
                Global Stream does not guarantee:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service availability in your specific location</li>
                <li>Specific pricing, speeds, or features from providers</li>
                <li>Acceptance of your application by any provider</li>
                <li>Installation timelines or service activation schedules</li>
                <li>Provider performance, reliability, or service quality</li>
                <li>Resolution of disputes with service providers</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                All service agreements are made directly between you and the provider you choose. We facilitate the connection but are not party to those agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Global Stream is not responsible or liable for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service provider performance, outages, or service interruptions</li>
                <li>Billing disputes between you and service providers</li>
                <li>Installation issues, delays, or equipment problems from providers</li>
                <li>Provider policy changes or service modifications</li>
                <li>Contractual disputes with service providers</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Our liability is limited to the service fee you paid to Global Stream for our assistance services. We are not liable for any provider-related issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Provider Relationships</h2>
              <p className="text-muted-foreground">
                When you choose to work with a service provider through our platform, you enter into a direct agreement with that provider. Global Stream is not a party to that agreement and has no control over provider terms, pricing, service delivery, or customer service. All provider-related issues must be resolved directly with the provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Information Accuracy</h2>
              <p className="text-muted-foreground">
                While we strive to provide accurate information about service availability and options, information may change without notice. You should confirm all details, pricing, and availability directly with service providers before making any commitments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Privacy and Data</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using our services, you consent to be contacted via phone, email, or SMS for assistance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Refund Policy</h2>
              <p className="text-muted-foreground">
                Refunds for our assistance services are subject to our Refund Policy. Service fees paid to Global Stream are separate from any provider charges. Provider refunds must be requested directly from the provider according to their policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold Global Stream harmless from any claims, damages, or expenses arising from your use of our assistance services, your agreements with service providers, or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes between you and Global Stream will be resolved through binding arbitration in accordance with applicable arbitration rules. Provider-related disputes must be resolved directly with the provider. You waive the right to participate in class action lawsuits against Global Stream.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We may modify these terms at any time. Continued use of our assistance services after changes constitutes acceptance of the modified terms. We will provide notice of material changes via email or our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Termination</h2>
              <p className="text-muted-foreground">
                We may suspend or terminate your access to our assistance platform for violations of these terms, fraudulent activity, or abusive behavior. Termination does not affect any agreements you have with service providers.
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
                For questions about these Terms and Conditions or our assistance services:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Global Stream Service Assistance</strong><br />
                Phone: <a href="tel:8556837625" className="text-accent-blue hover:underline">(855) 683-7625</a><br />
                Expert Support Available
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
