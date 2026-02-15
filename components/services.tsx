import {
  BarChart3,
  Megaphone,
  Search,
  MousePointerClick,
  Workflow,
  LineChart,
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Funnel Analysis & CRO",
    description:
      "Analizzo il tuo funnel con Google Analytics 4, individuo i bottleneck e ottimizzo il Conversion Rate con test A/B e UX data-driven.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & Meta Ads",
    description:
      "Creo, gestisco e ottimizzo campagne paid su Google e Meta. Riduco il CPL e il CAC massimizzando il ROAS con Predictive Bidding.",
  },
  {
    icon: Search,
    title: "SEO & Traffico Organico",
    description:
      "Ottimizzo architettura, contenuti e performance del sito per aumentare il traffico organico e ridurre la dipendenza dal paid.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Page & Lead Generation",
    description:
      "Creo landing page ad alta conversione, senza frizioni per l'utente. Architettura dell'informazione pulita, tempi di caricamento minimi.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation & AI",
    description:
      "Automatizzo workflow con N8N, Airtable e strumenti No-Code. Integro AI per ottimizzare processi e scalare le operazioni di marketing.",
  },
  {
    icon: LineChart,
    title: "KPI Monitoring & Reporting",
    description:
      "Monitoraggio mensile di CPL, CR, CAC, CPM. Report chiari e azionabili per prendere decisioni basate sui dati, non sulle opinioni.",
  },
]

export function Services() {
  return (
    <section id="servizi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center font-mono text-sm tracking-widest text-primary uppercase">
          Servizi
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Cosa posso fare per te.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground leading-relaxed">
          Ogni servizio parte dai dati e finisce con risultati misurabili.
          Niente vanity metrics, solo KPI che contano per il tuo business.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
