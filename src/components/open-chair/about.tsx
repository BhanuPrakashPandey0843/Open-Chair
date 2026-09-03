"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import aboutImage from "@/assets/about.jpg";

export function About() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        bg-oc-cream-50
        px-6
        py-24
        text-oc-ink-900
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
        {/* Subtle paper texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(
                circle,
                rgba(42,15,20,0.7) 0.5px,
                transparent 0.7px
              ),
              radial-gradient(
                circle,
                rgba(42,15,20,0.3) 0.45px,
                transparent 0.65px
              )
            `,
            backgroundPosition: "0 0, 8px 11px",
            backgroundSize: "14px 14px, 19px 19px",
          }}
        />

        {/* Ambient gold glow */}
        <motion.div
          className="
            absolute
            -left-52
            top-1/4
            size-[420px]
            rounded-full
            bg-oc-gold-500/[0.035]
            blur-[120px]
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
            -right-52
            bottom-0
            size-[400px]
            rounded-full
            bg-oc-maroon-800/[0.025]
            blur-[120px]
          "
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Editorial vertical line */}
        <div
          className="
            absolute
            left-[7%]
            top-0
            hidden
            h-full
            w-px
            bg-oc-maroon-900/[0.025]
            lg:block
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-0
            hidden
            h-full
            w-px
            bg-oc-maroon-900/[0.025]
            lg:block
          "
        />
      </div>

      {/* =========================================================
          CONTENT WRAPPER
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-7xl">
        {/* =======================================================
            TOP — CENTERED HEADING
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center sm:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-oc-gold-500/60" />

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-oc-gold-600
              "
            >
              About Us
            </p>

            <span className="h-px w-7 bg-oc-gold-500/60" />
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6
              font-[family-name:var(--font-display)]
              text-[34px]
              leading-[1.1]
              font-medium
              tracking-[-0.03em]
              text-oc-maroon-900
              sm:text-[42px]
              lg:text-5xl
            "
          >
            Bringing the{" "}
            <span className="italic text-oc-maroon-700">
              sanctuary
            </span>{" "}
            to your doorstep.
          </h2>
        </motion.div>

        {/* =======================================================
            GRID — CONTENT + IMAGE
        ======================================================= */}

        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl"
          >
            <div
              className="
                space-y-4
                text-[13px]
                leading-[1.9]
                text-oc-ink-900/60
                sm:text-sm
              "
            >
              <p>In many cultures, salon time is ME time.</p>

              <p>
                You walk in as you are&mdash;tired, rushed, quiet,
                talkative, carrying whatever the day has put on
                your shoulders. The people who work on you become
                the people you speak to, laugh with, vent to, or
                simply sit beside without saying much. It&rsquo;s a
                place where your stories and moods are understood
                without any judgement.
              </p>

              <p className="text-oc-maroon-800 font-medium">
                That is the spirit Open Chair was built from.
              </p>

              <p>
                A simple idea: a space where you don&rsquo;t have
                to plan your life around a haircut. You walk in,
                take a seat, and know you&rsquo;ll be looked
                after. No appointment hassles, no number in
                queues, no confusion, no pressure&mdash;just work
                done properly for whoever sits down.
              </p>

              <p>
                Some of this comes from lived experience. The
                frustration of calling around for an appointment.
                The surprise of being asked for a clipper number
                instead of being understood. The feeling of
                wanting a place that treats grooming as something
                personal, not procedural. That idea grew into a
                shop meant for real people that deserves a place
                that understands them.
              </p>

              <p>
                If you come in with a story, we listen. If you
                want quiet, we keep the space steady. If you need
                to talk while we work, we make room for it.
              </p>

              <p>
                This is the part of the job that matters just as
                much as the service. We are a space built around
                people and a CHAIR that is waiting for you!
              </p>

              <p className="text-oc-maroon-800 font-medium">
                This is Open Chair.
              </p>
            </div>

            {/* =====================================================
                CTA
            ===================================================== */}

            <motion.a
              href="#services"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-oc-maroon-800
              "
            >
              <span
                className="
                  relative
                  pb-1.5
                "
              >
                Explore Our Services

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    origin-left
                    bg-oc-gold-500/60
                    transition-transform
                    duration-500
                    group-hover:scale-x-0
                  "
                />

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-oc-maroon-800
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </span>

              <span
                className="
                  flex
                  size-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-oc-gold-500/30
                  bg-oc-gold-500/[0.04]
                  transition-all
                  duration-300
                  group-hover:border-oc-gold-500/60
                  group-hover:bg-oc-gold-500/[0.10]
                "
              >
                <ArrowRight
                  className="
                    size-3
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          </motion.div>

          {/* =======================================================
              RIGHT — IMAGE
          ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[590px] lg:ml-auto"
          >
            {/* Decorative offset frame */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                -right-3
                -top-3
                h-full
                w-full
                rounded-[18px]
                border
                border-oc-gold-500/35
                sm:-right-4
                sm:-top-4
              "
              animate={{
                y: [0, -4, 0],
                x: [0, 3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main image frame */}
            <div
              className="
                group/image
                relative
                aspect-[0.94/1]
                overflow-hidden
                rounded-[18px]
                bg-oc-maroon-900/5
                shadow-[0_30px_70px_-30px_rgba(42,15,20,0.35)]
                sm:aspect-[1/0.96]
              "
            >
              {/* Image */}
              <img
                src={aboutImage.src}
                alt="Open Chair barbershop &amp; salon experience"
                className="
                  absolute
                  inset-0
                  size-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover/image:scale-[1.045]
                "
              />

              {/* Soft image overlay */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-oc-maroon-900/20
                  via-transparent
                  to-white/5
                "
              />

              {/* Subtle warm wash */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-oc-gold-500/[0.025]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover/image:opacity-100
                "
              />

              {/* =================================================
                  FLOATING ACCENT BADGE
              ================================================= */}

              <motion.div
                className="
                  absolute
                  -bottom-1
                  -left-1
                  z-10
                  flex
                  min-w-[112px]
                  flex-col
                  rounded-[8px]
                  bg-oc-maroon-800
                  px-5
                  py-4
                  text-white
                  shadow-[0_15px_35px_-12px_rgba(42,15,20,0.45)]
                  sm:-bottom-2
                  sm:-left-2
                  sm:min-w-[125px]
                  sm:px-6
                  sm:py-5
                "
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles
                  className="mb-2 size-3 text-oc-gold-300"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/85
                    leading-snug
                  "
                >
                  Your Chair Is Waiting
                </span>
              </motion.div>

              {/* Corner highlight */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  right-4
                  top-4
                  size-5
                  rounded-tr-md
                  border-r
                  border-t
                  border-white/40
                "
              />

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-4
                  right-4
                  size-5
                  rounded-br-md
                  border-b
                  border-r
                  border-white/40
                "
              />
            </div>

            {/* Small decorative label */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="
                absolute
                -right-2
                bottom-8
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-black/10
                px-3
                py-2
                backdrop-blur-md
                sm:flex
              "
            >
              <span className="size-1.5 rounded-full bg-oc-gold-300" />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                "
              >
                Luxury &middot; Wellness &middot; You
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM DECORATIVE LINE
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="
          relative
          mx-auto
          mt-20
          h-px
          max-w-5xl
          bg-gradient-to-r
          from-transparent
          via-oc-maroon-900/10
          to-transparent
        "
      />
    </section>
  );
}
