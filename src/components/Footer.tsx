import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl font-bold mb-3">Akshara School of Excellence</div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Nurturing curious minds, compassionate hearts, and confident futures since 2018.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.facebook.com/p/Eluru-Akshara-schools-100091301386090/" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground grid place-items-center transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/popular/akshara-school-eluru/" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground grid place-items-center transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.youtube.com/channel/UC6TKhN4gY8cV9iPNxOc4m_g" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground grid place-items-center transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-primary-foreground/70 hover:text-gold">About Us</Link></li>
            <li><Link to="/academics" className="text-primary-foreground/70 hover:text-gold">Academics</Link></li>
            <li><Link to="/campus-life" className="text-primary-foreground/70 hover:text-gold">Campus Life</Link></li>
            <li><Link to="/admissions" className="text-primary-foreground/70 hover:text-gold">Admissions</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/70 hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Programs</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Pre-Primary (Nursery–UKG)</li>
            <li>Primary (Grades 1–5)</li>
            <li>Middle School (Grades 6–8)</li>
            <li>Senior Secondary (Grades 9–10)</li>
            <li>CBSE Curriculum</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gold mb-4 text-sm uppercase tracking-wider">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Door No 2B, Near Athidhi International Hotel, Gubbala Vari Street, RR Peta, Eluru-534002, Andhra Pradesh</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> +91 9121327392</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> aksharaschools2018@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Akshara School. All rights reserved.</span>
          <span>Crafted with care for tomorrow's leaders.</span>
        </div>
      </div>
    </footer>
  );
}
