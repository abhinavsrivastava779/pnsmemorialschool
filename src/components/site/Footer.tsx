import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, images } from "@/lib/assets";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/teachers-staff", label: "Teachers & Staff" },
  { to: "/timings", label: "Timings" },
  { to: "/directors-message", label: "Director's Message" },
  { to: "/principals-message", label: "Principal's Message" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt={`${site.name} logo`}
              className="h-14 w-14 rounded-full border-2 border-gold object-cover"
            />
            <div>
              <p className="font-display text-2xl font-bold">{site.name}</p>
              <p className="text-sm text-primary-foreground/75">
                {site.board}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            A caring school for young learners, from Nursery to Class 8, in
            Bahraich, Uttar Pradesh.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {site.address}
                <br />
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-gold/50 underline-offset-2 transition-colors hover:text-gold"
                >
                  Get directions on Google Maps
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${site.phoneIntl}`} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>School timings: {site.timings}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.board} · {site.classes}</p>
        </div>
      </div>
    </footer>
  );
}
