 "use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/profile";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 
            id="experience-heading"
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
          >
            Parcours Professionnel
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Mon évolution à travers des stages et missions concrètes.
          </p>
          <div className="w-20 h-1 section-divider mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline verticale */}
        <div className="relative space-y-8">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div 
  key={index}
  initial={{ opacity: 0, x: -40 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
  className="relative flex items-start group"
>
              {/* Point sur la timeline */}
              <div className="absolute left-8 -translate-x-1/2 mt-2 hidden md:block">
                <div className="w-4 h-4 rounded-full border-4 border-primary-600 bg-white group-hover:bg-primary-600 transition-colors duration-300"></div>
              </div>

              {/* Carte d'expérience */}
              <div className="ml-0 md:ml-16 flex-1 glass glass-hover p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold">
                    <Briefcase className="w-4 h-4" />
                    {exp.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                  {exp.title}
                </h3>
                
                <p className="text-primary-600 font-medium mb-3">
                  {exp.company}
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}