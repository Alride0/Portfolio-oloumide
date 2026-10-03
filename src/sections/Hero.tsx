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
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center 2xl:max-w-6xl">
        
        {/* Texte d'introduction */}
        <motion.div 
  initial={{ opacity: 0, x: -50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut" }} 
  className="space-y-6"
>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Disponible pour de nouvelles missions au Bénin
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-display font-bold text-foreground leading-tight">
            {profile.name.split(" ")[0]} <br />
            <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
            {profile.title} spécialisé en <span className="font-semibold text-foreground">{profile.tagline}</span>. {profile.description}
          </p>
                    {/* Nouvelles Stats Clés pour la crédibilité */}
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
            <div>
              <p className="text-3xl font-display font-bold text-primary-600 dark:text-primary-400">1-2+</p>
              <p className="text-sm text-muted font-medium">Années d&apos;expérience</p>
            </div>
            <div className="w-px bg-slate-300 dark:bg-white/20 hidden sm:block"></div>
            <div>
              <p className="text-3xl font-display font-bold text-primary-600 dark:text-primary-400">3</p>
              <p className="text-sm text-muted font-medium">Stages réalisés</p>
            </div>
            <div className="w-px bg-slate-300 dark:bg-white/20 hidden sm:block"></div>
            <div>
              <p className="text-3xl font-display font-bold text-primary-600 dark:text-primary-400">100%</p>
              <p className="text-sm text-muted font-medium">Projets déployés</p>
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
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-500/20 dark:hover:text-primary-300 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-500/20 dark:hover:text-primary-300 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2 rounded-full bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-500/20 dark:hover:text-primary-300 transition-colors">
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

          <div className="relative">
            {/* Halo lumineux */}
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-primary-500/30 via-accent-500/20 to-primary-500/30 blur-2xl"></div>
            {/* Cadre en dégradé indigo -> violet */}
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 2xl:w-[26rem] 2xl:h-[26rem] rounded-3xl p-1 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-400 shadow-2xl shadow-primary-600/25">
              <div className="relative w-full h-full rounded-[1.4rem] overflow-hidden bg-slate-200 dark:bg-primary-900">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
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
        <ArrowDown className="w-6 h-6 text-muted" />
      </motion.div>
    </section>
  );
}