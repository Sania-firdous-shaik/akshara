import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroStudents from "@/assets/hero-students.jpeg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–2027 — Akshara School" },
      { name: "description", content: "Admissions are open for the 2026–2027 academic year at Akshara School. Apply online or schedule a campus visit." },
      { property: "og:title", content: "Admissions Open — Akshara School" },
      { property: "og:description", content: "Limited seats available across all grades for 2026–2027." },
      { property: "og:image", content: heroStudents },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: "01", title: "Enquire", text: "Submit the enquiry form or call our admissions desk to register your interest." },
  { n: "02", title: "Campus Visit", text: "Schedule a guided tour to meet our faculty and experience the campus." },
  { n: "03", title: "Application", text: "Complete the online application along with the required documents." },
  { n: "04", title: "Interaction", text: "An informal conversation with the child and parents (Grade 1 and above)." },
  { n: "05", title: "Confirmation", text: "Offer letters are issued, followed by fee payment and orientation." },
];

const fees = [
  { stage: "Pre-Primary", admission: "₹25,000", annual: "₹85,000" },
  { stage: "Primary (1–5)", admission: "₹30,000", annual: "₹1,05,000" },
  { stage: "Middle (6–8)", admission: "₹35,000", annual: "₹1,25,000" },
  { stage: "Senior (9–12)", admission: "₹40,000", annual: "₹1,55,000" },
];

function AdmissionsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Admissions 2026–2027" title="Begin your child's Akshara journey." subtitle="Limited seats are available across all grades. We invite you to apply." image={heroStudents} />

      <section className="py-20 bg-cream">
  <div className="container mx-auto px-6">

    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">
        Why Choose Us
      </div>
      <h2 className="font-display text-4xl font-bold text-primary">
        Why parents trust Akshara School
      </h2>
      <p className="text-muted-foreground mt-3">
        We focus on academic excellence, discipline, and holistic student development.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-card p-8 rounded-2xl shadow-soft hover:scale-105 transition-transform">
        <h3 className="text-xl font-bold text-primary mb-3">Quality Education</h3>
        <p className="text-muted-foreground">
          Strong academic foundation with structured learning and experienced teachers.
        </p>
      </div>

      <div className="bg-card p-8 rounded-2xl shadow-soft hover:scale-105 transition-transform">
        <h3 className="text-xl font-bold text-primary mb-3">Experienced Faculty</h3>
        <p className="text-muted-foreground">
          70+ dedicated teachers ensuring personal attention to every student.
        </p>
      </div>

      <div className="bg-card p-8 rounded-2xl shadow-soft hover:scale-105 transition-transform">
        <h3 className="text-xl font-bold text-primary mb-3">Holistic Growth</h3>
        <p className="text-muted-foreground">
          Sports, cultural activities, and life skills for overall development.
        </p>
      </div>

      <div className="bg-card p-8 rounded-2xl shadow-soft hover:scale-105 transition-transform">
        <h3 className="text-xl font-bold text-primary mb-3">Modern Facilities</h3>
        <p className="text-muted-foreground">
          Smart classrooms, labs, and safe campus environment.
        </p>
      </div>

      <div className="bg-card p-8 rounded-2xl shadow-soft hover:scale-105 transition-transform">
        <h3 className="text-xl font-bold text-primary mb-3">Strong Results</h3>
        <p className="text-muted-foreground">
          98% board pass rate with consistent academic excellence.
        </p>
      </div>

      <div className="bg-card p-8 rounded-2xl shadow-soft hover:scale-105 transition-transform">
        <h3 className="text-xl font-bold text-primary mb-3">Safe Environment</h3>
        <p className="text-muted-foreground">
          Secure campus with disciplined and student-friendly atmosphere.
        </p>
      </div>

    </div>
  </div>
  
</section>
<section className="py-20">
  <div className="container mx-auto px-6 max-w-3xl">

    <div className="text-center mb-10">
      <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">
        Documents Required
      </div>

      <h2 className="font-display text-4xl font-bold text-primary">
        Keep these ready before applying
      </h2>

      <p className="text-muted-foreground mt-3">
        Make sure you have the following documents for smooth admission process.
      </p>
    </div>

    <div className="bg-card rounded-2xl p-8 shadow-soft">
      <ul className="space-y-5">
        {[
          "Birth certificate (original + copy)",
          "Previous school transfer certificate",
          "Last academic year report card",
          "Aadhaar of student and parents",
          "Four passport-size photographs",
          "Address proof",
        ].map((d) => (
          <li key={d} className="flex gap-3 items-start">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{d}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="text-center mt-10">
      <Link
        to="/contact"
        className="inline-flex bg-gradient-hero text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform"
      >
        Start Your Application
      </Link>
    </div>

  </div>
</section>
    </Layout>
  );
}
