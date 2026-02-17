const tools = [
  { category: "Advertising", items: ["Google Ads", "Meta Ads", "TikTok Manager"] },
  { category: "Analytics", items: ["Google Analytics 4"] },
  { category: "CMS & Web", items: ["WordPress", "Figma"] },
  { category: "Automation & AI", items: ["N8N", "Airtable", "Replit", "V0"] },
  { category: "Social", items: ["Meta Business Suite", "TikTok Manager", "Linkedin"] },
  { category: "Metodologia", items: ["Growth Loop", "North Star Metric", "A/B Testing", "Product-Led Growth"] },
]

export function Stack() {
  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center font-mono text-sm tracking-widest text-primary uppercase">
          Stack
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Strumenti e metodologie.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground leading-relaxed">
          Uso gli strumenti giusti per ogni fase del funnel.
          Dal dato grezzo alla decisione strategica.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-primary uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
