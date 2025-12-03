'use client'

export function Partners() {
  const partners = [
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
    { name: "Disney+", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  ]

  const certifications = [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "FCC Licensed Provider",
    "BBB A+ Rating"
  ]

  return (
    <section className="relative py-16 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Trust Badges */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground mb-6">
            TRUSTED & CERTIFIED
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-background clean-border rounded-full px-4 py-2 text-sm font-medium text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-8">
            OPTIMIZED FOR YOUR FAVORITE STREAMING SERVICES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="h-8 flex items-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
