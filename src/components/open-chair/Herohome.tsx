"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

// If your image is inside src/assets, keep this import.
// If your extension is .png/.webp, change only the extension.
import backgroundImage from "@/assets/baground.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-[720px]
        overflow-hidden
        bg-oc-maroon-950
        text-white
        sm:min-h-[780px]
        lg:min-h-screen
      "
    >

      <motion.div
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 -z-20"
      >
        <img
          src={backgroundImage.src}
          alt=""
          aria-hidden="true"
          className="
            size-full
            object-cover
            object-[62%_center]
            lg:object-center
          "
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#0f1e33]/95
          via-[#13284a]/65
          to-[#0b1726]/25
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-[#0f1e33]/25
          lg:hidden
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-48
          bg-gradient-to-t
          from-[#070f1a]/50
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              rgba(255,255,255,0.8) 0.5px,
              transparent 0.6px
            )
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-7xl items-center px-6 pb-20 pt-28 sm:min-h-[780px] sm:px-10 sm:pb-24 sm:pt-32 lg:min-h-screen lg:px-10">
        <div className="w-full max-w-[590px]">
          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-[620px]
              font-[family-name:var(--font-display)]
              text-[44px]
              leading-[1.02]
              font-medium
              tracking-[-0.035em]
              text-white
              sm:text-6xl
              lg:text-[68px]
              xl:text-[74px]
            "
          >
            <span className="italic text-silver">
              COME IN
            </span>

            <br />

            <span className="text-white/95">
              TO FEEL GOOD!
            </span>
          </motion.h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-[475px]
              text-[13px]
              leading-[1.8]
              text-white/70
              sm:text-sm
            "
          >
            For grooming is much more than just tending to the
            skin, and nails, and hair. It is time you spend on
            yourself to honour who you are. We recognize the
            value of the trust you place in the Chair, and that
            is the purpose Open Chair strives to uphold.
          </motion.p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://openchairbarbershopchatham.setmore.com/book"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                h-11
                items-center
                gap-3
                rounded-full
                bg-silver
                px-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-oc-maroon-900
                shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                active:brightness-95
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
              "
            >
              Book Now

              <span
                className="
                  flex
                  size-5
                  items-center
                  justify-center
                  rounded-full
                  bg-oc-maroon-900/10
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              >
                <ArrowRight
                  className="size-3"
                  strokeWidth={1.8}
                />
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#services"
              whileHover={{
                y: -2,
                backgroundColor: "rgba(255,255,255,0.10)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                h-11
                items-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-white/[0.02]
                px-6
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.11em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white/50
              "
            >
              Know More
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.3,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/45
          transition-colors
          hover:text-oc-gold-200
          sm:flex
        "
      >
        <span
          className="
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.25em]
          "
        >
          Explore
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            className="size-3"
            strokeWidth={1.2}
          />
        </motion.span>
      </motion.a>

      {/* =========================================================
          DECORATIVE CORNER
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-8
          right-8
          hidden
          h-12
          w-12
          border-b
          border-r
          border-white/10
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-8
          left-8
          hidden
          h-12
          w-12
          border-b
          border-l
          border-white/10
          lg:block
        "
      />
    </section>
  );
}