import logo from '../../logos/Midwest Infra logo1.png'

export default function Footer() {
  return (
    <footer className="bg-[#050D1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Midwest Infra" className="h-11 w-auto mb-5 opacity-90" />
            <p className="font-roboto text-sm text-white/40 font-light leading-relaxed max-w-sm mb-6">
              Certified SprayROQ™ partner providing trenchless structural rehabilitation for
              municipalities, MDOT, county road commissions, and private industrial clients
              across the State of Michigan.
            </p>
            <address className="not-italic font-roboto text-xs text-white/28 leading-relaxed">
              115 E Capac Rd, Imlay City, MI 48444
            </address>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald text-[10px] tracking-[0.32em] uppercase text-secondary mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'SprayROQ Structural Coatings',
                'High-Pressure Sewer Jetting',
                'Hydrovac Services',
                'Site Assessment',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-roboto text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {s}
                  </a>
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
                <a href="tel:8107211933" className="font-roboto text-sm text-white/40 hover:text-white/70 transition-colors">
                  (810) 721-1933
                </a>
              </li>
              <li>
                <a href="mailto:info@mwcc.biz" className="font-roboto text-sm text-white/40 hover:text-white/70 transition-colors">
                  info@mwcc.biz
                </a>
              </li>
              <li className="font-roboto text-sm text-white/40">Mon–Thu: 8am–4:30pm</li>
              <li className="font-roboto text-sm text-white/40">Fri: By Appointment</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-roboto text-xs text-white/22">
            © {new Date().getFullYear()} Midwest Infra. All rights reserved.
          </span>
          <span className="font-oswald text-[10px] tracking-[0.25em] uppercase text-white/20">
            Certified SprayROQ™ Michigan Partner
          </span>
        </div>
      </div>
    </footer>
  )
}
