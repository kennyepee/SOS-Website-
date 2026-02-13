"use client"

import { useState } from "react"
import Image from "next/image"
import { Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const advisors = [
  {
    id: 1,
    name: "Dr. Nathan Belcher",
    role: "Learning Systems Advisor",
    bio: `Nathan helps organizations build high-agency teams that think for themselves and work with excellence. Drawing on a background in physics and a doctorate in education, he identifies the "mechanisms of progress" where growth can be accelerated. His framework — the "Model for Learning" — turns complex information into clear, measurable capability.`,
    question: "",
    answer: "",
    image: "/images/team/nathan-belcher.jpg",
    imagePosition: "object-top",
  },
  {
    id: 2,
    name: "Dr. Lisa Daniels",
    role: "Sports Psychology Advisor",
    bio: `Lisa Daniels, Ph.D., is a Sports Psychotherapist and Certified Mental Performance Consultant® at Howard University, where she provides counseling and performance services to athletes and students. A native Washingtonian and graduate of DC Public Schools, she earned her Ph.D. in Counseling Psychology from Howard University and a Master of Teaching from the University of Virginia, with postdoctoral training in Applied Sport Psychology from the University of Western States.

Dr. Daniels has been widely recognized for her contributions to Howard Athletics, including honors at the Bison Blue Carpet Awards and championship recognition from multiple MEAC-winning teams. She is the founder of Dynamic Performance Interventions, LLC, and a former athlete and traumatic brain injury survivor who is passionate about helping individuals "win on the inside." Dr. Daniels lives in the Washington, DC area with her husband, Quentin, their daughter, Madison, and their dog, Ace.`,
    question: "Biggest lesson that sports has taught you?",
    answer: "Working with student-athletes across multiple sports has shown me that a clear sense of your \"why,\" combined with strong self-belief, is a powerful driver of resilience.",
    image: "/images/team/lisa-daniels.jpg",
    imagePosition: "object-[50%_80%]",
  },
]

type Advisor = (typeof advisors)[number]

export function AdvisorsGrid() {
  const [selectedMember, setSelectedMember] = useState<Advisor | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advisors.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
          >
            {member.image ? (
              <div className="aspect-square w-32 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className={`h-full w-full object-cover ${member.imagePosition || "object-center"}`}
                />
              </div>
            ) : (
              <div className="aspect-square w-32 mx-auto rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-muted flex items-center justify-center mb-6">
                <Users className="h-12 w-12 text-muted-foreground/50" />
              </div>
            )}
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-foreground">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-sm font-medium text-primary mt-1">
                  {member.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-2">
                  {selectedMember.image ? (
                    <div className="aspect-square w-24 sm:w-28 shrink-0 rounded-full overflow-hidden">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        width={112}
                        height={112}
                        className={`h-full w-full object-cover ${selectedMember.imagePosition || "object-center"}`}
                      />
                    </div>
                  ) : (
                    <div className="aspect-square w-24 sm:w-28 shrink-0 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-muted flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                  )}
                  <div className="text-center sm:text-left">
                    <DialogTitle className="font-serif text-2xl font-bold">
                      {selectedMember.name}
                    </DialogTitle>
                    {selectedMember.role && (
                      <p className="text-sm font-medium text-primary mt-1">
                        {selectedMember.role}
                      </p>
                    )}
                  </div>
                </div>
              </DialogHeader>
              <DialogDescription asChild>
                <div className="space-y-4">
                  {selectedMember.bio ? (
                    <>
                      {selectedMember.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      {selectedMember.question && (
                        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <p className="text-sm font-semibold text-foreground italic">
                            {selectedMember.question}
                          </p>
                          {selectedMember.answer && (
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                              {selectedMember.answer}
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-muted-foreground text-sm">Bio coming soon.</p>
                  )}
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
