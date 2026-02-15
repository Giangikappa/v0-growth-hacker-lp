"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-6 font-mono text-sm tracking-widest text-primary uppercase">
          Growth Hacker & Digital Marketing Specialist
        </p>

        <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Faccio crescere il tuo business con{" "}
            <span className="text-primary">dati, test e automazione.</span>
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Ottimizzo funnel, riduco il CAC e aumento il Conversion Rate.
          Niente teoria, solo esperimenti misurabili e risultati concreti.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="h-14 px-10 text-base font-semibold"
            onClick={() => {
              document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Prenota una call conoscitiva
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-10 text-base"
            onClick={() => {
              document.getElementById("servizi")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Scopri cosa faccio
          </Button>
        </div>
      </div>

      <button
        onClick={() => {
          document.getElementById("metriche")?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scorri verso il basso"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
