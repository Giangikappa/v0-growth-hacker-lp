import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#" className="font-mono text-lg font-bold text-foreground tracking-tight">
          GK<span className="text-primary">.</span>
        </a>

        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a
              href="mailto:giangikirilmaz@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              giangikirilmaz@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>+39 348 2705979</span>
          </div>
        </div>

        <div className="h-px w-24 bg-border" />

        <p className="text-xs text-muted-foreground">
          {"Gianluca Kirilmaz - Growth Hacker & Digital Marketing Specialist"}
        </p>
      </div>
    </footer>
  )
}
