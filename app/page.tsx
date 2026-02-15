import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stack } from "@/components/stack"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <About />
        <Stack />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
