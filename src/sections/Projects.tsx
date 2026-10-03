"use client";

import { motion } from "framer-motion";
import { ExternalLink,ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/profile";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useState } from "react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 
            id="projects-heading"
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
          >
            Projets Réalisés
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Des applications concrètes développées pour résoudre des problèmes réels, avec un accent sur la qualité, la sécurité et la performance.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Composant isolé pour gérer l'état de la galerie proprement
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fallback si la liste d'images est vide ou mal configurée
  const images = project.images && project.images.length > 0 ? project.images : [project.images?.[0] || ""];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      className="glass rounded-3xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        {/* Galerie d'images interactive */}
        <div className="relative h-72 lg:h-auto bg-slate-100 group">
          <Image 
            src={images[currentImageIndex]} 
            alt={`Capture ${currentImageIndex + 1} du projet ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Overlay de navigation (visible au survol ou toujours sur mobile) */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-white shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-white shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Indicateurs (dots) en bas de l'image */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Aller à l'image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Contenu du projet (inchangé) */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-indigo-600 font-semibold">
              {project.client}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-slate-500">{project.date}</span>
          </div>
          
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
            {project.title}
          </h3>
          
          <p className="text-slate-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <ul className="space-y-2 mb-6">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoLink && project.demoLink !== "#" && (
              <Button 
                as="a" 
                href={project.demoLink} 
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir la démo
              </Button>
            )}
            {project.githubLink && project.githubLink !== "#" && (
              <Button 
                as="a" 
                href={project.githubLink} 
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                Code source
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}