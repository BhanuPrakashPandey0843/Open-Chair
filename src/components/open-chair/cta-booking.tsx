"use client";

import { motion } from "motion/react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { ScallopDivider } from "./scallop-divider";

type ContactItem = {
  icon: typeof MapPin;
  label: string;
  value: string;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: MapPin,
    label: "Address",
    value: "56 Grand Ave East, Chatham, ON N7L 1V7",
  },
  { icon: Phone, label: "Call Us", value: "+1 519-351-9193" },
  { icon: Clock, label: "Hours", value: "Open Daily · 10AM – 9PM" },
];

const WHATSAPP_HREF = "https://wa.me/15193519193";

export function CtaBooking() {
  return (
    <section id="contact" className="relative bg-oc-maroon-800 text-oc-cream-50">
      <ScallopDivider className="absolute -top-4 left-0 text-oc-maroon-800 sm:-top-5" />

      {/* ambient dot texture, echoes woven cape fabric */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--oc-gold-300) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-32">
        {/* Left: copy + contact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-oc-gold-300 uppercase">
            Ready when you are
          </p>
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl leading-[1.1] font-medium tracking-tight text-balance sm:text-5xl">
            Claim your{" "}
            <span className="text-oc-gold-300 italic">open chair</span>{" "}
            today
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-oc-cream-50/70">
            Tell us your look, pick a time that works, and we&apos;ll have the
            chair ready. Walk-ins welcome, but booking ahead saves the wait.
          </p>

          <ul className="mt-10 flex flex-col gap-5">
            {CONTACT_ITEMS.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-oc-gold-300/25 bg-oc-cream-50/5 text-oc-gold-300">
                  <item.icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs tracking-wide text-oc-cream-50/50 uppercase">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-oc-cream-50">
                    {item.value}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: floating booking card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm rounded-3xl bg-oc-cream-50 p-8 text-oc-ink-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] sm:p-9"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-oc-maroon-700 uppercase">
            Booking via WhatsApp
          </p>

          <div className="relative mx-auto my-8 flex size-24 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-oc-maroon-700/10 [animation-duration:2.4s]" />
            <span className="absolute inset-3 rounded-full bg-oc-maroon-700/5" />
            <span className="relative flex size-14 items-center justify-center rounded-full bg-oc-maroon-800 text-oc-gold-300 shadow-sm">
              <MessageCircle className="size-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
          </div>

          <p className="text-center text-sm leading-relaxed text-oc-ink-900/65">
            Chat with us directly for instant booking and stylist
            recommendations tailored to you.
          </p>

          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-oc-maroon-800 px-5 text-sm font-semibold text-oc-cream-50 transition-colors hover:bg-oc-maroon-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oc-gold-500"
          >
            <MessageCircle className="size-4" strokeWidth={2} aria-hidden="true" />
            Book via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
