import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/maheshwaribhagyashree914/30min";

const footerLinks = [
  { href: "/product", label: "Product" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Book a Demo" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">P</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Praano</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Seamless hospital process management. AI-powered workflow
              automation - implemented to fit the way your hospital works.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Ready to start?
            </h4>
            <p className="text-sm text-white/60 mb-3">
              Book a 30-minute demo - pick a time that works for you.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg hover:bg-teal-dark"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Praano. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
            Made in India
          </div>
        </div>
      </div>
    </footer>
  );
}
