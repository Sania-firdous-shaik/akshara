import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroClassroom from "@/assets/hero-classroom.jpeg";
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
  {
    name: "Pre-Primary",
    grades: "Nursery – UKG",
    text: "Play-based learning focusing on phonics, early numeracy, motor skills, creativity, and storytelling activities."
  },
  {
    name: "Primary",
    grades: "Grades 1 – 5",
    text: "Strong foundation in literacy, mathematics, environmental studies, arts, and second-language development."
  },
  {
    name: "Middle School",
    grades: "Grades 6 – 8",
    text: "Inquiry-based STEM education, social sciences, coding fundamentals, and exposure to diverse co-curricular activities."
  },
  {
    name: "Senior Secondary",
    grades: "Grades 9 – 10",
    text: "Focused CBSE curriculum with Science, Commerce, and Humanities streams along with career guidance and board exam preparation."
  },
];
const features = [
  {
    icon: BookOpen,
    title: "CBSE Curriculum",
    text: "Structured CBSE curriculum aligned with NEP 2020, focusing on conceptual learning and real-life application."
  },
  {
    icon: FlaskConical,
    title: "STEM & Robotics",
    text: "Well-equipped Atal Tinkering Lab, robotics lab, and innovation spaces to encourage hands-on experimentation."
  },
  {
    icon: Globe2,
    title: "Global Exposure",
    text: "Model United Nations, cultural exchange programs, and collaborations with international learning communities."
  },
  {
    icon: Palette,
    title: "Visual Arts",
    text: "Creative programs in painting, sculpture, and photography with annual exhibitions showcasing student talent."
  },
  {
    icon: Code2,
    title: "Computer Science",
    text: "Coding foundation from early grades including Python and introduction to AI concepts."
  },
  {
    icon: Music,
    title: "Performing Arts",
    text: "Training in classical and modern music, dance, and theatre with regular stage performances and events."
  },
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
