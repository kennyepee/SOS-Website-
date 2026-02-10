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
    bio: `Asia Horne is the co-founder of Strides Over Sidelines (SOS), a youth nonprofit that empowers underserved students through soccer training, sports psychology, academic support, and mentorship in the Washington, DC metro area.

Raised in The Bronx, Asia saw firsthand how community, support, and guidance can transform potential into confidence. That understanding followed her to Washington, DC, where she played Division I soccer at American University while earning degrees in Psychology and International Studies, followed by a master's in Psychology. Her experience as a collegiate athlete shaped her belief that the lessons learned on the field — leadership, teamwork, and resilience — are the same ones that prepare young people for success beyond it.

Through SOS, Asia focuses on turning the principles of sport into tools for growth in school, athletics, and life. The organization provides structured programming that builds confidence, discipline, and life skills for young athletes who might otherwise lack access to high-quality training and mentorship. Her work sits at the intersection of youth development, sports psychology, and community impact.

When she's not coaching, mentoring, or building programs, Asia can be found at a local gym, collaborating on social ventures, or developing new ways to make sports and wellness accessible, meaningful, and fun for all kids.`,
    question: "Biggest lesson that sports has taught you?",
    answer: "",
    image: "/images/team/asia-horne.jpg",
    imagePosition: "",
  },
  {
    id: 3,
    name: "Kwesi Abban",
    role: "",
    bio: `Kwesi Abban is a staff member at Strides Over Sidelines (SOS), driven by a deep belief that the values learned through sport — hard work, dedication, consistency, discipline, and passion — are the same ones that shape success in every area of life.

Raised by parents who exemplified those traits daily, Kwesi carried that foundation onto the soccer field, where his consistency as a player earned him the opportunity to compete as a Division II student-athlete at California University of Pennsylvania (now PennWest California). While he may not have been the headline player, his discipline and reliability set him apart — qualities that continue to define his approach long after his playing days.

Through SOS, Kwesi channels those experiences into mentoring young athletes, helping them recognize their strengths and potential both in the world's game and, most importantly, in life. His work is rooted in the belief that sport is one of the most powerful vehicles for building character, confidence, and purpose in the next generation.`,
    question: "Biggest lesson that sports has taught you?",
    answer: "The biggest lesson sports taught me is selflessness. While it can be difficult, sometimes in sports and in life it's not always about you. It's equally important to support and assist those around you.",
    image: "/images/team/kwesi-abban.jpg",
    imagePosition: "",
  },
  {
    id: 4,
    name: "Kenny Epee",
    role: "Head of Information Technology Operations & Strategy",
    bio: `Kenny Epee is the Head of Information Technology Operations & Strategy at Strides Over Sidelines (SOS), a nonprofit focused on expanding access to high-quality athletic training, mentorship, and personal development for youth in the Washington, DC metro area.

With a background in information technology and systems engineering, Kenny supports SOS by building and maintaining the technical infrastructure that enables the organization's programs to operate securely, reliably, and at scale. His work is shaped by the belief that strong systems — much like strong fundamentals in sport — create the conditions for sustainable growth and impact.

Through SOS, Kenny focuses on designing technology that reduces friction and supports long-term scalability, allowing coaches, mentors, and athletes to focus on development rather than logistics. He brings a disciplined, sustainability-oriented approach to IT leadership that aligns technology decisions with mission outcomes.

Kenny holds a Master of Science in Information Technology Management from Georgetown University and brings a structured, systems-driven approach to nonprofit operations. His work sits at the intersection of technology, access, and community impact, with a long-term vision of using technology as a quiet but powerful enabler of trust, opportunity, and growth beyond the field.`,
    question: "Biggest lesson that sports has taught you?",
    answer: "Playing soccer opened my eyes to what I lacked as a player. I relied solely on natural talent, which got me far — but not far enough. That realization has stayed with me. Today, I bring more proactivity, more grit, more intentionality, and a hunger to win that has carried me further in every aspect of my life.",
    image: "/images/team/kenny-epee.jpg",
    imagePosition: "object-[25%_80%]",
  },
  {
    id: 5,
    name: "Alex West",
    role: "",
    bio: `Alex West is a staff member at Strides Over Sidelines (SOS), bringing a lifelong connection to sport and a professional background in data and operations systems to the organization's mission.

An athlete since the age of four, Alex grew up in an era of limited opportunities for girls in sports, often competing alongside boys across multiple positions until the age of twelve. Those early experiences taught her how to face adversity head-on, challenge stereotypes, and build resilience in environments where she wasn't always expected to succeed.

Transitioning to girls' teams brought its own challenges — pushing her to adapt quickly, embrace the unknown, and consistently exceed expectations. That drive carried her to the University of Vermont, where she competed as a Division I soccer player and continued to develop as both an athlete and a leader.

Today, Alex brings the discipline, adaptability, and leadership shaped by her athletic career into her role as a Data and Operations Systems Manager and into her work with SOS. She is passionate about passing those lessons on to the next generation — helping create opportunities that allow young athletes to grow, compete, and reach their full potential.`,
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
