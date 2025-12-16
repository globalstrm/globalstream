import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Disclosure } from '@/components/Disclosure'

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-6">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 16, 2025</p>
          
          <div className="mb-10">
            <Disclosure />
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Service Fee Refunds</h2>
              <p className="text-muted-foreground">
                Global Stream's service assistance fees may be refunded within 7 to 15 days of payment, depending on the type of assistance provided. If you have not yet been connected with a service provider, you are eligible for a refund within this timeframe. Once provider contact has been facilitated, our service fee is non-refundable as the assistance service has been provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility Requirements</h2>
              <p className="text-muted-foreground mb-4">
                To qualify for a service fee refund:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Refund request must be made within 7 to 15 days of payment (timeframe depends on service type)</li>
                <li>No provider connection has been facilitated</li>
                <li>Request must be made in writing via email or phone</li>
                <li>Full eligibility details are outlined below</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Provider Service Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Refunds for services purchased from providers are subject to each provider's individual refund policy:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provider refund requests must be made directly with the provider</li>
                <li>Each provider has their own terms and timeframes</li>
                <li>Global Stream cannot process refunds for provider services</li>
                <li>We can provide guidance on how to contact your provider</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund of your Global Stream service fee:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Call us at <a href="tel:8556837625" className="text-accent-blue hover:underline">(855) 683-7625</a></li>
                <li>Email us with your account details and reason for refund request</li>
                <li>Provide documentation if applicable</li>
                <li>Allow 7-10 business days for processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Processing Time</h2>
              <p className="text-muted-foreground">
                Refunds are typically processed within 7-10 business days after approval. The refund will be credited to your original payment method. Please allow an additional 3-5 business days for the credit to appear on your statement depending on your financial institution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Questions About This Policy</h2>
              <p className="text-muted-foreground">
                If you have questions about our refund policy or need assistance with a refund request, please contact us. Our team is here to help ensure you understand your options and the refund process.
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
