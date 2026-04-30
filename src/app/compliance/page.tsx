import {
  ShieldCheck,
  Fingerprint,
  FileCheck2,
  Heart,
  ClipboardCheck,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const mandates = [
  {
    icon: Fingerprint,
    code: "ABDM",
    title: "Ayushman Bharat Digital Mission",
    description:
      "Praano integrates natively with ABDM for Aadhaar-based ABHA ID creation. Every patient gets a unique health ID linked to India's national health records system. Patient records are discoverable and accessible across ABDM-connected facilities, enabling true continuum of care. Praano handles consent management, health record linking, and data sharing — all built into the admission workflow, not bolted on as an afterthought.",
  },
  {
    icon: FileCheck2,
    code: "NHCX",
    title: "National Health Claims Exchange",
    description:
      "All insurance claims are filed digitally through NHCX, eliminating manual TPA forms and paper-based submissions. Pre-authorization requests are generated automatically at admission. Claim packages are compiled with ICD-10 codes, discharge summaries, and supporting documents — then submitted in one click. This reduces claim rejection rates from the industry average of 18% to under 3%, directly recovering revenue that hospitals lose to paperwork errors.",
  },
  {
    icon: Heart,
    code: "PMJAY",
    title: "Pradhan Mantri Jan Arogya Yojana",
    description:
      "Praano automatically detects PMJAY-eligible patients during registration using Aadhaar-linked verification. Once identified, the system activates the Ayushman Bharat workflow: approved package rates are loaded, pre-auth is filed through NHCX, and billing is constrained to PMJAY guidelines. Hospital staff don't need to manually check eligibility or switch between systems — Praano handles the entire PMJAY pathway natively within the same interface used for all other patients.",
  },
  {
    icon: ClipboardCheck,
    code: "NABH",
    title: "National Accreditation Board for Hospitals",
    description:
      "Documentation, audit trails, and clinical records in Praano are structured to align with NABH accreditation standards. Every patient interaction — from vitals entry to discharge — is timestamped and traceable. Nursing checklists, handover notes, and clinical summaries follow NABH-compliant templates. When an accreditation audit arrives, hospitals using Praano can generate compliance reports directly from the system, without scrambling to assemble records from paper files or disconnected software.",
  },
  {
    icon: Lock,
    code: "DPDP Act",
    title: "Digital Personal Data Protection Act",
    description:
      "All patient data in Praano is handled under India's Digital Personal Data Protection framework. This includes consent-based data collection, purpose limitation, data minimization, and secure storage. Patient records are encrypted at rest and in transit. Access is role-based — a billing clerk cannot view clinical notes, and a nurse cannot access financial data. Data retention policies are configurable per hospital, and patients can request data access or deletion in compliance with DPDP provisions.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-teal mb-4">
              <ShieldCheck size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Compliance
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Built for India&apos;s Healthcare{" "}
              <span className="text-teal">Regulatory Standards</span>
            </h1>
            <p className="mt-5 text-lg text-ink/60 max-w-2xl mx-auto">
              Praano doesn&apos;t bolt on compliance as a feature — it&apos;s
              woven into every workflow. From ABDM integration to DPDP data
              protection, every mandate is handled natively.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {mandates.map((m) => (
              <div
                key={m.code}
                className="bg-grey rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-teal rounded-xl flex items-center justify-center shrink-0">
                    <m.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 bg-teal-light text-teal text-xs font-bold rounded-md">
                        {m.code}
                      </span>
                      <h2 className="text-xl font-bold text-ink">{m.title}</h2>
                    </div>
                    <p className="text-ink/60 leading-relaxed text-sm">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Compliance shouldn&apos;t be a burden
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            See how Praano handles regulatory requirements without adding work
            for your staff.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-teal font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Book a Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
