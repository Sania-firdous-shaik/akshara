import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroCampus from "@/assets/hero-campus1.jpeg";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Akshara School" },
      { name: "description", content: "Get in touch with Akshara School — phone, email, address, and visit hours." },
      { property: "og:title", content: "Contact Akshara School" },
      { property: "og:description", content: "Reach our admissions team or schedule a campus visit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." subtitle="Reach out for admissions." image={heroCampus} />

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Reach Us</div>
            <h2 className="font-display text-4xl font-bold text-primary leading-tight">Visit our campus, meet our family.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We welcome parents and prospective students for guided campus tours from Monday to Saturday. Drop us a line and we'll arrange a time that suits you.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Address", text: "Door No 2B, Near Athidhi International Hotel, Gubbala Vari Street, RR Peta, Eluru-534002, Andhra Pradesh" },
                { icon: Phone, label: "Phone", text: "+91 9121327392" },
                { icon: Mail, label: "Email", text: "aksharaschools2018@gmail.com" },
                { icon: Clock, label: "Office Hours", text: "Mon – Sat · 8:30 AM – 5:30 PM" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold font-semibold">{c.label}</div>
                    <div className="text-foreground mt-0.5">{c.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-primary">Send us a message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Parent name" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary outline-none transition-colors" />
                <input required placeholder="Phone number" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary outline-none transition-colors" />
              </div>
              <input required type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary outline-none transition-colors" />
              <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary outline-none transition-colors">
                <option>Grade of interest</option>
                <option>Pre-Primary</option>
                <option>Primary (1–5)</option>
                <option>Middle (6–8)</option>
                <option>Senior (9–12)</option>
              </select>
              <textarea rows={4} placeholder="Your message" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary outline-none transition-colors resize-none" />
              <button type="submit" className="w-full bg-gradient-hero text-primary-foreground py-3.5 rounded-full font-semibold shadow-elegant hover:scale-[1.02] transition-transform">
                {submitted ? "Thank you — we'll be in touch!" : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
