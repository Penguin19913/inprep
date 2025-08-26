import React from "react";
import { CheckCircle2 } from "lucide-react";
import { assets } from "../../assets/assests";

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

const WhyInPrep = () => {
  const points = [
    {
      title: "NCERT-first approach",
      desc: "All lessons map to the curriculum with clear outcomes.",
    },
    {
      title: "Teacher-led & interactive",
      desc: "Live doubt solving with small batch focus.",
    },
    {
      title: "Affordable for everyone",
      desc: "Plans start at just ₹299 with scholarships for merit.",
    },
    {
      title: "Mobile-first & light",
      desc: "Works smoothly on low-end phones and low data.",
    },
  ];
  return (
    <section id="why" className="w-full bg-[#f5eddf] scroll-mt-16 mt-5">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Badge>Why&nbsp;<span className="text-[#FE7E1D]">In</span><span className="text-[#008F3F]">Prep</span></Badge>
            <h2 className="mt-2 text-2xl font-extrabold">
              Learning that respects your time & money
            </h2>
            <ul className="mt-4 space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-black" />
                  <span>
                    <span className="font-semibold">{p.title}</span> —{" "}
                    <span className="text-black/70">{p.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Button
                className="bg-black text-white hover:bg-black/90"
                as="a"
                href="#footer"
              >
                Contact
              </Button>
              <Button
                className="bg-white text-black hover:bg-black/5"
                as="a"
                href="#faq"
              >
                Read FAQs
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden">
            <img
              src={assets.kids_studying}
              alt="Students learning"
              className="h-full w-full object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyInPrep;