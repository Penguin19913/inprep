import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  BookOpen,
  Users,
  Sparkles,
  IndianRupee,
} from "lucide-react";
import SearchBar from "./SearchBar";

const brand = {
  orange: "#FE7E1D",
  off: "#F6F6F7",
  blue: "#0A2540",
  green: "#008F3F",
};

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium ${className}`}
  >
    {children}
  </span>
);

const Button = ({ className = "", children, as = "button", ...props }) => {
  const As = as;
  return (
    <As
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:shadow-md active:scale-[.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </As>
  );
};

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-3xl border border-black/5 bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,.04)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="mx-auto w-full bg-[#f5eddf] text-center"
  >
    <section
      className="relative w-full"
      style={{
        background: `radial-gradient(1200px 600px at 80% -20%, ${brand.orange}20, transparent), linear-gradient(180deg, #ffffff, ${brand.off})`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mx-auto mb-5 bg-white/90">
            NCERT-aligned • Teacher-led • Hindi & English
          </Badge>
          <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl">
            Complete NCERT-based learning starting from{" "}
            <span style={{ color: brand.orange }}>₹299</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-black/70">
            Fun, affordable, teacher-led classes from Class 1 to 12. Learn on
            mobile with low data usage.
          </p>

          <div>
            <SearchBar />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              className="text-white transition-colors"
              style={{
                backgroundColor: brand.green,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#007a36")
              } // darker shade
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = brand.green)
              }
              as="a"
              href="#courses"
            >
              Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="bg-white text-black hover:bg-black/5"
              as="a"
              href="#how"
            >
              See how it works
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {[
            { icon: Star, title: "Top-rated teachers" },
            { icon: ShieldCheck, title: "Trusted by parents" },
            { icon: BookOpen, title: "NCERT-based" },
            { icon: Users, title: "Small batch sizes" },
            { icon: Sparkles, title: "Doubt support" },
            { icon: IndianRupee, title: "Value pricing" },
          ].map((f, i) => (
            <Card key={i} className="flex items-center gap-3 p-4">
              <f.icon className="h-5 w-5 text-black/70" />
              <p className="text-sm font-medium text-black/80">{f.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default Hero;
