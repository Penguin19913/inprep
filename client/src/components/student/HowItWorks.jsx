import React from "react";
import { Search, IndianRupee, PlayCircle } from "lucide-react";

const brand = {
  off: "#ffffff",
};

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-3xl border border-black/5 bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,.04)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose class",
      desc: "Filter by class and pick a batch that fits your child.",
      icon: Search,
    },
    {
      title: "Enroll securely",
      desc: "Pay via UPI. Access is approved quickly.",
      icon: IndianRupee,
    },
    {
      title: "Learn anywhere",
      desc: "Attend live/recorded lessons on low data.",
      icon: PlayCircle,
    },
  ];
  return (
    <section
      id="how"
      className="py-16 w-full bg-[#f5eddf]"
      style={{ background: `linear-gradient(180deg, #f5eddf, 
      ${brand.off})` }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold">How it works</h2>
          <p className="mt-1 text-sm text-black/60">
            Three simple steps to get started
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Card key={i} className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-black/90 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-black/60">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;