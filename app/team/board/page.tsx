import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users } from "lucide-react"

export const metadata = {
  title: "Board of Directors | Strides Over Sidelines",
  description: "Meet the Board of Directors guiding Strides Over Sidelines.",
}

const boardMembers = [
  {
    id: 1,
    name: "Board Member 1",
    role: "Board Position",
    bio: "Bio coming soon.",
    image: null,
  },
  {
    id: 2,
    name: "Board Member 2",
    role: "Board Position",
    bio: "Bio coming soon.",
    image: null,
  },
  {
    id: 3,
    name: "Board Member 3",
    role: "Board Position",
    bio: "Bio coming soon.",
    image: null,
  },
  {
    id: 4,
    name: "Board Member 4",
    role: "Board Position",
    bio: "Bio coming soon.",
    image: null,
  },
  {
    id: 5,
    name: "Board Member 5",
    role: "Board Position",
    bio: "Bio coming soon.",
    image: null,
  },
]

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Our Team
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Meet the people driving the SOS mission forward.
              </p>
              {/* Team Navigation */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                  <Link href="/team/staff">Staff</Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/team/board">Board of Directors</Link>
                </Button>
                <Button asChild variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent">
                  <Link href="/team/advisors">Advisors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Board Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-12">Board of Directors</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {boardMembers.map((member) => (
                <div
                  key={member.id}
                  className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all"
                >
                  <div className="aspect-square w-32 mx-auto rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-muted flex items-center justify-center mb-6">
                    <Users className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">
                      {member.role}
                    </p>
                    <p className="mt-4 text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
