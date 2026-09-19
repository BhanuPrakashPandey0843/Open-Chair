import type { SVGProps } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScallopDivider } from "./scallop-divider";
import logo from "@/assets/logo.png";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      {...props}
    >
      <path d="M15 8.5h-2a2 2 0 0 0-2 2V12H9v3h2v6h3v-6h2.2l.8-3H14v-1.2c0-.5.2-.8.9-.8H16V8.6a12 12 0 0 0-1-.1Z" />
    </svg>
  );
}

/**
 * TikTok mark drawn in the same stroke-based, lucide-matching style as
 * the icons above (lucide-react ships no official brand icon for TikTok).
 */
function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15.5 3v10.8a3.7 3.7 0 1 1-3-3.63" />
      <path d="M15.5 3.4a5.1 5.1 0 0 0 4.5 4.5" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "Haircut & Styling", href: "#services" },
  { label: "Color & Balayage", href: "#services" },
  { label: "Treatments", href: "#services" },
  { label: "Bridal Packages", href: "#services" },
  { label: "Kids' Cuts", href: "#services" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/openchairbarbershop.chatham/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/OpenChair-Barbershop/61591085387122/",
    icon: FacebookIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/in/about",
    icon: TikTokIcon,
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="group relative isolate overflow-hidden bg-[#090909] text-[#f5f0e8]">
      {/* =========================================================
          Ambient background
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large ambient glow */}
        <div
          className="
            absolute -right-32 -top-32
            h-[420px] w-[420px]
            rounded-full
            bg-[#c6a15b]/[0.055]
            blur-[110px]
            transition-transform duration-[1800ms] ease-out
            group-hover:translate-x-8
            group-hover:-translate-y-4
          "
        />

        <div
          className="
            absolute -bottom-40 -left-32
            h-[360px] w-[360px]
            rounded-full
            bg-[#c6a15b]/[0.035]
            blur-[100px]
            transition-transform duration-[2200ms] ease-out
            group-hover:-translate-x-6
          "
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Grain / texture */}
        <div
          className="absolute inset-0 opacity-[0.045] mix-blend-screen"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.8) 0.6px, transparent 0.7px),
              radial-gradient(rgba(255,255,255,0.45) 0.5px, transparent 0.6px)
            `,
            backgroundPosition: "0 0, 7px 11px",
            backgroundSize: "13px 13px, 17px 17px",
          }}
        />

        {/* Moving light */}
        <div
          className="
            absolute left-[-20%] top-0
            h-px w-[45%]
            bg-gradient-to-r from-transparent via-[#c6a15b]/30 to-transparent
            opacity-0
            transition-all duration-[1600ms] ease-out
            group-hover:left-[75%]
            group-hover:opacity-100
          "
        />
      </div>

      {/* Scallop divider */}
      <ScallopDivider className="absolute -top-4 left-0 text-[#090909] sm:-top-5" />

      {/* =========================================================
          Main content
      ========================================================= */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 pt-20 sm:px-10 sm:pt-24 lg:px-12">
        {/* Top decorative line */}
        <div className="mb-14 flex items-center gap-4 sm:mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08]" />

          <div className="flex items-center gap-2 text-[#c6a15b]/70">
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08]" />
        </div>

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr] lg:gap-10">
          {/* =====================================================
              Brand
          ===================================================== */}
          <div className="flex flex-col">
            <a
              href="#home"
              className="
                group/brand inline-flex w-fit items-center gap-3
                transition-transform duration-500
                hover:-translate-y-0.5
              "
            >
              <span
                className="
                  relative flex size-11 shrink-0 items-center justify-center
                  overflow-hidden rounded-full border border-[#c6a15b]/20
                  bg-[#f5f0e8]
                  p-[3px]
                  transition-all duration-500
                  group-hover/brand:border-[#c6a15b]/50
                  group-hover/brand:shadow-[0_0_30px_rgba(198,161,91,0.18)]
                "
              >
                <Image
                  src={logo}
                  alt="Open Chair Barbershop & Salon"
                  fill
                  sizes="44px"
                  className="relative object-contain transition-transform duration-500 group-hover/brand:scale-[1.05]"
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute inset-[-5px]
                    rounded-full border border-[#c6a15b]/0
                    transition-all duration-700
                    group-hover/brand:inset-[-8px]
                    group-hover/brand:border-[#c6a15b]/10
                  "
                />
              </span>

              <span className="font-[family-name:var(--font-display)] text-xl font-medium tracking-[-0.02em]">
                Open Chair
              </span>
            </a>

            <p className="mt-6 max-w-[32ch] text-[14px] leading-7 text-white/45">
              Skilled hands, unhurried appointments, and a chair that&apos;s
              always open when you need it.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    group/social relative flex size-9 items-center justify-center
                    overflow-hidden rounded-full
                    border border-white/[0.09]
                    bg-white/[0.025]
                    text-white/45
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#c6a15b]/35
                    hover:bg-[#c6a15b]/[0.08]
                    hover:text-[#d7b873]
                    hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-0 translate-y-full
                      bg-[#c6a15b]/[0.06]
                      transition-transform duration-300
                      group-hover/social:translate-y-0
                    "
                  />

                  <social.icon
                    className="
                      relative z-10 size-3.5
                      transition-transform duration-300
                      group-hover/social:scale-110
                    "
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              Quick links
          ===================================================== */}
          <nav aria-label="Quick links">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Quick Links
            </h3>

            <ul className="mt-6 flex flex-col gap-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      group/link relative inline-flex items-center gap-1.5
                      text-[13px] text-white/55
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#e5c982]
                    "
                  >
                    <span
                      className="
                        absolute -left-3
                        h-px w-0
                        bg-[#c6a15b]
                        transition-all duration-300
                        group-hover/link:w-2
                      "
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* =====================================================
              Services
          ===================================================== */}
          <nav aria-label="Services">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Services
            </h3>

            <ul className="mt-6 flex flex-col gap-3.5">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="
                      group/service relative inline-flex items-center gap-1.5
                      text-[13px] text-white/55
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-[#e5c982]
                    "
                  >
                    <span
                      className="
                        absolute -left-3
                        h-px w-0
                        bg-[#c6a15b]
                        transition-all duration-300
                        group-hover/service:w-2
                      "
                    />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* =====================================================
              Contact
          ===================================================== */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Contact
            </h3>

            <ul className="mt-6 flex flex-col gap-4 text-[13px] text-white/55">
              <li className="leading-6">
                56 Grand Ave East
                <br />
                Chatham, ON N7L 1V7
              </li>

              <li>
                <a
                  href="tel:+15193519193"
                  className="
                    group/phone inline-flex items-center gap-2
                    transition-colors duration-300
                    hover:text-[#e5c982]
                  "
                >
                  +1 519-351-9193

                  <ArrowUpRight
                    className="
                      size-3
                      opacity-0
                      -translate-x-1 translate-y-1
                      transition-all duration-300
                      group-hover/phone:translate-x-0
                      group-hover/phone:translate-y-0
                      group-hover/phone:opacity-100
                    "
                    strokeWidth={1.5}
                  />
                </a>
              </li>

              <li>
                <a
                  href="mailto:openchairck@gmail.com"
                  className="
                    group/mail inline-flex items-center gap-2
                    transition-colors duration-300
                    hover:text-[#e5c982]
                  "
                >
                  openchairck@gmail.com

                  <ArrowUpRight
                    className="
                      size-3
                      opacity-0
                      -translate-x-1 translate-y-1
                      transition-all duration-300
                      group-hover/mail:translate-x-0
                      group-hover/mail:translate-y-0
                      group-hover/mail:opacity-100
                    "
                    strokeWidth={1.5}
                  />
                </a>
              </li>

              <li className="text-white/35">
                Open Daily · 10AM – 9PM
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================================
            Bottom CTA strip
        ========================================================= */}
        <div
          className="
            relative mt-16 overflow-hidden
            rounded-2xl
            border border-white/[0.07]
            bg-white/[0.025]
            px-5 py-5
            sm:px-6
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#c6a15b]/[0.06]
              via-transparent
              to-transparent
              opacity-60
            "
          />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#d7b873]/65">
                Your next look
              </p>

              <p className="mt-1.5 font-[family-name:var(--font-display)] text-lg text-white/85">
                Take a seat. Stay a while.
              </p>
            </div>

            <a
              href="https://openchairbarbershopchatham.setmore.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/cta inline-flex w-fit items-center gap-2
                rounded-full
                border border-[#c6a15b]/25
                bg-[#c6a15b]/[0.07]
                px-4 py-2.5
                text-[11px] font-medium uppercase tracking-[0.14em]
                text-[#dfc47e]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#c6a15b]/50
                hover:bg-[#c6a15b]/[0.12]
                hover:shadow-[0_10px_35px_rgba(198,161,91,0.08)]
              "
            >
              Book Now

              <ArrowUpRight
                className="
                  size-3.5
                  transition-transform duration-300
                  group-hover/cta:translate-x-0.5
                  group-hover/cta:-translate-y-0.5
                "
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>

        {/* =========================================================
            Bottom bar
        ========================================================= */}
        <div className="mt-10 border-t border-white/[0.07] pt-6">
          <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:justify-between">
            <p>
              © {CURRENT_YEAR} Open Chair. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="
                  transition-colors duration-300
                  hover:text-[#d7b873]
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  transition-colors duration-300
                  hover:text-[#d7b873]
                "
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}