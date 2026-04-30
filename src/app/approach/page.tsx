import Link from "next/link";
const CALENDLY = "https://calendly.com/maheshwaribhagyashree914/30min";
import {
  ArrowRight,
  Search,
  Settings,
  Rocket,
  HeartHandshake,
  Stethoscope,
  Brain,
  ShieldCheck,
  Zap,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const phases = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    duration: "Week 1–2",
    body: "We spend time inside your hospital — observing workflows, interviewing department heads, and mapping every process that touches the patient journey. We don't start building until we understand how you actually operate.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Configuration",
    duration: "Week 3–5",
    body: "Using the Praano accelerator, we configure the platform to match your specific roles, terminology, billing codes, and departmental structures. Every screen your staff sees is built around their actual job, not a generic template.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Go-Live",
    duration: "Week 6–8",
    body: "We run parallel operations during rollout — so nothing breaks while your team gets comfortable. Department-by-department go-live. On-site support throughout. Zero disruption to patient care.",
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Ongoing Partnership",
    duration: "Month 3+",
    body: "New departments, regulatory changes, new payer relationships — we stay your technology partner. Quarterly reviews, continuous optimization, and direct access to our clinical and technical team.",
  },
];

const credentials = [
  {
    icon: Stethoscope,
    title: "Physician-Led Design",
    body: "Praano was founded by a practicing physician. Every feature has been validated against real clinical workflows — not designed by engineers who've never seen a ward.",
  },
  {
    icon: Brain,
    title: "AI That's Actually Useful",
    body: "Our AI models are trained specifically on hospital operations data. They draft, suggest, and flag — but clinicians always decide. No black boxes. No AI hallucinations in clinical summaries.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    body: "Patient data encrypted at rest and in transit. Role-based access control ensures staff only see what they need. Built to meet healthcare data standards across jurisdictions.",
  },
  {
    icon: Zap,
    title: "Purpose-Built, Not Retrofitted",
    body: "Praano isn't a generic workflow tool adapted for hospitals. It was designed from the ground up for the specific pace, complexity, and stakes of hospital operations.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">
              Our Approach
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight">
              We don&apos;t sell software.{" "}
              <span className="text-teal">We implement change.</span>
            </h1>
            <p className="mt-5 text-lg text-ink/60 max-w-2xl mx-auto">
              Praano is a product accelerator, not a SaaS subscription. Every
              hospital gets a tailored implementation — built around their
              workflows, their staff, and their operational reality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why not SaaS */}
      <section className="py-16 lg:py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why not just buy software?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Because off-the-shelf hospital software has a 60–70% failure
                rate. Not because the software is bad — but because no two
                hospitals run the same way. A 200-bed general hospital in
                Nairobi operates nothing like a 50-bed oncology center in Dubai.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Generic SaaS gives you a product that assumes your workflows
                fit its model. Praano flips that: we bring a battle-tested
                platform and bend it to fit yours. The result is adoption rates
                and outcomes that generic software simply can&apos;t match.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              How an Engagement Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              From first call to full deployment
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-6">
            {phases.map((p, i) => (
              <AnimatedSection key={p.num} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="flex gap-6 bg-grey rounded-2xl p-6 lg:p-8 group card-hover">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center text-white">
                      <p.icon size={22} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl font-bold text-ink">
                        {p.title}
                      </span>
                      <span className="text-xs font-medium text-teal bg-teal-light px-2.5 py-0.5 rounded-full">
                        {p.duration}
                      </span>
                    </div>
                    <p className="text-ink/60 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 lg:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">
              Why Trust Praano
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">
              Built with clinical depth
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((c, i) => (
              <AnimatedSection key={c.title} delay={((i % 2) + 1) as 1 | 2}>
                <div className="card-hover bg-white rounded-xl p-8 h-full">
                  <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center mb-5 text-teal">
                    <c.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{c.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{c.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to see how it works for your hospital?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Book a 30-minute call. We&apos;ll walk you through the platform
              and map out what a deployment looks like for your context.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-bold rounded-lg hover:bg-gray-50 text-lg"
            >
              Start the Conversation
              <ArrowRight size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
