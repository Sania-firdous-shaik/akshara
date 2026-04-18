import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroClassroom from "@/assets/hero-classroom.jpg";
import { BookOpen, FlaskConical, Globe2, Palette, Code2, Music } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Akshara School" },
      { name: "description", content: "CBSE curriculum from pre-primary to senior secondary, with STEM, arts, languages and global programs." },
      { property: "og:title", content: "Academics at Akshara School" },
      { property: "og:description", content: "Holistic CBSE learning, modern labs, and inquiry-driven pedagogy." },
      { property: "og:image", content: heroClassroom },
    ],
  }),
  component: AcademicsPage,
});

const stages = [
  { name: "Pre-Primary", grades: "Nursery – UKG", text: "Play-based learning with phonics, numeracy, motor skills, and storytelling." },
  { name: "Primary", grades: "Grades 1 – 5", text: "Foundational literacy, conceptual maths, EVS, art, and second-language immersion." },
  { name: "Middle School", grades: "Grades 6 – 8", text: "Inquiry-led STEM, social studies, coding, and elective discovery programs." },
  { name: "Senior Secondary", grades: "Grades 9 – 12", text: "CBSE board prep, Science / Commerce / Humanities streams, career counselling." },
];

const features = [
  { icon: BookOpen, title: "CBSE Curriculum", text: "Aligned to the latest NEP framework with real-world application." },
  { icon: FlaskConical, title: "STEM & Robotics", text: "Dedicated Atal Tinkering Lab, robotics studio, and innovation cells." },
  { icon: Globe2, title: "Global Exposure", text: "Model UN, exchange programs, and partnerships with schools abroad." },
  { icon: Palette, title: "Visual Arts", text: "Painting, sculpture, photography, and an annual student exhibition." },
  { icon: Code2, title: "Computer Science", text: "Python, web development, and AI fundamentals from Grade 6 onwards." },
  { icon: Music, title: "Performing Arts", text: "Classical and contemporary music, dance, and theatre productions." },
];

function AcademicsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Academics" title="Curriculum that awakens curiosity." subtitle="A future-ready CBSE journey from playful beginnings to confident graduations." image={heroClassroom} />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Learning Stages</div>
            <h2 className="font-display text-4xl font-bold text-primary">A path designed for every age.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s, i) => (
              <div key={s.name} className="bg-card rounded-2xl p-7 shadow-soft border-t-4 border-gold relative">
                <div className="absolute top-4 right-5 font-display text-5xl font-bold text-muted opacity-50">0{i + 1}</div>
                <h3 className="font-display text-xl font-bold text-primary">{s.name}</h3>
                <div className="text-xs uppercase tracking-wider text-gold font-semibold mt-1">{s.grades}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Beyond the Textbook</div>
            <h2 className="font-display text-4xl font-bold text-primary">Programs that build whole humans.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-shadow group">
                <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
