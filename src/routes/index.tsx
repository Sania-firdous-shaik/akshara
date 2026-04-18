import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Heart, Trophy, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import heroStudents from "@/assets/hero-students.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import campusSports from "@/assets/campus-sports.jpg";
import campusLibrary from "@/assets/campus-library.jpg";
import campusArts from "@/assets/campus-arts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshara School — Nurturing Minds, Building Futures" },
      { name: "description", content: "Akshara School offers holistic CBSE education from pre-primary to senior secondary. Admissions open for 2026–2027." },
      { property: "og:title", content: "Akshara School — Nurturing Minds, Building Futures" },
      { property: "og:description", content: "Holistic CBSE education with values, academics, arts, and sports excellence." },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    image: heroStudents,
    eyebrow: "Since 1998",
    title: "Where Young Minds Find Their Voice.",
    text: "For over two decades, Akshara has nurtured curious learners into confident, compassionate citizens of the world.",
    cta: { label: "Discover Our Story", to: "/about" as const },
  },
  {
    image: heroCampus,
    eyebrow: "A Campus that Inspires",
    title: "A Home Away From Home.",
    text: "Vibrant classrooms, modern labs, and lush green spaces designed for joyful learning.",
    cta: { label: "Tour the Campus", to: "/campus-life" as const },
  },
  {
    image: heroClassroom,
    eyebrow: "Excellence in Academics",
    title: "Curriculum That Awakens Curiosity.",
    text: "A future-ready CBSE curriculum blending strong fundamentals with creativity and inquiry.",
    cta: { label: "Explore Academics", to: "/academics" as const },
  },
  {
    image: heroLab,
    eyebrow: "Beyond the Classroom",
    title: "Learning That Goes Beyond Books.",
    text: "STEM labs, arts, sports, and life-skills — every Bhashyamite grows in every dimension.",
    cta: { label: "Apply Now", to: "/admissions" as const },
  },
];

function HomePage() {
  return (
    <Layout>
      <HeroSlider />
      <Highlights />
      <AboutBlock />
      <CampusGrid />
      <StatsBand />
      <AdmissionsCTA />
    </Layout>
  );
}

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div
              key={`${idx}-${i}`}
              className={`max-w-2xl text-primary-foreground ${idx === i ? "animate-in fade-in slide-in-from-bottom-6 duration-1000" : ""}`}
            >
              <div className="inline-block text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 border-l-2 border-gold pl-3">
                {s.eyebrow}
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] drop-shadow-lg">{s.title}</h1>
              <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl">{s.text}</p>
              <Link
                to={s.cta.to}
                className="mt-8 inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-full font-semibold shadow-gold hover:scale-105 transition-transform"
              >
                {s.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gold" : "w-5 bg-primary-foreground/50"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => setI((i - 1 + slides.length) % slides.length)}
        className="hidden md:grid absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary-foreground/10 backdrop-blur place-items-center text-primary-foreground hover:bg-gold hover:text-gold-foreground transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setI((i + 1) % slides.length)}
        className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary-foreground/10 backdrop-blur place-items-center text-primary-foreground hover:bg-gold hover:text-gold-foreground transition-colors"
        aria-label="Next"
      >
        <ChevronRight />
      </button>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: GraduationCap, title: "Holistic Curriculum", text: "CBSE-aligned learning with real-world projects, critical thinking, and digital literacy." },
    { icon: Heart, title: "Values First", text: "Every Aksharite is nurtured with empathy, integrity, and respect for diversity." },
    { icon: Trophy, title: "Proven Results", text: "Consistent toppers in board exams, olympiads, sports tournaments, and arts." },
    { icon: Sparkles, title: "Future-Ready", text: "STEM labs, robotics, design thinking, and global exchange programs." },
  ];
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-shadow group">
              <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={heroCampus} alt="Akshara campus" className="rounded-3xl shadow-elegant w-full" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-gold-foreground rounded-2xl p-6 shadow-gold hidden md:block">
            <div className="font-display text-4xl font-bold leading-none">25+</div>
            <div className="text-xs uppercase tracking-wider mt-1">Years of Legacy</div>
          </div>
        </div>
        <div>
          <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">About Akshara</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
            A modest dream that grew into a movement.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            What began in 1998 as a small classroom of fifteen children has today blossomed into one
            of the region's most respected CBSE institutions. At Akshara — meaning "the imperishable" —
            we believe education is the one gift that endures forever.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our pedagogy weaves together rigor and joy, tradition and innovation, individuality and community.
            Every Aksharite leaves us not just with marks on a sheet — but with a mind that questions, a
            heart that cares, and a will that builds.
          </p>
          <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CampusGrid() {
  const items = [
    { img: campusLibrary, title: "Campus Life", text: "Efforts have been made to retain the feel of a homely atmosphere.", to: "/campus-life" as const },
    { img: campusArts, title: "Our Values", text: "Every Aksharite is nurtured with values that last a lifetime.", to: "/about" as const },
    { img: campusSports, title: "Results & Achievements", text: "An institution that has created several achievers and winners.", to: "/academics" as const },
  ];
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Inside Akshara</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">A vibrant world of learning.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Link key={it.title} to={it.to} className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all">
              <div className="h-64 overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { v: "25+", l: "Years of Excellence" },
    { v: "3,500+", l: "Happy Students" },
    { v: "180+", l: "Expert Faculty" },
    { v: "98%", l: "Board Pass Rate" },
  ];
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-5xl md:text-6xl font-bold text-gold">{s.v}</div>
            <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdmissionsCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold opacity-5" />
          <div className="relative">
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Admissions 2026–2027</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary max-w-2xl mx-auto leading-tight">
              Give your child a head start that lasts a lifetime.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Limited seats available across all grades. Schedule a campus visit or begin your application today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/admissions" className="bg-gradient-hero text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform">
                Apply Now
              </Link>
              <Link to="/contact" className="border border-primary text-primary px-7 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
