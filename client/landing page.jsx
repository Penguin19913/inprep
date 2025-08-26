import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  ShieldCheck,
  BookOpen,
  Users,
  Sparkles,
  IndianRupee,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";

// ---------- Replace these with your actual components or routes if using shadcn/ui in your app ----------
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

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-sm shadow-inner placeholder:text-black/40 focus:border-black/40 focus:outline-none ${className}`}
    {...props}
  />
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium ${className}`}
  >
    {children}
  </span>
);
// -------------------------------------------------------------------------------------------------------

const brand = {
  blue: "#0A2540",
  green: "#18A957",
  orange: "#FF6B35",
  off: "#F6F6F7",
};

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Why InPrep", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const categories = [
  { key: "1-5", label: "Class 1–5" },
  { key: "6-8", label: "Class 6–8" },
  { key: "9-10", label: "Class 9–10" },
  { key: "11-12", label: "Class 11–12" },
];

// Mock courses — Replace with API data easily
const mockCourses = [
  {
    id: 1,
    title: "Prarambh Jr 1.0",
    price: 299,
    cls: "1-5",
    subjects: ["Maths", "EVS", "English"],
    thumb:
      "https://images.unsplash.com/photo-1604871000636-074fa5117949?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Udaan 1.0",
    price: 449,
    cls: "6-8",
    subjects: ["Maths", "Science", "SST"],
    thumb:
      "https://images.unsplash.com/photo-1584697964156-3fddc90bfa3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Shakti 1.0",
    price: 999,
    cls: "9-10",
    subjects: ["Physics", "Chemistry", "Maths"],
    thumb:
      "https://images.unsplash.com/photo-1523246191891-31184b9f41f9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Navodaya Prep",
    price: 299,
    cls: "6-8",
    subjects: ["Reasoning", "Maths", "GK"],
    thumb:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Replace src with your own asset path */}
      <div className="h-9 w-9 overflow-hidden rounded-xl bg-white shadow ring-1 ring-black/10">
        <img
          src="/assets/inprep-logo.png"
          alt="InPrep"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-lg font-extrabold" style={{ color: brand.blue }}>
        In<span className="text-black">Prep</span>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-black/70 hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            className="bg-white text-black hover:bg-black/5"
            as="a"
            href="/auth/signin"
          >
            Sign in
          </Button>
          <Button
            className="text-white"
            style={{ backgroundColor: brand.blue }}
            as="a"
            href="/auth/signup"
          >
            Create Account
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <section
        className="relative bg-[#f5eddf]"
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

            <div className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-2xl border border-black/10 bg-white/80 p-2 shadow">
              <Search className="ml-2 h-5 w-5 text-black/40" />
              <Input placeholder="Search for batches, e.g., Class 8 Science" />
              <Button
                className="text-white"
                style={{ backgroundColor: brand.blue }}
              >
                Search
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                className="bg-black text-white hover:bg-black/90"
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
}

function CategoryPills({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => onChange(c.key)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            active === c.key
              ? "border-transparent bg-black text-white"
              : "border-black/10 bg-white text-black hover:bg-black/5"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-40 w-full">
          <img
            src={course.thumb}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold">{course.title}</h3>
            <Badge>₹{course.price}</Badge>
          </div>
          <p className="text-sm text-black/60">{course.subjects.join(" • ")}</p>
          <div className="flex items-center gap-2 pt-1">
            <Button
              className="bg-black text-white hover:bg-black/90"
              as="a"
              href={`/course/${course.id}`}
            >
              View details
            </Button>
            <Button
              className="bg-white text-black hover:bg-black/5"
              as="a"
              href={`/enroll/${course.id}`}
            >
              Enroll
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function Courses() {
  const [active, setActive] = React.useState(categories[0].key);
  const filtered = mockCourses.filter((c) => c.cls === active);

  return (
    <section id="courses" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold">Popular Courses</h2>
            <p className="mt-1 text-sm text-black/60">
              Browse by class and start learning today.
            </p>
          </div>
          <CategoryPills active={active} onChange={setActive} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.length ? (
            filtered.map((c) => <CourseCard key={c.id} course={c} />)
          ) : (
            <Card className="p-8 text-center text-black/70">
              No courses found in this class (yet).
            </Card>
          )}
        </div>

        <div className="mt-8 text-center">
          <Button
            className="bg-white text-black hover:bg-black/5"
            as="a"
            href="/courses"
          >
            Show all courses
          </Button>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
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
      className="py-16"
      style={{ background: `linear-gradient(180deg, ${brand.off}, #ffffff)` }}
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
}

function WhyInPrep() {
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
    <section id="why" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Badge>Why InPrep</Badge>
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
                href="#pricing"
              >
                See pricing
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
              src="https://images.unsplash.com/photo-1596495578065-8a35f0b77d45?q=80&w=1600&auto=format&fit=crop"
              alt="Students learning"
              className="h-full w-full object-cover"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
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
      className="py-16"
      style={{ background: `linear-gradient(180deg, #ffffff, ${brand.off})` }}
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
}

function Pricing() {
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
    <section id="pricing" className="bg-white py-16">
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
}

function FAQ() {
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
    <section id="faq" className="py-16" style={{ background: brand.off }}>
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
}

function CTA() {
  return (
    <section
      className="py-16"
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
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#0A0A0B] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-white/70">
            InPrep by BeyondStudy — a leading online learning platform
            delivering NCERT-based courses from Class 1 to 12.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="/refunds">Refund Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Privacy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" /> +91 6387 992259
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" /> +91 9103 998735
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> contactinprep@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> India
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center text-xs text-white/60 lg:px-8">
        © {new Date().getFullYear()} InPrep by BeyondStudy. All rights reserved.
      </div>
    </footer>
  );
}

export default function InPrepHomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <Hero />
      <WhyInPrep />
      <Courses />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
