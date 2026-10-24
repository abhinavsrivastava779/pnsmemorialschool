import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { site, images } from "@/lib/assets";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/teachers-staff", label: "Teachers & Staff" },
  { to: "/timings", label: "Timings" },
  { to: "/contact", label: "Contact" },
];

const messageLinks = [
  { to: "/directors-message", label: "Director's Message" },
  { to: "/principals-message", label: "Principal's Message" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.scrollIntoView({ block: "nearest" });
    }
  }, [open]);

  const linkClass = (active: boolean) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
      active
        ? "bg-secondary text-primary"
        : "text-muted-foreground hover:bg-secondary hover:text-primary"
    }`;

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img
            src={images.logo}
            alt={`${site.name} logo`}
            className="h-11 w-11 rounded-full border-2 border-gold object-cover shadow-sm"
          />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-primary sm:text-2xl">
              {site.name}
            </span>
            <span className="block text-[11px] font-semibold tracking-wide text-muted-foreground">
              {site.board} · {site.classes}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainLinks.slice(0, 3).map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(isActive(link.to))}>
              {link.label}
            </Link>
          ))}

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive("/directors-message") || isActive("/principals-message")
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                Messages
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={6}
                align="center"
                className="z-50 min-w-52 rounded-xl border border-border bg-popover p-1.5 shadow-lg"
              >
                {messageLinks.map((link) => (
                  <DropdownMenu.Item asChild key={link.to}>
                    <Link
                      to={link.to}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-card-foreground outline-none data-[highlighted]:bg-secondary data-[highlighted]:text-primary"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {mainLinks.slice(3).map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(isActive(link.to))}>
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-sm transition-colors hover:bg-gold-deep hover:text-primary-foreground"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg border border-border bg-card p-2 text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          ref={panelRef}
          className="border-t border-border bg-background px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {[...mainLinks.slice(0, 3), ...messageLinks, ...mainLinks.slice(3)].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(isActive(link.to))}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-deep hover:text-primary-foreground"
            >
              Enquire Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
