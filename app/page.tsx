import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
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
        <Services />
        <About />
        <Stack />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
