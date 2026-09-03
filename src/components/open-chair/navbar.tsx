"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, Scissors, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

const WHATSAPP_HREF = "https://wa.me/15193519193";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || mobileOpen;

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${isSolid
          ? "border-b border-oc-maroon-900/[0.08] bg-oc-cream-50/90 backdrop-blur-md"
          : "border-b border-white/0 bg-transparent"}
      `}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:h-[76px] sm:px-10 lg:px-10">
        {/* =====================================================
            BRAND
        ===================================================== */}
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className={`
            group/brand inline-flex items-center gap-2.5
            transition-colors duration-300
            ${isSolid ? "text-oc-ink-900" : "text-white"}
          `}
        >
          <span
            className={`
              relative flex size-9 shrink-0 items-center justify-center
              rounded-full border
              transition-all duration-500
              ${isSolid
                ? "border-oc-gold-500/30 bg-oc-gold-500/[0.08] text-oc-maroon-800"
                : "border-oc-gold-300/30 bg-white/[0.06] text-oc-gold-200"}
            `}
          >
            <Scissors
              className="size-4 transition-transform duration-500 group-hover/brand:rotate-[-12deg]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>

          <span className="font-[family-name:var(--font-display)] text-lg font-medium tracking-[-0.02em] sm:text-xl">
            Open Chair
            <span
              className={`
                block
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                transition-colors duration-300
                ${isSolid ? "text-oc-ink-900/45" : "text-white/60"}
              `}
            >
              Barbershop &amp; Salon
            </span>
          </span>
        </a>

        {/* =====================================================
            DESKTOP LINKS
        ===================================================== */}
        <ul
          className={`
            hidden items-center gap-9 lg:flex
            transition-colors duration-300
          `}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`
                  relative text-[11px] font-semibold uppercase tracking-[0.14em]
                  transition-colors duration-300
                  ${isSolid
                    ? "text-oc-ink-900/60 hover:text-oc-maroon-800"
                    : "text-white/75 hover:text-white"}
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}
        <motion.a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className={`
            group hidden h-10 items-center gap-2.5 rounded-full px-5
            text-[10px] font-semibold uppercase tracking-[0.12em]
            transition-all duration-300 lg:inline-flex
            ${isSolid
              ? "bg-oc-maroon-800 text-oc-cream-50 hover:bg-oc-maroon-700"
              : "bg-oc-gold-300 text-oc-maroon-900 hover:bg-oc-gold-200"}
          `}
        >
          BOOK NOW
          <ArrowRight
            className="size-3 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </motion.a>

        {/* =====================================================
            MOBILE TOGGLE
        ===================================================== */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className={`
            flex size-10 items-center justify-center rounded-full border
            transition-colors duration-300 lg:hidden
            ${isSolid
              ? "border-oc-maroon-900/15 text-oc-ink-900"
              : "border-white/25 text-white"}
          `}
        >
          {mobileOpen ? (
            <X className="size-4" strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <Menu className="size-4" strokeWidth={1.75} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-oc-maroon-900/[0.08] bg-oc-cream-50 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6 sm:px-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-2 py-3 text-sm font-medium text-oc-ink-900/75 transition-colors hover:bg-oc-maroon-900/[0.04] hover:text-oc-maroon-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="border-t border-oc-maroon-900/[0.08] px-6 py-5 sm:px-10">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-full items-center justify-center gap-2.5 rounded-full bg-oc-maroon-800 text-[11px] font-semibold uppercase tracking-[0.12em] text-oc-cream-50 transition-colors hover:bg-oc-maroon-700"
              >
                BOOK NOW
                <ArrowRight className="size-3" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
