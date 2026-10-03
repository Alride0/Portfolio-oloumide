 "use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 
            id="education-heading"
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
          >
            Formation & Parcours Académique
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Un parcours académique solide, alliant informatique de gestion et administration des réseaux.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.article 
  key={index}
  initial={{ opacity: 0, y: 40, scale: 0.95 }} 
  whileInView={{ opacity: 1, y: 0, scale: 1 }} 
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
  className="glass glass-hover p-6 rounded-2xl flex gap-4"
>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  {index === 0 ? (
                    <Award className="w-6 h-6 text-indigo-600" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <span className="text-sm font-mono text-slate-500 font-semibold">
                  {edu.date}
                </span>
                <h3 className="text-lg font-display font-bold text-slate-900 mt-1 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 font-medium text-sm">
                  {edu.school}
                </p>
                {edu.detail && (
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {edu.detail}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}