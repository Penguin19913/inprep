import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-3xl border border-black/5 bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,.04)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Riya Sharma (Parent)",
      text: "InPrep ne mere bachche ko foundation strong karne me bahut help ki. Teachers patient hain aur fees bhi affordable hai.",
    },
    {
      name: "Arjun (Class 10)",
      text: "Doubts instantly solve hote hain. Recorded videos se revision easy ho jata hai before exams!",
    },
    {
      name: "Meera (Class 6)",
      text: "Classes fun hoti hain. Worksheets aur quizzes ache hote hain. ",
    },
  ];
  return (
    <section
      className="py-16 w-full bg-[#f5eddf] scroll-mt-16"
      style={{ background: `linear-gradient(180deg, #ffffff, #F6F6F7)` }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold">
            Parents & students ❤️ InPrep
          </h2>
          <p className="mt-1 text-sm text-black/60">
            Real stories from real learners
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card key={i} className="p-6">
                <div className="mb-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm text-black/80">“{r.text}”</p>
                <p className="mt-3 text-sm font-semibold">{r.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;