import {
  UserPlus,
  BedDouble,
  FileOutput,
  MessageSquare,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
const CALENDLY = "https://calendly.com/maheshwaribhagyashree914/30min";

const sections = [
  {
    icon: UserPlus,
    title: "Admission",
    subtitle: "Patient onboarded in under 8 minutes",
    points: [
      "Digital patient identity creation and verification",
      "Insurance pre-authorization filed automatically",
      "Zero patient-facing paperwork on arrival",
      "Government scheme eligibility detection and routing",
      "All departments notified on admission in real time",
    ],
  },
  {
    icon: BedDouble,
    title: "Ward Management",
    subtitle: "Real-time visibility across every bed",
    points: [
      "Live bed map with occupancy and transfer status",
      "60-second vitals entry for nurses",
      "Shift checklists and AI-compiled handover notes",
      "Photo upload queue for ward clerks",
      "Document tracking with gap alerts for pending records",
    ],
  },
  {
    icon: FileOutput,
    title: "Discharge",
    subtitle: "AI-powered discharge in under 2 hours",
    points: [
      "AI-generated discharge summary from patient data",
      "Diagnostic codes auto-suggested and validated",
      "One-click insurance claim filing",
      "Final billing reconciliation with payer",
      "Patient receives digital discharge card",
    ],
  },
  {
    icon: MessageSquare,
    title: "Post-Discharge Care",
    subtitle: "30 days of automated follow-up",
    points: [
      "Follow-up messages in patient's preferred language",
      "Medication reminders and recovery check-ins",
      "Early warning detection for complications",
      "Multilingual health education cards",
      "Readmission risk scoring",
    ],
  },
  {
    icon: BarChart3,
    title: "Admin & Reporting",
    subtitle: "Complete operational visibility",
    points: [
      "Live claims pipeline with accounts receivable aging",
      "Revenue cycle dashboard",
      "Staff performance and SLA tracking",
      "Exportable reports for management review",
      "Audit-ready documentation at all times",
    ],
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">
              Product
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight">
              The Full Patient Journey,{" "}
              <span className="text-teal">One Platform</span>
            </h1>
            <p className="mt-5 text-lg text-ink/60 max-w-2xl mx-auto">
              Praano covers every step from the moment a patient walks in to
              30 days after they leave — configured to your hospital&apos;s
              specific workflows and roles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <AnimatedSection className="w-full lg:w-1/2" delay={1}>
                  <div className="bg-grey rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <s.icon size={40} className="text-teal" />
                      </div>
                      <p className="text-ink/30 text-sm font-medium">
                        {s.title} workflow
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection className="w-full lg:w-1/2" delay={2}>
                  <div className="inline-flex items-center gap-2 text-teal mb-3">
                    <s.icon size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {s.title}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-4">
                    {s.subtitle}
                  </h2>
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-teal shrink-0 mt-0.5"
                        />
                        <span className="text-ink/70 text-sm leading-relaxed">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              See it all working together
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Try the live prototype or schedule a walkthrough with our team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-teal font-bold rounded-lg hover:bg-gray-50"
              >
                Try Live Demo
                <ArrowRight size={18} />
              </Link>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10"
              >
                Book a Demo Call
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
