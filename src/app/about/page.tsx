import {
  Stethoscope,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
const CALENDLY = "https://calendly.com/maheshwaribhagyashree914/30min";

const values = [
  {
    icon: Stethoscope,
    title: "Clinical-First Design",
    body: "Every screen is built by a physician who understands the chaos of a hospital floor. No feature ships without clinical validation.",
  },
  {
    icon: Target,
    title: "Outcome Over Output",
    body: "We measure success by claim approval rates, discharge speed, and patient outcomes — not feature count or lines of code.",
  },
  {
    icon: Lightbulb,
    title: "AI That Assists, Not Replaces",
    body: "Our AI drafts, suggests, and automates — but the clinician always decides. Technology should amplify human judgment, not bypass it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">
              About
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Built by a Doctor Who Lived the Problem
            </h1>
            <p className="mt-5 text-lg text-ink/60 max-w-2xl mx-auto">
              Praano was born from firsthand experience with the broken
              workflows, lost claims, and communication gaps that plague
              hospitals every day — everywhere.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <AnimatedSection className="w-full lg:w-2/5" delay={1}>
                <div className="bg-grey rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope size={48} className="text-teal" />
                    </div>
                    <h3 className="font-bold text-ink text-lg">
                      Dr. Bhagyashree Maheshwari
                    </h3>
                    <p className="text-teal text-sm font-medium mt-1">
                      Founder, Praano
                    </p>
                    <p className="text-ink/50 text-sm mt-1">
                      Physician &middot; Technologist
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="w-full lg:w-3/5" delay={2}>
                <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-6">
                  The Origin Story
                </h2>
                <div className="space-y-4 text-ink/70 leading-relaxed">
                  <p>
                    As a practicing physician, Dr. Bhagyashree witnessed the
                    same scene repeat across every hospital she worked in: nurses
                    buried in paperwork instead of caring for patients, insurance
                    claims rejected over coding errors, and critical patient
                    information lost between shift changes.
                  </p>
                  <p>
                    The problem wasn&apos;t a lack of technology — it was that
                    existing hospital software was designed by engineers who had
                    never worked a hospital shift. The result was clunky systems
                    that staff worked around rather than with, and workflows that
                    created more problems than they solved.
                  </p>
                  <p>
                    Praano is the system she wished existed. Built from the
                    clinical floor up, it understands the rhythm of a hospital —
                    the urgency of admissions, the precision required in
                    discharge summaries, the frustration of chasing insurance
                    approvals. Every feature exists because a real hospital
                    workflow demanded it.
                  </p>
                  <p>
                    The name &ldquo;Praano&rdquo; comes from the Sanskrit word
                    for life force — the vital energy that keeps everything
                    running. That&apos;s what Praano aims to be for hospitals:
                    the invisible infrastructure that keeps operations flowing so
                    clinicians can focus on what matters.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              What We Believe
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="card-hover bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-5 text-teal">
                    <v.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{v.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-ink/70 leading-relaxed">
              To give every hospital — from a 20-bed nursing home to a 500-bed
              multispecialty center — access to the same operational intelligence
              that the best healthcare systems in the world run on. Not through
              expensive consulting or generic software, but through an AI-native
              platform that understands how hospitals actually work, implemented
              by people who care deeply about getting it right.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Let&apos;s talk about your hospital
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Every hospital is different. Tell us about yours and we&apos;ll
              show you exactly how Praano fits.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-bold rounded-lg hover:bg-gray-50 text-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
