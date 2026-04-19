import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroCampus from "@/assets/hero-campus1.jpeg";
import chairmanImage from "@/assets/director.jpeg";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Akshara School" },
      { name: "description", content: "Discover the legacy, vision and values that have shaped Akshara School over 25+ years." },
      { property: "og:title", content: "About Akshara School" },
      { property: "og:description", content: "A 8-year journey of nurturing minds and shaping leaders." },
      { property: "og:image", content: heroCampus },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero 
        eyebrow="About Us" 
        title="A legacy of learning, a future of leaders." 
        subtitle="Eight years of shaping minds, hearts, and characters." 
        image={heroCampus} 
      />

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Our Story</div>
          <h2 className="font-display text-4xl font-bold text-primary leading-tight">From a single classroom to a movement of excellence.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>Akshara School was founded in 2018 by a small group of educators who believed that every child deserved an education that was rigorous, joyful, and rooted in values. The word <em className="text-primary not-italic font-semibold">akshara</em> means "the imperishable" — and it captures our conviction that what we teach must endure long after the school bell rings.</p>
            <p>Today, with over 1000 students across pre-primary to senior secondary, Akshara stands as one of the most respected CBSE institutions in the region. Our alumni serve as doctors, engineers, artists, entrepreneurs, and changemakers across the globe — but more importantly, as kind, capable human beings.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver a holistic education that develops intellect, character, creativity, and a deep sense of social responsibility." },
            { icon: Eye, title: "Our Vision", text: "To be a globally respected institution where children become lifelong learners and ethical leaders." },
            { icon: Heart, title: "Our Values", text: "Integrity, curiosity, empathy, perseverance, and respect — the five pillars of every Aksharite." },
          ].map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="h-14 w-14 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center mb-5">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Message from the Director</div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image Left */}
            <div className="flex justify-center md:justify-start">
              <img
                src={chairmanImage}
                alt="Chairman"
                className="w-full max-w-sm h-[380px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content Right */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                "Education is not the filling of a pail, but the lighting of a fire."
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                At Akshara, we have spent eight years lighting fires — of curiosity, of compassion, of courage. We invite you to walk through our gates, meet our teachers, and see how children flourish when they are seen, heard, and challenged. Welcome home.
              </p>
              <p className="mt-6 font-display text-lg text-primary font-semibold">
                — Paladugu Archana Chowdhary, Director
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
