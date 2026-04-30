import Link from "next/link";
const CALENDLY = "https://calendly.com/maheshwaribhagyashree914/30min";
import {
  FileStack,
  XCircle,
  PhoneOff,
  UserCheck,
  Stethoscope,
  Activity,
  Receipt,
  ClipboardList,
  LayoutDashboard,
  ArrowRight,
  Play,
  Clock,
  TrendingDown,
  Timer,
  CalendarCheck,
  Wrench,
  Users,
  RefreshCw,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const problems = [
  {
    icon: FileStack,
    title: "Paperwork Overload",
    body: "Nurses, ward clerks, and doctors spend hours on manual forms. Patient care suffers.",
  },
  {
    icon: XCircle,
    title: "Claim Rejections Cost You Revenue",
    body: "18% industry rejection rate means consistent revenue loss. Praano brings it to under 3%.",
  },
  {
    icon: PhoneOff,
    title: "Everything Runs on Phone Calls",
    body: "Inter-department communication is fragmented. Delays put patients at risk.",
  },
];

const steps = [
  {
    num: "01",
    title: "Admit",
    body: "Patient registered in under 8 minutes. Health ID created. Insurance pre-auth filed automatically. All departments notified instantly.",
  },
  {
    num: "02",
    title: "Treat & Manage",
    body: "Nurses enter vitals in 60 seconds. Doctors review on tablet. Ward clerks photograph and upload documents. Lab and pharmacy auto-sync.",
  },
  {
    num: "03",
    title: "Discharge & Recover",
    body: "AI generates discharge summary. Diagnostic codes auto-suggested. Claim filed in one click. 30-day follow-up activated.",
  },
];

const stats = [
  { icon: Clock, value: "Under 8 min", label: "Average admission time" },
  {
    icon: TrendingDown,
    value: "Under 3%",
    label: "Claim rejection rate (vs 18% industry avg)",
  },
  { icon: Timer, value: "1 hr 48 min", label: "Average discharge time" },
  {
    icon: CalendarCheck,
    value: "30 days",
    label: "Post-discharge follow-up, automated",
  },
];

const roles = [
  {
    icon: UserCheck,
    title: "Receptionist",
    body: "Patient registered in minutes. Health ID linked. Insurance type detected automatically.",
  },
  {
    icon: Stethoscope,
    title: "Doctor",
    body: "AI-drafted discharge summaries. Auto diagnostic coding. Patient history at a glance.",
  },
  {
    icon: Activity,
    title: "Nurse",
    body: "60-second vitals entry. Shift checklists. AI-compiled handover notes.",
  },
  {
    icon: Receipt,
    title: "Billing Team",
    body: "Pre-auth auto-filed. One-click claim submission. Live accounts receivable pipeline.",
  },
  {
    icon: ClipboardList,
    title: "Ward Clerk",
    body: "Photo upload queue. Document tracking. Gap alerts for pending records.",
  },
  {
    icon: LayoutDashboard,
    title: "Administrator",
    body: "Live ward map. Claims dashboard. Operational reports on demand.",
  },
];

const differentiators = [
  {
    icon: Wrench,
    title: "Built for your hospital, not a generic template",
    body: "Praano is a product accelerator — not a SaaS you log into and figure out. We implement, configure, and customize it to match your specific workflows, departments, and operational quirks.",
  },
  {
    icon: Users,
    title: "We work alongside your team",
    body: "Every engagement is consultative. Our team embeds with yours through implementation, staff training, and go-live — so the system actually gets used, not shelved after onboarding.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing, not one-and-done",
    body: "Hospitals evolve. New departments, new payers, new regulations. Praano grows with you. We remain your technology partner long after the initial deployment.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-light/40 to-white">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-light rounded-full text-xs font-semibold text-teal mb-6">
                Consultative implementation · Not a SaaS product
              </div>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] tracking-tight">
                End-to-End Hospital Workflow,{" "}
                <span className="text-teal">Automated.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <p className="mt-6 text-lg sm:text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
                From admission to discharge to 30-day follow-up — we implement
                AI-powered workflow automation tailored to how your hospital
                actually runs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark text-base"
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/demo"
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-teal text-teal font-semibold rounded-lg hover:bg-teal-light text-base"
                >
                  <Play size={18} />
                  See Live Demo
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              The Problem
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              Why Hospitals Need Praano
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="card-hover bg-grey rounded-xl p-8 h-full group">
                  <div className="icon-group w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-5 text-teal group-hover:bg-teal group-hover:text-white">
                    <p.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-teal-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              How It Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              Three Steps. Full Automation.
            </h2>
          </AnimatedSection>
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
            {steps.map((s, i) => (
              <>
                <AnimatedSection key={s.num} delay={(i + 1) as 1 | 2 | 3} className="flex-1">
                  <div className="card-hover bg-white rounded-xl p-8 shadow-sm h-full">
                    <span className="text-4xl font-bold text-teal/20">{s.num}</span>
                    <h3 className="text-xl font-bold text-ink mt-3 mb-3">{s.title}</h3>
                    <p className="text-ink/60 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </AnimatedSection>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-12 shrink-0 text-teal/25">
                    <ArrowRight size={28} />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 lg:py-16 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4} className="text-center">
                <div className="flex justify-center mb-3">
                  <s.icon size={28} className="text-teal" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {s.value}
                </div>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              Built for Every Role
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              One Platform, Tailored Experiences
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <AnimatedSection key={r.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card-hover border border-gray-100 rounded-xl p-6 group h-full">
                  <div className="icon-group w-10 h-10 bg-teal-light rounded-lg flex items-center justify-center mb-4 text-teal group-hover:bg-teal group-hover:text-white">
                    <r.icon size={20} />
                  </div>
                  <h3 className="font-bold text-ink mb-2">{r.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{r.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Praano Difference */}
      <section className="py-16 lg:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              Why We're Different
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              Not software. A partnership.
            </h2>
            <p className="mt-4 text-ink/60 max-w-2xl mx-auto">
              Most hospital software is bought, deployed half-heartedly, and
              abandoned within a year. Praano works differently — because we
              implement it alongside you.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="card-hover bg-white rounded-xl p-8 h-full">
                  <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-5 text-teal">
                    <d.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{d.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{d.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              See It in Action
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              Live Prototype
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={1} className="max-w-4xl mx-auto">
            <div className="bg-ink rounded-2xl p-2 shadow-2xl">
              <div className="bg-ink rounded-t-xl px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-white/50 text-center">
                    praano-demo.vercel.app
                  </div>
                </div>
              </div>
              <div className="bg-grey rounded-b-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play size={32} className="text-teal ml-1" />
                  </div>
                  <p className="text-ink/40 text-sm">
                    Click below to explore the full demo
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/demo"
                className="btn-press inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark"
              >
                Explore Full Demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to transform your hospital?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Book a free 30-minute demo. See Praano running live, configured
              for your hospital type.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-bold rounded-lg hover:bg-gray-50 text-lg"
            >
              Book My Demo
              <ArrowRight size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
