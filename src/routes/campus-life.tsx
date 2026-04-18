import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import campusLibrary from "@/assets/campus-library.jpg";
import campusSports from "@/assets/campus-sports.jpg";
import campusArts from "@/assets/campus-arts.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life — Akshara School" },
      { name: "description", content: "Explore Akshara's vibrant campus — sports, arts, libraries, labs, and a homely atmosphere for every child." },
      { property: "og:title", content: "Campus Life at Akshara School" },
      { property: "og:description", content: "A vibrant world of sports, arts, libraries, and labs." },
      { property: "og:image", content: campusSports },
    ],
  }),
  component: CampusPage,
});

const gallery = [
  { img: campusSports, title: "Sports & Athletics", text: "Two acres of playgrounds, a 200m track, indoor courts, and inter-school championships." },
  { img: campusLibrary, title: "Libraries & Reading", text: "Over 18,000 titles across two libraries, a digital archive, and weekly reading circles." },
  { img: campusArts, title: "Arts & Culture", text: "Annual fests, classical performances, choir, and student-run art exhibitions." },
  { img: heroLab, title: "Science & Innovation", text: "Modern physics, chemistry, biology and robotics labs designed for hands-on discovery." },
  { img: heroClassroom, title: "Vibrant Classrooms", text: "Smart boards, breakout zones, and small class sizes for personalised attention." },
  { img: heroCampus, title: "Green Campus", text: "Tree-lined avenues, butterfly garden, and an organic kitchen patch tended by students." },
];

function CampusPage() {
  return (
    <Layout>
      <PageHero eyebrow="Campus Life" title="A homely campus, a world of possibility." subtitle="Where every corner is designed to spark wonder and belonging." image={campusSports} />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g) => (
              <div key={g.title} className="group rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all">
                <div className="h-56 overflow-hidden">
                  <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary">{g.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
