import { AlertCircle } from 'lucide-react'

interface DisclosureProps {
  variant?: 'default' | 'compact' | 'footer'
}

export function Disclosure({ variant = 'default' }: DisclosureProps) {
  if (variant === 'footer') {
    return (
      <div className="text-background/60 text-sm leading-relaxed">
        <p className="font-semibold mb-2">Important Disclosure</p>
        <p>
          Global Stream is an independent third-party service assistance platform. We are not affiliated with, endorsed by, or directly connected to any internet service provider, cable company, or telecommunications carrier. We provide assistance in finding and comparing available services in your area for a separate service fee. All trademarks, service marks, and company names mentioned are the property of their respective owners.
        </p>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white/10 border-l-4 border-white/30 p-4 rounded-lg backdrop-blur-sm">
        <p className="text-sm text-white">
          <span className="font-semibold">Independent Service:</span> We are a third-party assistance platform. Not affiliated with or endorsed by any service provider. Service fees apply.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-accent-blue/10 border border-accent-blue/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2">Important Disclosure</h3>
          <p className="text-foreground/80 leading-relaxed">
            Global Stream operates as an independent third-party service assistance platform. We are not affiliated with, endorsed by, or directly connected to any internet service provider, cable company, or telecommunications carrier. Our service helps you find and compare available connectivity options in your area. We charge a separate service fee for our assistance. All provider names and trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </div>
  )
}
