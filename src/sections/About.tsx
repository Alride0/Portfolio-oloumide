"use client";
import { motion } from "framer-motion";
import { Shield, Code2, Database } from "lucide-react";

export default function About() {
  const items = [
    { 
      icon: Code2, 
      title: "Développement Full-Stack", 
      desc: "De l'interface utilisateur réactive avec React/Next.js à la logique serveur robuste avec Node.js/Express." 
    },
    { 
      icon: Shield, 
      title: "Sécurité Applicative", 
      desc: "Intégration des bonnes pratiques (OWASP, authentification JWT, validation des données) dès la conception." 
    },
    { 
      icon: Database, 
      title: "Architecture Modulaire", 
      desc: "Privilégier le Clean Code et une architecture découplée pour garantir la scalabilité et la maintenabilité." 
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">À propos de moi</h2>
          <div className="w-20 h-1 section-divider mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
  key={i} 
  initial={{ opacity: 0, y: 40 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true, margin: "-100px" }} 
  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }} 
  className="glass glass-hover p-8 rounded-2xl"
>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}