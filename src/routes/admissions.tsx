import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroStudents from "@/assets/hero-students.jpg";
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">The Process</div>
            <h2 className="font-display text-4xl font-bold text-primary">Five simple steps to enrol.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-card rounded-2xl p-6 shadow-soft border-l-4 border-gold">
                <div className="font-display text-3xl font-bold text-gold">{s.n}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Fee Structure</div>
            <h2 className="font-display text-3xl font-bold text-primary mb-6">Transparent, all-inclusive fees.</h2>
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gradient-hero text-primary-foreground text-left">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Stage</th>
                    <th className="px-5 py-3 font-semibold">Admission</th>
                    <th className="px-5 py-3 font-semibold">Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={f.stage} className={i % 2 ? "bg-cream" : ""}>
                      <td className="px-5 py-3 font-semibold text-primary">{f.stage}</td>
                      <td className="px-5 py-3 text-muted-foreground">{f.admission}</td>
                      <td className="px-5 py-3 text-muted-foreground">{f.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">* Indicative figures. Includes tuition, library, lab and most activities.</p>
          </div>

          <div>
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Documents Required</div>
            <h2 className="font-display text-3xl font-bold text-primary mb-6">Keep these handy.</h2>
            <ul className="space-y-3">
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
            <Link to="/contact" className="mt-8 inline-flex bg-gradient-hero text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
