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

const boardMembers = [
  {
    id: 1,
    name: "Aayush Raman",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: "/images/team/aayush-raman.jpg",
    imagePosition: "object-top",
  },
  {
    id: 2,
    name: "Jane Wallis",
    role: "",
    bio: `Jane Wallis is a nonprofit leader and former Division I soccer player whose career has been shaped by a deep commitment to the intersection of sports, health, and youth development. She serves as Executive Director of Grassroots Health, a Washington, DC-based nonprofit that partners with schools and community organizations to deliver sports- and game-based health education led by NCAA student-athletes.

A former collegiate soccer player at George Washington University, Jane believes deeply in the power of athletics to build confidence, leadership, and lifelong skills in young people. That belief extends well beyond her professional work — whether coaching club youth soccer or lacing up her cleats for District Soccer league games, she lives out community-building through sport both on and off the field.

Jane holds a master's degree in public health and brings a community-first, relationship-driven approach to her leadership, shaped in part by two years of service with the Peace Corps. Her work is grounded in teamwork, mentorship, and creating positive, inclusive environments where youth and young leaders can thrive.

Based in Washington, DC, Jane brings her passion for soccer, youth development, and collaborative leadership to the SOS Board of Directors.`,
    question: "Biggest lesson that sports has taught you?",
    answer: "The biggest lesson sports taught me is that it isn't all about you — and that realizing this can actually deepen your sense of purpose and passion. Being part of a team showed me what it means to commit to something bigger than yourself: to show up consistently, to push your limits, and sometimes to put your body on the line in service of a shared goal. In those moments, effort becomes meaningful not because of individual recognition, but because it supports the people around you. Through sport, I learned that I could care more deeply and lead more authentically when my energy was rooted in community. Supporting teammates, celebrating collective success, and pushing through challenges together revealed the power of trust, accountability, and belonging. That lesson has stayed with me far beyond the field, shaping how I lead, how I build relationships, and what continues to motivate me personally and professionally today.",
    image: null,
    imagePosition: "",
  },
  {
    id: 3,
    name: "Geoff King",
    role: "",
    bio: "",
    question: "",
    answer: "",
    image: null,
    imagePosition: "",
  },
]

type BoardMember = (typeof boardMembers)[number]

export function BoardGrid() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {boardMembers.map((member) => (
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
