import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 3, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. 30-Day Money-Back Guarantee</h2>
              <p className="text-muted-foreground">
                Global Stream offers a 30-day money-back guarantee for new residential customers. If you're not completely satisfied with our service within the first 30 days, we'll refund your monthly service fees—no questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility Requirements</h2>
              <p className="text-muted-foreground mb-4">
                To qualify for a refund:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You must be a new residential customer</li>
                <li>The refund request must be made within 30 days of service activation</li>
                <li>Your account must be in good standing with no outstanding balance</li>
                <li>Equipment must be returned in good condition (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Non-Refundable Charges</h2>
              <p className="text-muted-foreground mb-4">
                The following charges are non-refundable:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Installation fees (waived for eligible customers)</li>
                <li>Equipment purchase fees (equipment must be returned or purchased)</li>
                <li>Third-party service charges</li>
                <li>Taxes and regulatory fees</li>
                <li>Usage-based charges outside your plan limits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund, please contact our customer service team:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Call us at <a href="tel:8556837625" className="text-accent-blue hover:underline">(855) 683-7625</a></li>
                <li>Provide your account number and reason for cancellation</li>
                <li>Schedule equipment return (if applicable)</li>
                <li>Confirm your refund processing details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Processing Time</h2>
              <p className="text-muted-foreground">
                Refunds are typically processed within 7-10 business days after we receive your cancellation request and any required equipment returns. The refund will be credited to your original payment method. Please allow an additional 5-7 business days for the credit to appear on your statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Interruptions</h2>
              <p className="text-muted-foreground">
                If you experience service interruptions or outages that last longer than 24 hours due to issues on our end, you may be eligible for a prorated credit on your monthly bill. Contact customer service to report the issue and request a credit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Business Accounts</h2>
              <p className="text-muted-foreground">
                Business account refund policies may differ based on your service agreement. Please refer to your business service contract or contact our business solutions team for specific refund terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Equipment Returns</h2>
              <p className="text-muted-foreground mb-4">
                If you received equipment from Global Stream:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Equipment must be returned within 30 days of cancellation</li>
                <li>Items must be in good working condition with no damage</li>
                <li>Use the prepaid shipping label provided by our team</li>
                <li>Failure to return equipment may result in equipment charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about our refund policy or to process a refund:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Global Stream Customer Service</strong><br />
                Phone: <a href="tel:8556837625" className="text-accent-blue hover:underline">(855) 683-7625</a><br />
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
