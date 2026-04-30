import AnimatedSection from "@/components/AnimatedSection";
import { CalendarCheck, Clock, Users, CheckCircle2 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/maheshwaribhagyashree914/30min";

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-light/30 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-3">
              Book a Demo
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Pick a time that <span className="text-teal">works for you</span>
            </h1>
            <p className="mt-5 text-lg text-ink/60 max-w-2xl mx-auto">
              30 minutes. Live walkthrough. Configured for your hospital type.
              No slides, no pressure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Calendly embed */}
            <AnimatedSection className="w-full lg:flex-1">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                <iframe
                  src={`${CALENDLY_URL}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=ffffff&text_color=1A1A2E&primary_color=007B7F`}
                  width="100%"
                  style={{ minHeight: "700px", border: "none" }}
                  title="Book a demo with Praano"
                />
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={2} className="w-full lg:w-72 shrink-0">
              <div className="bg-grey rounded-2xl p-8 sticky top-28">
                <h3 className="font-bold text-ink text-lg mb-6">
                  What to expect
                </h3>
                <ul className="space-y-4 text-sm text-ink/70">
                  {[
                    "Live walkthrough of the platform",
                    "Configured for your hospital type and size",
                    "Direct access to our clinical team",
                    "No commitment, no sales pressure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="text-teal shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <Clock size={18} className="text-teal shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-ink">Duration</p>
                      <p className="text-xs text-ink/60">30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <CalendarCheck size={18} className="text-teal shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-ink">Format</p>
                      <p className="text-xs text-ink/60">Video call</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                    <Users size={18} className="text-teal shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-ink">Host</p>
                      <p className="text-xs text-ink/60">Dr. Bhagyashree Maheshwari</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
