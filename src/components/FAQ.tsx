'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What speeds can I expect with Global Stream?",
      answer: "Our fiber internet plans offer speeds ranging from 100 Mbps to 10 Gbps. The speed you experience depends on your chosen plan. We guarantee minimum speeds of 95% of advertised rates, which is among the best in the industry."
    },
    {
      question: "Is there a contract or commitment required?",
      answer: "No! We believe in earning your business every month. All our plans are contract-free with no early termination fees. You can upgrade, downgrade, or cancel anytime."
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours. We offer same-day installation in many areas, and all installations are performed by our certified technicians at no extra cost."
    },
    {
      question: "Do you have data caps?",
      answer: "Absolutely not. All Global Stream plans come with truly unlimited data. Stream, game, work, and download as much as you want without worrying about overage charges or throttling."
    },
    {
      question: "What equipment is included?",
      answer: "Every plan includes a high-performance WiFi router at no additional cost. Pro and Ultimate plans include WiFi 6/6E routers with mesh capability for whole-home coverage. You can also use your own equipment if preferred."
    },
    {
      question: "What if I have technical issues?",
      answer: "Our 24/7 technical support team is always ready to help. You can reach us via phone, chat, or email. Most issues are resolved remotely within minutes. If needed, we offer next-day technician visits at no charge."
    },
    {
      question: "Can I bundle services?",
      answer: "Yes! Bundle internet with our streaming TV and digital phone services to save up to 30% on your monthly bill. All bundles come with a single, simplified bill."
    },
    {
      question: "Is fiber available in my area?",
      answer: "We're rapidly expanding our fiber network across the country. Enter your address on our coverage page to check availability. If we're not in your area yet, join our waitlist to be notified when we arrive."
    }
  ]

  return (
    <section className="relative py-20 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Got Questions?
            </span>
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about our internet services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background clean-border rounded-2xl overflow-hidden elevated-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-accent-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
