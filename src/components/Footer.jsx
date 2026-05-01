import { Link } from 'react-router-dom'
import logo from '../../logos/Midwest Infra logo1.png'

const serviceLinks = [
  { label: 'Sprayroq Structural Coatings', to: '/services/sprayroq-coatings' },
  { label: 'High-Pressure Hot Water Sewer Jetting', to: '/services/sewer-jetting' },
  { label: 'Hydrovac Services', to: '/services/hydrovac' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050D1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={logo} alt="Midwest Infra" className="h-11 w-auto mb-5 opacity-90" />
            </Link>
            <p className="font-roboto text-sm text-white/65 font-light leading-relaxed max-w-sm mb-6">
              Certified Sprayroq™ partner providing trenchless structural rehabilitation for
              municipalities, MDOT, county road commissions, and private industrial clients
              across the State of Michigan.
            </p>
            <address className="not-italic font-roboto text-xs text-white/55 leading-relaxed mb-4">
              115 E Capac Rd, Imlay City, MI 48444
            </address>
            <p className="font-roboto text-xs text-white/45 leading-relaxed mb-5">
              A division of{' '}
              <a
                href="https://www.mwcc.biz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 hover:text-white underline underline-offset-2 transition-colors"
              >
                Midwest Commercial Construction
              </a>
            </p>
            <a
              href="https://www.linkedin.com/company/midwest-infra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Midwest Infra on LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 border border-white/20 text-white/55 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald text-[10px] tracking-[0.32em] uppercase text-secondary mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="font-roboto text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald text-[10px] tracking-[0.32em] uppercase text-secondary mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:8107211933" className="font-roboto text-sm text-white/65 hover:text-white transition-colors">
                  (810) 721-1933
                </a>
              </li>
              <li>
                <a href="mailto:Miradmin@mwcc.biz" className="font-roboto text-sm text-white/65 hover:text-white transition-colors">
                  Miradmin@mwcc.biz
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=115+E+Capac+Rd+Imlay+City+MI+48444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-sm text-white/65 hover:text-white transition-colors"
                >
                  115 E Capac Rd, Imlay City, MI
                </a>
              </li>
              <li className="font-roboto text-sm text-white/65">Mon–Fri: 8am–4:30pm</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
