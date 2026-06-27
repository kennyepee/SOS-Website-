export type GalleryImage = {
  id: string
  src: string
  alt: string
  featured?: boolean
  layout?: "default" | "wide" | "tall" | "large"
}

export const galleryImages: GalleryImage[] = [
  { id: "01", src: "/images/gallery/gallery-01.png", alt: "SOS coaches leading a youth training session outdoors", featured: true, layout: "large" },
  { id: "02", src: "/images/gallery/gallery-02.png", alt: "Young athletes lined up during an SOS practice", featured: true },
  { id: "03", src: "/images/gallery/gallery-03.png", alt: "Youth soccer players listening to coach instructions", featured: true, layout: "tall" },
  { id: "04", src: "/images/gallery/gallery-04.png", alt: "SOS training session on the field with coaches and players" },
  { id: "05", src: "/images/gallery/gallery-05.png", alt: "Community gathering during an SOS program event" },
  { id: "06", src: "/images/gallery/gallery-06.png", alt: "Coaches and youth athletes on the soccer field" },
  { id: "07", src: "/images/gallery/gallery-07.png", alt: "Group huddle during SOS mentorship session", featured: true, layout: "wide" },
  { id: "08", src: "/images/gallery/gallery-08.png", alt: "Youth players in team jerseys at practice" },
  { id: "09", src: "/images/gallery/gallery-09.png", alt: "SOS community session with diverse young athletes" },
  { id: "10", src: "/images/gallery/gallery-10.png", alt: "Training drills on the grass with SOS participants" },
  { id: "11", src: "/images/gallery/gallery-11.png", alt: "Young players gathered for coaching instructions" },
  { id: "12", src: "/images/gallery/gallery-12.png", alt: "SOS program moment with mentors and youth" },
  { id: "13", src: "/images/gallery/gallery-13.png", alt: "Team activity on the field during SOS training" },
  { id: "14", src: "/images/gallery/gallery-14.png", alt: "703 Warriors team huddle with coaches", featured: true, layout: "wide" },
  { id: "15", src: "/images/gallery/gallery-15.png", alt: "Youth athletes lined up for SOS practice" },
  { id: "16", src: "/images/gallery/gallery-16.png", alt: "Coaching session with SOS players on the track" },
  { id: "17", src: "/images/gallery/gallery-17.png", alt: "703 Warriors players in lineup during training", featured: true },
  { id: "18", src: "/images/gallery/gallery-18.png", alt: "703 Warriors player on the field during practice", featured: true, layout: "tall" },
  { id: "19", src: "/images/gallery/gallery-19.png", alt: "Wide view of SOS community training session", featured: true, layout: "large" },
  { id: "20", src: "/images/gallery/gallery-20.png", alt: "Youth soccer practice with SOS mentors" },
  { id: "21", src: "/images/gallery/gallery-21.png", alt: "Group of SOS athletes on the soccer field" },
  { id: "22", src: "/images/gallery/gallery-22.png", alt: "Active training session with SOS youth players" },
  { id: "23", src: "/images/gallery/gallery-23.png", alt: "Players and coaches during SOS field session" },
  { id: "24", src: "/images/gallery/gallery-24.png", alt: "Community sports gathering with SOS participants" },
  { id: "25", src: "/images/gallery/gallery-25.png", alt: "Youth athletes practicing on the turf field" },
  { id: "26", src: "/images/gallery/gallery-26.png", alt: "SOS training moment with diverse young players" },
  { id: "27", src: "/images/gallery/gallery-27.png", alt: "Coaches addressing youth during SOS program" },
  { id: "28", src: "/images/gallery/gallery-28.png", alt: "Panoramic view of SOS community on the field", featured: true, layout: "wide" },
  { id: "29", src: "/images/gallery/gallery-29.png", alt: "Young player dribbling during SOS practice" },
  { id: "30", src: "/images/gallery/gallery-30.png", alt: "Team gathering with SOS coaches and athletes" },
  { id: "31", src: "/images/gallery/gallery-31.png", alt: "Outdoor SOS session with youth and mentors" },
  { id: "32", src: "/images/gallery/gallery-32.png", alt: "SOS team meeting with coach on the field" },
]

export const featuredGalleryImages = galleryImages.filter((image) => image.featured)
