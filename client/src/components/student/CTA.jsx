import React from "react";

const brand = {
  green: "#18A957",
  off: "#F6F6F7",
};

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-3xl border border-black/5 bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,.04)] backdrop-blur ${className}`}
  >
    {children}
  </div>
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

const CTA = () => (
  <section
    className="w-full bg-[#f5eddf] py-16"
    style={{
      background: `radial-gradient(1000px 300px at 0% 0%, ${brand.green}20, transparent), linear-gradient(180deg, #ffffff, ${brand.off})`,
    }}
  >
    <div className="mx-auto max-w-6xl px-4 lg:px-8">
      <Card className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
        <div>
          <h3 className="text-xl font-extrabold">
            Ready to start learning with InPrep?
          </h3>
          <p className="mt-1 text-sm text-black/70">
            Create your free account and explore all batches.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            className="bg-black text-white hover:bg-black/90"
            as="a"
            href="/auth/signup"
          >
            Create free account
          </Button>
          <Button
            className="bg-white text-black hover:bg-black/5"
            as="a"
            href="/courses"
          >
            Browse courses
          </Button>
        </div>
      </Card>
    </div>
  </section>
);

export default CTA;