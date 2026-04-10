import { Link } from 'react-router-dom'
import logo from '../../logos/Midwest Infra logo1.png'

export default function Footer() {
  return (
    <footer className="bg-[#F5F6F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-10 bg-secondary" />
              <img src={logo} alt="Midwest Infra" className="h-10 w-auto" />
            </div>
            <p className="font-roboto text-base text-gray-600 leading-relaxed max-w-sm mb-5">
              Certified Sprayroq™ partner providing trenchless structural rehabilitation for
              municipalities, MDOT, county road commissions, and private industrial clients
              across the State of Michigan.
            </p>
            <address className="not-italic font-roboto text-sm text-gray-500 leading-relaxed">
              115 E Capac Rd, Imlay City, MI 48444
            </address>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald text-[11px] tracking-[0.32em] uppercase text-primary mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Sprayroq Structural Coatings',
                'High-Pressure Hot Water Sewer Jetting',
                'Hydrovac Services',
                'Site Assessment',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-roboto text-base text-gray-600 hover:text-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald text-[11px] tracking-[0.32em] uppercase text-primary mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:8107211933" className="font-roboto text-base text-gray-600 hover:text-primary transition-colors">
                  (810) 721-1933
                </a>
              </li>
              <li>
                <a href="mailto:info@mwcc.biz" className="font-roboto text-base text-gray-600 hover:text-primary transition-colors">
                  info@mwcc.biz
                </a>
              </li>
              <li className="font-roboto text-base text-gray-600">Mon–Thu: 8am–4:30pm</li>
              <li className="font-roboto text-base text-gray-600">Fri: By Appointment</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-roboto text-sm text-gray-500">
            © {new Date().getFullYear()} Midwest Infra. All rights reserved.
          </p>
          <p className="font-roboto text-sm text-gray-500">
            Certified Sprayroq™ Partner — State of Michigan
          </p>
        </div>

      </div>
    </footer>
  )
}
