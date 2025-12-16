'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Are you an official cable or internet provider?",
      answer: "No, we are not a cable or internet provider. Global Stream is an independent third-party assistance platform. We help you compare and find service options available in your area, but we do not provide internet, cable, or streaming services ourselves."
    },
    {
      question: "Do you sell internet, cable, or streaming plans?",
      answer: "No, we don't sell plans directly. We provide assistance and guidance to help you understand and compare options from various providers. Any service you choose will be provided directly by the provider you select, not by us."
    },
    {
      question: "Do you charge for your services?",
      answer: "Yes, we charge a service fee for our assistance platform. This fee is separate from any charges from service providers and covers our consultation, comparison services, and support. All fees are clearly disclosed before you agree to proceed."
    },
    {
      question: "Will I still be billed by my service provider?",
      answer: "Yes, absolutely. If you choose a service provider through our assistance, you will be billed directly by that provider for their services. Their billing is completely separate from our service fee. We do not handle provider payments or billing."
    },
    {
      question: "Do you need my account passwords or sensitive information?",
      answer: "No, we never request your provider account passwords or other sensitive credentials. Our assistance involves helping you compare options and understand service features. Any account setup or login information is handled directly between you and your chosen provider."
    },
    {
      question: "Which providers do you support?",
      answer: "We can provide guidance on multiple internet, cable, and streaming providers that may be available in your area. We are not affiliated with, endorsed by, or representing any specific provider. Our goal is to help you compare your options independently."
    },
    {
      question: "Are your services refundable?",
      answer: "We have a refund policy for our service fees. For complete details on eligibility, timeframes, and how to request a refund, please visit our Refund Policy page or contact us at (855) 683-7625."
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
            Common questions about our service assistance platform
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
