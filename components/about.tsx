import { Award, GraduationCap, Briefcase } from "lucide-react"

const credentials = [
  {
    icon: Briefcase,
    title: "Digital Marketing Specialist",
    place: "Scarlet Capital Group",
    period: "Set 2024 - Ago 2025",
    details: [
      "Gestione campagne Google Ads & Meta Ads",
      "Analisi funnel con GA4 e ottimizzazione bottleneck",
      "Creazione Landing Page per lead qualificati",
      "Monitoraggio KPI: CPL, CR, CAC, CPM",
      "Consulenze marketing per holding e partecipate",
    ],
  },
  {
    icon: GraduationCap,
    title: "Master in Growth Hacking, Data & AI",
    place: "24 Ore Business School",
    period: "2025 - 2026 (in corso)",
    details: [
      "Product Led Growth & Growth Loop",
      "No-Code Tools & AI Workflow Optimization",
      "Predictive Analytics & Data-Driven Marketing",
      "Programmatic Advertising & Predictive Bidding",
    ],
  },
  {
    icon: GraduationCap,
    title: "Digital Marketing Full Stack",
    place: "ITS Tech Talent Factory",
    period: "2023 - 2025",
    details: [
      "Neuromarketing applicato alle decisioni d'acquisto",
      "UX/UI Design e prototipazione con Figma",
      "Creazione siti web senza frizioni",
    ],
  },
]

const certifications = [
  "Google Search Certification",
  "Google Analytics Certification",
  "IELTS B2 - Wall Street English",
]

export function About() {
  return (
    <section id="chi-sono" className="border-t border-border bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center font-mono text-sm tracking-widest text-primary uppercase">
          Chi sono
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Gianluca Kirilmaz
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground leading-relaxed">
          Growth Hacker con background in Digital Marketing, Neuromarketing e AI.
          Mi occupo di trasformare dati in crescita concreta per le aziende,
          combinando strategia, sperimentazione e automazione.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cred.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cred.title}</h3>
                  <p className="text-xs text-muted-foreground">{cred.place}</p>
                </div>
              </div>

              <p className="font-mono text-xs text-primary">{cred.period}</p>

              <ul className="flex flex-col gap-2">
                {cred.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">Certificazioni</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
