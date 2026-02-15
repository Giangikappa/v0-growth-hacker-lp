"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Stack", href: "#stack" },
  { label: "Contatti", href: "#contatti" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-bold text-foreground tracking-tight">
          GK<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          size="sm"
          className="hidden font-semibold md:inline-flex"
          onClick={() => {
            document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Prenota una call
        </Button>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                size="sm"
                className="w-full font-semibold"
                onClick={() => {
                  document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
                  setOpen(false)
                }}
              >
                Prenota una call
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
