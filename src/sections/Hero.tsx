"use client";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react"; // Github et Linkedin retirés
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte d'introduction */}
        <motion.div 
  initial={{ opacity: 0, x: -50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut" }} 
  className="space-y-6"
>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Disponible pour de nouvelles missions au Bénin
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
            {profile.name.split(" ")[0]} <br />
            <span className="text-indigo-600">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            {profile.title} spécialisé en <span className="font-semibold text-slate-900">{profile.tagline}</span>. {profile.description}
          </p>
                    {/* Nouvelles Stats Clés pour la crédibilité */}
          <div className="flex flex-wrap gap-6 pt-2">
            <div>
              <p className="text-3xl font-display font-bold text-indigo-600">1-2+</p>
              <p className="text-sm text-slate-500 font-medium">Années d'expérience</p>
            </div>
            <div className="w-px bg-slate-300 hidden sm:block"></div>
            <div>
              <p className="text-3xl font-display font-bold text-indigo-600">3</p>
              <p className="text-sm text-slate-500 font-medium">Stages réalisés</p>
            </div>
            <div className="w-px bg-slate-300 hidden sm:block"></div>
            <div>
              <p className="text-3xl font-display font-bold text-indigo-600">100%</p>
              <p className="text-sm text-slate-500 font-medium">Projets déployés</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button as="a" href="#projects">Voir mes projets</Button>
            <Button variant="outline" as="a" href={profile.cvPath} download>
              <Download className="w-4 h-4 mr-2" />
              Télécharger mon CV
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Photo de profil */}
        <motion.div 
  initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
  animate={{ opacity: 1, scale: 1, rotate: 0 }} 
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} 
  className="relative flex justify-center md:justify-end"
>

          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 flex items-center justify-center text-slate-400">
             {/* Remplace le src par ta vraie photo plus tard */}
             <Image 
               src={profile.profileImage} 
               alt={profile.name}
               fill
               className="object-cover"
               priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

             />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
  initial={{ opacity: 0, y: -20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ delay: 1.2, duration: 0.8 }} 
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}></motion.div>
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}