import { Header } from "@/components/header"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <ResourcesSection />
        <Footer />
      </main>
    </div>
  )
}
