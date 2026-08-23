"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const ABOUT_IMAGE = "/images/about/about-spa.jpg";

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
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-14
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-20
          xl:gap-28
        "
      >
        {/* =======================================================
            LEFT — CONTENT
        ======================================================= */}

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
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6
              max-w-[570px]
              font-[family-name:var(--font-display)]
              text-[42px]
              leading-[1.08]
              font-medium
              tracking-[-0.035em]
              text-oc-maroon-900
              sm:text-5xl
              lg:text-[56px]
              xl:text-[60px]
            "
          >
            Bringing the{" "}
            <span className="italic text-oc-maroon-700">
              sanctuary
            </span>{" "}
            to your doorstep.
          </h2>

          {/* Intro */}
          <p
            className="
              mt-7
              max-w-lg
              text-[13px]
              leading-[1.9]
              text-oc-ink-900/55
              sm:text-sm
            "
          >
            At LARA SPA & SALON, we believe true relaxation shouldn't
            require a commute. We've reimagined the traditional spa
            experience by bringing exceptional therapists and
            premium treatments directly to your personal space.
          </p>

          {/* Mission */}
          <p
            className="
              mt-5
              max-w-lg
              text-[13px]
              leading-[1.9]
              text-oc-ink-900/45
              sm:text-sm
            "
          >
            Our mission is to transform your home into a haven of
            tranquility, allowing you to disconnect from the world
            and reconnect with yourself. Every detail, from our
            organic oils to our ambient playlists, is created for
            your absolute comfort.
          </p>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-5
              border-t
              border-oc-maroon-900/[0.08]
              pt-6
            "
          >
            <div>
              <p
                className="
                  font-[family-name:var(--font-display)]
                  text-2xl
                  font-medium
                  text-oc-maroon-800
                "
              >
                10+
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-oc-ink-900/35
                "
              >
                Years of Excellence
              </p>
            </div>

            <span className="hidden h-8 w-px bg-oc-maroon-900/10 sm:block" />

            <div>
              <p
                className="
                  font-[family-name:var(--font-display)]
                  text-2xl
                  font-medium
                  text-oc-maroon-800
                "
              >
                2,000+
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-oc-ink-900/35
                "
              >
                Happy Clients
              </p>
            </div>

            <span className="hidden h-8 w-px bg-oc-maroon-900/10 sm:block" />

            <div>
              <p
                className="
                  font-[family-name:var(--font-display)]
                  text-2xl
                  font-medium
                  text-oc-maroon-800
                "
              >
                100%
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-oc-ink-900/35
                "
              >
                At Home
              </p>
            </div>
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
              src={ABOUT_IMAGE}
              alt="Luxury spa treatment at LARA SPA & SALON"
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
                FLOATING EXPERIENCE BADGE
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
                  font-[family-name:var(--font-display)]
                  text-2xl
                  leading-none
                  font-medium
                  sm:text-3xl
                "
              >
                10+
              </span>

              <span
                className="
                  mt-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/60
                "
              >
                Years of Excellence
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
              Luxury · Wellness · You
            </span>
          </motion.div>
        </motion.div>
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