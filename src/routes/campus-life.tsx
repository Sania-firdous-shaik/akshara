import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import campusLibrary from "@/assets/campus-library.jpeg";
import campusSports from "@/assets/campus-sports.jpeg";
import campusArts from "@/assets/campus-arts.jpeg";
import heroLab from "@/assets/hero-lab.jpeg";
import heroCampus from "@/assets/hero-campus.jpeg";
import heroClassroom from "@/assets/hero-classroom.jpeg";

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
  {
    img: campusSports,
    title: "Sports & Athletics",
    text: "Expansive playgrounds, a 200m athletics track, and well-equipped indoor courts supporting inter-school and state-level competitions."
  },
  {
    img: campusLibrary,
    title: "Libraries & Reading",
    text: "A rich collection of over 2000 books, digital learning resources, and structured reading programs to build strong literacy habits."
  },
  {
    img: campusArts,
    title: "Arts & Culture",
    text: "A vibrant platform for music, dance, theatre, and visual arts with annual cultural festivals and student-led exhibitions."
  },
  {
    img: heroLab,
    title: "Science & Innovation",
    text: "Fully equipped laboratories for Physics, Chemistry, Biology, and Robotics encouraging hands-on experimental learning."
  },
  {
    img: heroClassroom,
    title: "Modern Classrooms",
    text: "Smart classrooms with digital boards, collaborative learning spaces, and low student-teacher ratio for personalised attention."
  },
  {
    img: heroCampus,
    title: "Eco-Friendly Campus",
    text: "A lush, eco-friendly campus with tree-lined pathways, a garden, and sustainable green spaces that promote environmental awareness among students."
  },
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
