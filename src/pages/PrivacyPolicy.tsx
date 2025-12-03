import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollArea } from '@/components/ui/scroll-area'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 3, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Global Stream collects information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name, email address, phone number, and service address</li>
                <li>Payment information and billing details</li>
                <li>Account credentials and preferences</li>
                <li>Communications with our customer support team</li>
                <li>Usage data and network performance information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our internet services</li>
                <li>Process payments and manage your account</li>
                <li>Send service notifications and customer support messages</li>
                <li>Monitor network performance and troubleshoot issues</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
                <li>Affiliated companies within our corporate family</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information, including encryption, firewalls, and secure data centers. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
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
