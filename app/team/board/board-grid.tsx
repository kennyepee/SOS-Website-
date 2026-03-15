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
    bio: `Aayush Raman is a medical student at NYIT College of Osteopathic Medicine and a member of the Strides Over Sidelines (SOS) Board of Directors, bringing a longstanding commitment to youth mentorship, community service, and athletic development.

Aayush holds a multidisciplinary background in neuroscience, data analytics, and healthcare leadership, along with hands-on experience working with young people in both educational and athletic settings. He has served as a high-level youth player, team captain, and later a coach — experiences that shaped his belief in sports as a powerful tool for building confidence, discipline, and resilience in adolescents.

Through his work as a volunteer tutor, crisis counselor, youth mentor, and chair of his medical school's free clinic, Aayush has supported students navigating academic pressure, personal challenges, and goal setting beyond the field. He is passionate about expanding access to soccer for students while helping them develop the life skills, mental well-being, and long-term vision needed for success on and off the field.

As a board member, Aayush is dedicated to advancing programs that integrate athletics with mentorship, evidence-based research, education, and holistic youth development.`,
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
    image: "/images/team/jane-wallis.jpg",
    imagePosition: "",
  },
  {
    id: 3,
    name: "Geoff King",
    role: "",
    bio: `Geoffrey King is the founder and president of PASS (Preparing All Students for Success) and a member of the Strides Over Sidelines (SOS) Board of Directors, bringing nearly two decades of experience as an educator and youth advocate in Washington, DC.

After earning a Bachelor of Science in Human Nutrition, Foods, and Exercise with a minor in Chemistry from Virginia Tech, Geoffrey began his career in the management program at Enterprise Holdings before following his passion for education. He founded Math Doctors, LLC, a math tutoring company that quickly became one of Northern Virginia's premier tutoring services, and went on to earn a Master of Education from Howard University.

For nearly 20 years, Geoffrey has served as a classroom teacher in Ward 8 of Washington, DC within the District of Columbia Public Schools. Through that experience, he identified a critical gap in the essential life skills his students needed for success beyond high school and college — and in 2017, he founded PASS to address it.

PASS is a nonprofit committed to developing urban youth aged 10 to 21, with programming focused on financial literacy, career goal setting, college and vocational exposure, and mentorship. The organization pairs students with community mentors and provides hands-on learning around budgeting, credit, interview skills, and professional development — targeting low-income families in Wards 7 and 8.

Geoffrey's vision is to create a generational pipeline of life skills and knowledge, fostering a culture where these essential tools are passed down to ensure the long-term prosperity of Washington, DC's underserved youth.`,
    question: "",
    answer: "",
    image: "/images/team/geoff-king.jpg",
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
