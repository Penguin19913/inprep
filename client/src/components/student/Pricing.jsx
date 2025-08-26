import React from "react";
import { CheckCircle2 } from "lucide-react";

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

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: 299,
      features: ["1 month access", "Recorded + Live", "Worksheets"],
      cta: "Start now",
    },
    {
      name: "Value Pack",
      price: 799,
      features: ["3 months access", "All subjects", "Doubt support"],
      highlight: true,
      cta: "Most popular",
    },
    {
      name: "Exam Booster",
      price: 1499,
      features: ["6 months", "Mock tests", "Reports"],
      cta: "Go pro",
    },
  ];
  return (
    <section id="pricing" className="w-full bg-[#f5eddf] py-16 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold">
            Simple pricing that fits every family
          </h2>
          <p className="mt-1 text-sm text-black/60">
            Transparent plans. No hidden fees.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Card
              key={i}
              className={`p-6 ${t.highlight ? "ring-2 ring-black" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold">{t.name}</h3>
                {t.highlight && <Badge>Best value</Badge>}
              </div>
              <div className="mt-2 text-3xl font-extrabold">
                ₹{t.price}
                <span className="text-base font-semibold text-black/60">
                  /mo
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full bg-black text-white hover:bg-black/90"
                as="a"
                href="/checkout"
              >
                {t.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;