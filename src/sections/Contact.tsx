"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, MapPin } from "lucide-react"; // Github et Linkedin retirés
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { profile } from "@/data/profile";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback pour les anciens navigateurs
      const textArea = document.createElement("textarea");
      textArea.value = profile.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl font-display font-bold mb-4"
          >
            Travaillons ensemble
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Vous avez un projet SaaS, e-commerce, ou un outil de gestion à développer ? 
            Discutons de la manière dont je peux apporter une valeur technique et sécuritaire à votre équipe.
          </p>
        </motion.div>

        {/* Cartes de contact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <a 
            href={`mailto:${profile.email}`}
            className="glass bg-white/5 border-white/10 hover:bg-white/10 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group"
            aria-label={`Envoyer un email à ${profile.email}`}
          >
            <Mail className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <p className="text-sm text-slate-400 break-all">
              {profile.email}
            </p>
          </a>

          {/* Téléphone */}
          <div className="glass bg-white/5 border-white/10 p-6 rounded-2xl flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="font-semibold mb-2 text-white">Téléphone</h3>
            <a href={`tel:${profile.phones[0].replace(/\s/g, "")}`} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors block">
              {profile.phones[0]}
            </a>
            <a href={`tel:${profile.phones[1].replace(/\s/g, "")}`} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors block mt-1">
              {profile.phones[1]}
            </a>
          </div>

          {/* Localisation */}
          <div className="glass bg-white/5 border-white/10 p-6 rounded-2xl flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <MapPin className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="font-semibold mb-2 text-white">Localisation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {profile.location}
            </p>
          </div>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            as="a" 
            href={`mailto:${profile.email}`}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white border-0"
          >
            <Mail className="w-4 h-4 mr-2" />
            M'envoyer un message
          </Button>
          
          <button 
            onClick={copyEmail}
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium border border-white/20 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            aria-label="Copier l'adresse email dans le presse-papier"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-400" />
                Email copié !
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copier l'email
              </>
            )}
          </button>
        </motion.div>

        {/* Liens sociaux */}
        <div className="flex justify-center gap-6 mt-12">
          <a 
            href={profile.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Profil GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Profil LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}