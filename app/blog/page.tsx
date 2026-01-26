import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react"

export const metadata = {
  title: "Blog | Strides Over Sidelines",
  description: "Stories, insights, and updates from Strides Over Sidelines about youth development, soccer training, and community impact.",
}

const featuredPost = {
  id: 1,
  title: "Launching the Anacostia Pilot Program: A New Chapter for SOS",
  excerpt: "We're excited to announce our pilot program in Anacostia, bringing comprehensive youth development to one of D.C.'s most underserved communities. Learn about our goals, approach, and the young athletes we'll be serving.",
  image: null,
  author: "SOS Team",
  date: "Coming Soon",
  readTime: "5 min read",
  category: "Program Updates",
  slug: "anacostia-pilot-program",
}

const blogPosts = [
  {
    id: 2,
    title: "The Power of Mental Performance Training for Young Athletes",
    excerpt: "Discover how incorporating sports psychology and mental performance tools helps young athletes build confidence, resilience, and emotional regulation.",
    image: null,
    author: "SOS Team",
    date: "Coming Soon",
    readTime: "4 min read",
    category: "Training",
  },
  {
    id: 3,
    title: "Why Mentorship Matters: Building Lasting Relationships",
    excerpt: "Exploring the impact of consistent mentorship on youth development and how SOS creates meaningful connections between mentors and young athletes.",
    image: null,
    author: "SOS Team",
    date: "Coming Soon",
    readTime: "3 min read",
    category: "Mentorship",
  },
  {
    id: 4,
    title: "From the Field to the Classroom: Our Holistic Approach",
    excerpt: "Learn how SOS integrates soccer training with academic support to help young athletes succeed in all areas of life.",
    image: null,
    author: "SOS Team",
    date: "Coming Soon",
    readTime: "4 min read",
    category: "Education",
  },
  {
    id: 5,
    title: "Community Spotlight: Partnering for Greater Impact",
    excerpt: "Highlighting the partnerships that make our work possible and the organizations committed to youth development in the D.C. metro area.",
    image: null,
    author: "SOS Team",
    date: "Coming Soon",
    readTime: "3 min read",
    category: "Community",
  },
  {
    id: 6,
    title: "Preparing Young Athletes for Success Beyond Sports",
    excerpt: "How the skills learned through soccer—discipline, teamwork, perseverance—translate to academic and career success.",
    image: null,
    author: "SOS Team",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Development",
  },
]

const categories = ["All", "Program Updates", "Training", "Mentorship", "Education", "Community", "Development"]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                SOS Blog
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Stories, insights, and updates from our journey empowering underserved youth through soccer, mentorship, and education.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Featured Story
            </h2>
            <Link href={`/case-studies/${featuredPost.slug}`}>
              <article className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                {/* Image */}
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <BookOpen className="mx-auto h-16 w-16 text-primary/30" />
                      <p className="text-sm text-muted-foreground mt-4">Featured Image Coming Soon</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Latest Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <BookOpen className="h-12 w-12 text-primary/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Follow our journey and get the latest updates on programs, events, and impact stories.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/podcast">Listen to Podcast</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
