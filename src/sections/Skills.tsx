 "use client";
import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import Badge from "@/components/ui/Badge";

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 
            id="skills-heading"
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4"
          >
            Compétences Techniques
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Un stack technique moderne et polyvalent, constamment enrichi par l'apprentissage continu.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
  key={skillGroup.category}
  initial={{ opacity: 0, y: 40, scale: 0.95 }} 
  whileInView={{ opacity: 1, y: 0, scale: 1 }} 
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
  className="glass glass-hover p-6 rounded-2xl"
>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => {
                  const isLearning = item.toLowerCase().includes("apprentissage");
                  return (
                    <Badge key={item} variant={isLearning ? "learning" : "default"}>
                      {item.replace(" (en apprentissage)", "")}
                      {isLearning && <span className="ml-1 text-[10px] opacity-75">★</span>}
                    </Badge>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}