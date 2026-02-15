"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-mono text-4xl font-bold text-primary md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

const metrics = [
  { value: 15, suffix: "+", label: "Campagne Ads gestite", description: "Google Ads & Meta Ads" },
  { value: 30, suffix: "%", label: "CR medio ottimizzato", description: "Conversion Rate Optimization" },
  { value: 50, suffix: "+", label: "Landing Page create", description: "Lead generation qualificata" },
  { value: 12, suffix: "+", label: "Mesi di esperienza in holding", description: "Scarlet Capital Group" },
]

export function Metrics() {
  return (
    <section id="metriche" className="border-t border-b border-border bg-card px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center font-mono text-sm tracking-widest text-primary uppercase">
          Numeri
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
          Risultati, non promesse.
        </h2>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-6 text-center transition-colors hover:border-primary/30"
            >
              <AnimatedNumber target={metric.value} suffix={metric.suffix} />
              <span className="text-sm font-semibold text-foreground">{metric.label}</span>
              <span className="text-xs text-muted-foreground">{metric.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
