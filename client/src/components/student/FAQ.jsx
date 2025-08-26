import React from "react";

const brand = {
  off: "#F6F6F7",
};

const FAQ = () => {
  const faqs = [
    {
      q: "Classes ka medium kya hai?",
      a: "Hindi + English, simple language me samjhaya jata hai.",
    },
    {
      q: "Live classes kab hoti hain?",
      a: "Evenings me; recorded videos 24x7 available hote hain.",
    },
    {
      q: "Payment kaise karen?",
      a: "UPI QR se. Payment ke baad access within few hours mil jata hai.",
    },
  ];
  return (
    <section id="faq" className="w-full bg-[#f5eddf] py-16 scroll-mt-16" style={{ background: brand.off }}>
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold">
          Frequently asked questions
        </h2>
        <div className="mt-6 divide-y divide-black/10 rounded-3xl border border-black/10 bg-white/70">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                {f.q}
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-sm text-black/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;