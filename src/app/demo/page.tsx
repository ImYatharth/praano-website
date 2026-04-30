import Link from "next/link";
import { ArrowRight, MousePointerClick } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
const CALENDLY = "https://calendly.com/maheshwaribhagyashree914/30min";

export default function DemoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">
              Live Prototype
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-ink">
              Experience Praano Firsthand
            </h1>
            <p className="mt-4 text-ink/60 max-w-xl mx-auto">
              This is a live prototype. Click any role to explore how Praano
              works for each department - this is the actual platform, not a
              slide deck.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-teal-light rounded-full text-sm text-teal font-medium">
              <MousePointerClick size={16} />
              Interactive - click through the workflows
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-grey py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
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
              <iframe
                src="https://praano-demo.vercel.app"
                className="w-full rounded-b-xl bg-white"
                style={{ height: "80vh", minHeight: "500px" }}
                title="Praano Demo"
                allow="clipboard-read; clipboard-write"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-bold text-ink">
              Want a guided walkthrough?
            </h2>
            <p className="mt-3 text-ink/60 max-w-md mx-auto">
              Our team will configure a demo around your hospital type and walk
              you through the workflows that matter most to you.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press mt-6 inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark"
            >
              Book a Demo Call
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
