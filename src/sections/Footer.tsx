import { profile } from "@/data/profile";
import { Heart, Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Colonne 1 : Identité */}
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-2">
              {profile.name}
            </h3>
            <p className="text-sm text-slate-500 mb-4">{profile.title}</p>
            <p className="text-sm leading-relaxed max-w-xs">
              Conception d'applications web robustes, sécurisées et scalables, de la base de données à l'interface utilisateur.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">À propos</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Compétences</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact direct */}
          <div>
            <h4 className="font-semibold text-white mb-4">Me contacter</h4>
            <a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors mb-3"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
            <div className="flex gap-4 mt-4">
              <a 
                href={profile.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {currentYear} {profile.name}. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3 h-3 text-indigo-500 fill-indigo-500" /> au Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}