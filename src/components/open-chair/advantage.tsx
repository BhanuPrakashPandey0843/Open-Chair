"use client";

import { motion } from "motion/react";
import {
  BadgeCheck,
  Clock,
  Home,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type Advantage = {
  icon: typeof Sparkles;
  title: string;
  description: string;
};

const ADVANTAGES: Advantage[] = [
  {
    icon: Home,
    title: "At Your Doorstep",
    description:
      "No commute, no waiting rooms. Every treatment is delivered exactly where you're most comfortable — your home.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Therapists",
    description:
      "Every stylist and therapist is vetted, trained, and certified, so you always know who's walking through your door.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use only organic, salon-grade products — nothing generic, nothing that cuts corners on your skin or hair.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Hygiene",
    description:
      "Tools are sanitized before every appointment and single-use items are never reused, so safety is never a question.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "Appointments start when they're scheduled to start. Your time matters as much as the treatment itself.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "Every session opens with a conversation, so the treatment is shaped around you — not a one-size-fits-all script.",
  },
];

export function Advantage() {
  return (
    <section
      id="advantage"
      className="
        relative
        isolate
        overflow-hidden
        bg-oc-maroon-950
        px-6
        py-24
        text-oc-cream-50
        sm:px-10
        sm:py-28
        lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Fine dot texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(
                circle,
                rgba(231,205,138,0.9) 0.5px,
                transparent 0.6px
              )
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Ambient gold glow */}
        <motion.div
          className="
            absolute
            -left-40
            top-0
            size-[440px]
            rounded-full
            bg-oc-gold-500/[0.06]
            blur-[130px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -right-40
            bottom-0
            size-[420px]
            rounded-full
            bg-oc-gold-500/[0.04]
            blur-[130px]
          "
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative mx-auto w-full max-w-7xl">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-oc-gold-300/50" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-oc-gold-300">
              Why Choose Us
            </p>
            <span className="h-px w-7 bg-oc-gold-300/50" />
          </div>

          <h2
            className="
              mt-4
              font-[family-name:var(--font-display)]
              text-4xl
              leading-[1.05]
              font-medium
              tracking-[-0.03em]
              sm:text-5xl
            "
          >
            The Open Chair{" "}
            <span className="italic text-oc-gold-200">advantage</span>
          </h2>

          <p className="mt-4 max-w-lg text-[13px] leading-6 text-oc-cream-50/55 sm:text-sm">
            The details that separate a good appointment from one worth
            booking again.
          </p>
        </motion.div>

        {/* =======================================================
            DIVIDER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-9 flex max-w-xs items-center gap-3"
        >
          <div className="h-px flex-1 bg-oc-cream-50/10" />
          <div className="flex items-center gap-1">
            <span className="size-1 rounded-full bg-oc-gold-300/40" />
            <span className="size-1.5 rounded-full bg-oc-gold-300/75" />
            <span className="size-1 rounded-full bg-oc-gold-300/40" />
          </div>
          <div className="h-px flex-1 bg-oc-cream-50/10" />
        </motion.div>

        {/* =======================================================
            GRID
        ======================================================= */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col items-start"
              >
                <span
                  className="
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-oc-gold-300/25
                    bg-oc-gold-300/[0.06]
                    text-oc-gold-200
                    transition-all
                    duration-300
                    group-hover:border-oc-gold-300/50
                    group-hover:bg-oc-gold-300/[0.12]
                  "
                >
                  <Icon
                    className="size-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>

                <h3
                  className="
                    mt-5
                    font-[family-name:var(--font-display)]
                    text-lg
                    font-medium
                    tracking-[-0.01em]
                    text-oc-cream-50
                  "
                >
                  {advantage.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.75] text-oc-cream-50/50">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          BOTTOM DECORATIVE LINE
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="
          relative
          mx-auto
          mt-20
          h-px
          max-w-5xl
          bg-gradient-to-r
          from-transparent
          via-oc-cream-50/10
          to-transparent
        "
      />
    </section>
  );
}
