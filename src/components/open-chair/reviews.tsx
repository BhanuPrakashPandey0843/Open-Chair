"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I've had three different colorists ruin my hair before. My stylist here actually listened, mixed a shade for my skin tone, and it grew out beautifully.",
    name: "Ritika Sen",
    role: "Balayage client",
  },
  {
    quote:
      "Walked in for a trim, left with the best haircut I've had in years. The consultation alone made it worth booking ahead instead of a walk-in.",
    name: "Arjun Mehta",
    role: "Regular, 8 months",
  },
  {
    quote:
      "Booking on WhatsApp took thirty seconds and they actually texted back with timing options same day. The chair itself is the comfiest I've sat in.",
    name: "Priya Nair",
    role: "First-time client",
  },
];

const CLIENT_INITIALS = ["RS", "AM", "PN", "KV"];

export function Reviews() {
  return (
    <section id="reviews" className="group/reviews relative isolate overflow-hidden bg-oc-cream-50 px-6 py-24 text-oc-ink-900 sm:px-10 sm:py-32">
      {/* =========================================================
          Background texture
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Very subtle paper grain */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(42,15,20,0.7) 0.55px, transparent 0.7px),
              radial-gradient(circle, rgba(42,15,20,0.45) 0.45px, transparent 0.6px)
            `,
            backgroundPosition: "0 0, 8px 9px",
            backgroundSize: "13px 13px, 17px 17px",
          }}
        />

        {/* Soft ambient shapes */}
        <motion.div
          className="
            absolute
            -left-48
            top-20
            size-[420px]
            rounded-full
            bg-oc-gold-500/[0.035]
            blur-[100px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -right-48
            bottom-0
            size-[380px]
            rounded-full
            bg-oc-maroon-800/[0.035]
            blur-[100px]
          "
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* =======================================================
            Section header
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          {/* Decorative quote */}
          <div className="relative flex size-14 items-center justify-center">
            <span
              aria-hidden="true"
              className="
                absolute
                inset-0
                rounded-full
                border
                border-oc-gold-500/20
              "
            />

            <motion.span
              aria-hidden="true"
              className="
                absolute
                inset-[-5px]
                rounded-full
                border
                border-oc-gold-500/10
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <Quote
              className="size-6 text-oc-gold-500/75"
              strokeWidth={1.35}
              aria-hidden="true"
            />
          </div>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-oc-maroon-700/60">
            From the chair
          </p>

          <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.025em] sm:text-5xl">
            What our clients
            <br />
            <span className="text-oc-maroon-800 italic">
              say about us
            </span>
          </h2>

          <p className="mt-5 max-w-md text-center text-[14px] leading-6 text-oc-ink-900/50">
            Real words from the chairs that came before yours.
          </p>
        </motion.div>

        {/* =======================================================
            Decorative divider
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex w-full max-w-xs items-center gap-3"
        >
          <div className="h-px flex-1 bg-oc-maroon-900/10" />

          <div className="flex items-center gap-1">
            <span className="size-1 rounded-full bg-oc-gold-500/45" />
            <span className="size-1.5 rounded-full bg-oc-gold-500/75" />
            <span className="size-1 rounded-full bg-oc-gold-500/45" />
          </div>

          <div className="h-px flex-1 bg-oc-maroon-900/10" />
        </motion.div>

        {/* =======================================================
            Testimonials
        ======================================================= */}
        <div className="mt-14 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.figure
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group/card
                relative
                flex
                min-h-[330px]
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-oc-maroon-900/[0.08]
                bg-white/75
                p-7
                shadow-[0_2px_8px_rgba(42,15,20,0.025)]
                backdrop-blur-sm
                transition-shadow
                duration-500
                hover:shadow-[0_25px_60px_-30px_rgba(42,15,20,0.25)]
                sm:p-8
              "
            >
              {/* Card gold glow */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  size-40
                  rounded-full
                  bg-oc-gold-500/[0.045]
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover/card:opacity-100
                "
              />

              {/* Top accent */}
              <motion.span
                aria-hidden="true"
                className="
                  absolute
                  left-7
                  right-7
                  top-0
                  h-px
                  origin-left
                  bg-gradient-to-r
                  from-oc-gold-500/0
                  via-oc-gold-500/50
                  to-oc-gold-500/0
                "
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25 + i * 0.12,
                }}
              />

              <div className="relative flex h-full flex-col">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-0.5 text-oc-gold-500"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <motion.span
                        key={starIdx}
                        initial={{
                          opacity: 0,
                          scale: 0.6,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: 0.35 + i * 0.12 + starIdx * 0.04,
                        }}
                      >
                        <Star
                          className="size-3.5"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </motion.span>
                    ))}
                  </div>

                  <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-oc-ink-900/25">
                    Verified
                  </span>
                </div>

                <span className="sr-only">
                  Rated 5 out of 5 stars
                </span>

                {/* Quote mark */}
                <div
                  className="
                    mt-7
                    font-[family-name:var(--font-display)]
                    text-5xl
                    leading-none
                    text-oc-maroon-800/[0.10]
                    transition-colors
                    duration-500
                    group-hover/card:text-oc-gold-500/20
                  "
                  aria-hidden="true"
                >
                  “
                </div>

                {/* Quote */}
                <blockquote
                  className="
                    -mt-2
                    flex-1
                    text-[14px]
                    leading-[1.8]
                    text-oc-ink-900/72
                    sm:text-[15px]
                  "
                >
                  {testimonial.quote}
                </blockquote>

                {/* Author */}
                <figcaption className="mt-7 flex items-center gap-3 border-t border-oc-ink-900/[0.07] pt-5">
                  <span
                    aria-hidden="true"
                    className="
                      relative
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-oc-maroon-800
                      font-[family-name:var(--font-display)]
                      text-[11px]
                      font-medium
                      text-oc-gold-300
                      shadow-sm
                      transition-transform
                      duration-300
                      group-hover/card:scale-105
                    "
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[-3px]
                        rounded-full
                        border
                        border-oc-gold-500/0
                        transition-colors
                        duration-300
                        group-hover/card:border-oc-gold-500/20
                      "
                    />
                  </span>

                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-oc-ink-900">
                      {testimonial.name}
                    </span>

                    <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-oc-ink-900/40">
                      {testimonial.role}
                    </span>
                  </span>

                  <ArrowUpRight
                    className="
                      ml-auto
                      size-3.5
                      text-oc-ink-900/15
                      transition-all
                      duration-300
                      group-hover/card:-translate-y-0.5
                      group-hover/card:translate-x-0.5
                      group-hover/card:text-oc-gold-500/70
                    "
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* =======================================================
            Social proof footer
        ======================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="
            mt-14
            flex
            flex-col
            items-center
            gap-5
            sm:flex-row
            sm:justify-center
          "
        >
          {/* Avatars */}
          <div className="flex -space-x-2" aria-hidden="true">
            {CLIENT_INITIALS.map((initials, i) => (
              <motion.span
                key={initials}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: 0.45 + i * 0.06,
                }}
                className="
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-oc-cream-50
                  bg-oc-maroon-800
                  text-[9px]
                  font-semibold
                  text-oc-gold-300
                  shadow-sm
                "
              >
                {initials}
              </motion.span>
            ))}
          </div>

          <div
            className="hidden h-px w-8 bg-oc-ink-900/12 sm:block"
            aria-hidden="true"
          />

          <div className="flex items-center gap-2">
            <div
              className="flex gap-0.5 text-oc-gold-500"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <p className="text-[12px] font-medium text-oc-ink-900/60">
              Loved by 120+ clients this month
            </p>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-oc-maroon-900/10 to-transparent"
        />
      </div>
    </section>
  );
}