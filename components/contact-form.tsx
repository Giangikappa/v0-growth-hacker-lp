"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle, ArrowRight } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const formData = new FormData(e.currentTarget)

    // Prepariamo i dati per Google Apps Script (URLSearchParams è il formato più compatibile)
    const params = new URLSearchParams()
    formData.forEach((value, key) => {
      params.append(key, value.toString())
    })

    try {
      // Invio dei dati al tuo URL di Google Script
      await fetch("https://script.google.com", {
        method: "POST",
        mode: "no-cors", // Obbligatorio per evitare errori CORS con Google Scripts
        body: params,
      })

      // Poiché usiamo no-cors, non possiamo leggere la risposta, ma se non va in catch assumiamo il successo
      setSubmitted(true)
    } catch (err) {
      console.error("Errore nell'invio:", err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contatti" className="border-t border-border bg-card px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 text-center font-mono text-sm tracking-widest text-primary uppercase">
          Contatti
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          Parliamone.
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground leading-relaxed">
          Compila il form e fissiamo una call conoscitiva di 30 minuti.
          Nessun impegno, solo una conversazione per capire se sono la persona che fa per la tua azienda.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 rounded-lg border border-primary/30 bg-primary/5 p-12 text-center animate-in fade-in zoom-in duration-500">
            <CheckCircle className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Richiesta inviata.</h3>
            <p className="text-muted-foreground">
              Ti rispondo entro 24 ore per fissare la call. Controlla la tua email!
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
              Invia un altro messaggio
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-lg border border-border bg-background p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-sm font-medium text-foreground">
                  Nome *
                </label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Il tuo nome"
                  required
                  className="bg-card"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cognome" className="text-sm font-medium text-foreground">
                  Cognome *
                </label>
                <Input
                  id="cognome"
                  name="cognome"
                  placeholder="Il tuo cognome"
                  required
                  className="bg-card"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email aziendale *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="nome@azienda.it"
                required
                className="bg-card"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="azienda" className="text-sm font-medium text-foreground">
                Azienda *
              </label>
              <Input
                id="azienda"
                name="azienda"
                placeholder="Nome della tua azienda"
                required
                className="bg-card"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sito" className="text-sm font-medium text-foreground">
                Sito web
              </label>
              <Input
                id="sito"
                name="sito"
                type="url"
                placeholder="https://www.tuaazienda.it"
                className="bg-card"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="messaggio" className="text-sm font-medium text-foreground">
                Su cosa hai bisogno di supporto? *
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                placeholder="Descrivi brevemente la sfida principale del tuo business..."
                required
                rows={4}
                className="flex w-full rounded-md border border-input bg-card px-3 py-2 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive font-medium text-center">
                Si è verificato un errore nell'invio. Per favore riprova o scrivimi direttamente.
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-14 text-base font-semibold transition-all active:scale-95"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Send className="mr-2 h-4 w-4 animate-pulse" />
                  Invio in corso...
                </>
              ) : (
                <>
                  Prenota la call conoscitiva
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Rispondo entro 24 ore.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
