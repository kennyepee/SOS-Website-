import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/layout/page-hero"
import { PageSection } from "@/components/layout/page-section"
import { SectionTitle } from "@/components/layout/section-title"
import { PageCta } from "@/components/layout/page-cta"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Join Us | Strides Over Sidelines",
  description: "Get involved with SOS through our mentorship program, as a guest speaker, or as a podcast guest.",
}

const opportunities = [
  {
    title: "Mentorship Program",
    description: "Become a mentor and make a lasting impact on a young athlete's life through consistent guidance, support, and encouragement.",
    link: "/join-us/mentorship",
    features: [
      "One-on-one mentoring relationships",
      "Training and support provided",
      "Flexible time commitment",
      "Make a lasting difference",
    ],
  },
  {
    title: "Guest Speakers",
    description: "Share your expertise and inspire young athletes by speaking at our workshops, events, and training sessions.",
    link: "/join-us/guest-speakers",
    features: [
      "Share your story and expertise",
      "Inspire the next generation",
      "Flexible scheduling",
      "Various event formats",
    ],
  },
  {
    title: "Podcast Guest",
    description: "Join us on the SOS podcast to share your insights on youth development, sports, education, or community building.",
    link: "/join-us/podcast-guest",
    features: [
      "Share your perspective",
      "Reach a growing audience",
      "Professional recording setup",
      "Remote participation available",
    ],
  },
]

const impactStats = [
  { number: "100+", label: "Youth Served" },
  { number: "50+", label: "Volunteers" },
  { number: "20+", label: "Community Partners" },
  { number: "1000+", label: "Training Hours" },
]

const whyJoin = [
  { title: "Make an Impact", description: "Directly influence young lives" },
  { title: "Join a Community", description: "Connect with like-minded people" },
  { title: "Get Support", description: "Training and resources provided" },
  { title: "Grow Personally", description: "Develop new skills and perspectives" },
]

export default function JoinUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Join Us."
          subtitle="There are many ways to get involved with Strides Over Sidelines. Whether as a mentor, speaker, or podcast guest, your contribution helps us empower underserved youth."
        />

        <PageSection alt>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-semibold text-foreground lg:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm apple-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <SectionTitle centered>Ways to Get Involved</SectionTitle>
            <p className="mt-4 apple-body">
              Choose the opportunity that matches your skills and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {opportunities.map((opportunity, index) => (
              <Link key={index} href={opportunity.link} className="apple-nav-card group flex flex-col">
                <h3 className="text-2xl font-semibold text-foreground">
                  {opportunity.title}
                </h3>
                <p className="mt-3 apple-body flex-1">{opportunity.description}</p>

                <ul className="mt-6 space-y-2">
                  {opportunity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="apple-body text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1 apple-link">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </PageSection>

        <PageSection alt>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle>Why Join SOS?</SectionTitle>
              <div className="mt-6 space-y-4">
                <p className="apple-body">
                  When you join SOS, you become part of a community dedicated to creating opportunities for young people who need them most.
                </p>
                <p className="apple-body">
                  Our volunteers and partners consistently tell us that working with SOS is as rewarding for them as it is for the youth we serve. You'll build meaningful relationships, develop new skills, and see the direct impact of your contribution.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyJoin.map((item, index) => (
                <div key={index} className="apple-nav-card">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm apple-body">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageCta
          title="Ready to Make a Difference?"
          description="Have questions about getting involved? We'd love to hear from you and discuss how you can contribute to our mission."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  )
}
