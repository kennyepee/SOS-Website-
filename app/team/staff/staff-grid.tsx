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

const staffMembers = [
  {
    id: 1,
    name: "Jordan Gamarra",
    role: "Co-Founder",
    bio: `Jordan Gamarra is the founder of Strides Over Sidelines (SOS), a nonprofit dedicated to expanding access to high-quality athletic training, mentorship, and mental performance education for youth in the Washington, DC metro area.

A former collegiate soccer player with experience at both American University and William & Mary, Jordan also spent time playing professionally before transitioning into leadership and community impact work. His background as an athlete shapes SOS's core philosophy: sport should develop the whole person, not just the player.

Through SOS, Jordan focuses on redefining how youth sports are delivered by integrating technical training with mentorship, leadership development, and mental performance skills that translate beyond the field. The organization works to remove financial and structural barriers while creating environments where young athletes can build confidence, discipline, and long-term opportunity.

Jordan holds a Master of Science in Finance and brings a systems-driven, sustainable approach to nonprofit leadership. His work sits at the intersection of sport, education, and community development, with a long-term vision of changing how sports are used as a vehicle for personal and social growth.`,
    question: "Biggest lesson that sports has taught you?",
    answer: "Sports taught me that consistency matters more than talent. Showing up, doing the work, and staying disciplined through setbacks is what creates real growth. Wins come and go, but the habits, resilience, and accountability you build last far beyond the field.",
    image: "/images/team/jordan-gamarra.jpg",
    imagePosition: "",
  },
  {
    id: 2,
    name: "Asia Horne",
    role: "Co-Founder",
    bio: "",
    question: "",
    answer: "",
    image: "/images/team/asia-horne.jpg",
    imagePosition: "",
  },
  {
    id: 3,
    name: "Kwesi Abban",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: "/images/team/kwesi-abban.jpg",
    imagePosition: "",
  },
  {
    id: 4,
    name: "Kenny Epee",
    role: "Head of Information Technology",
    bio: "",
    question: "",
    answer: "",
    image: "/images/team/kenny-epee.jpg",
    imagePosition: "",
  },
  {
    id: 5,
    name: "Alex West",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: "/images/team/alex-west.jpg",
    imagePosition: "",
  },
  {
    id: 6,
    name: "William Boinest",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: "/images/team/william-boinest.jpg",
    imagePosition: "",
  },
  {
    id: 7,
    name: "Melea Earley",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: null,
    imagePosition: "",
  },
  {
    id: 8,
    name: "Jamie Joseph",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: null,
    imagePosition: "",
  },
  {
    id: 9,
    name: "Kaelyn Britt",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: null,
    imagePosition: "",
  },
]

type StaffMember = (typeof staffMembers)[number]

export function StaffGrid() {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {staffMembers.map((member) => (
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
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {selectedMember.answer}
                          </p>
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
