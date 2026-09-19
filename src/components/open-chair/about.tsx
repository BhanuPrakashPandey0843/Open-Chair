"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import aboutImage from "@/assets/about.jpg";

const paragraphContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const paragraphItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [28, -28]
  );

  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        bg-oc-cream-50
        px-6
        py-20
        text-oc-ink-900
        sm:px-10
        sm:py-24
        lg:py-28
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
          CONTENT WRAPPER — single centered column, text then image,
          both sharing the same outer width so nothing bleeds wider
          on one side than the other
      ========================================================= */}

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* =======================================================
            EYEBROW + HEADING
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
          className="flex flex-col items-center"
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
              Who We Are
            </p>

            <span className="h-px w-7 bg-oc-gold-500/60" />
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6
              font-[family-name:var(--font-display)]
              text-[32px]
              leading-[1.1]
              font-medium
              tracking-[-0.03em]
              text-oc-maroon-900
              sm:text-[38px]
              lg:text-[44px]
            "
          >
            In many cultures, salon time is{" "}
            <span className="italic text-oc-maroon-700">
              ME time
            </span>{" "}
        .
          </h2>
        </motion.div>

        {/* =======================================================
            COPY — full column width, justified so every line runs
            edge to edge, staggered reveal on scroll
        ======================================================= */}

        <motion.div
          variants={paragraphContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="
            mt-8
            w-full
            space-y-4
            text-justify
            [text-align-last:left]
            text-[13.5px]
            leading-[1.8]
            text-oc-ink-900/65
            sm:mt-9
            sm:text-[15px]
          "
        >
          <motion.p variants={paragraphItem}>
            You walk in as you are&mdash;tired, rushed, quiet,
            talkative, carrying whatever the day has put on your
            shoulders. The people who work on you become the
            people you speak to, laugh with, vent to, or simply
            sit beside without saying much. It&rsquo;s a place
            where your stories and moods are understood without
            any judgement.{" "}
            <span className="font-medium text-oc-maroon-800">
              That is the spirit Open Chair was built from.
            </span>
          </motion.p>

          <motion.p variants={paragraphItem}>
            A simple idea: a space where you don&rsquo;t have to
            plan your life around a haircut. You walk in, take a
            seat, and know you&rsquo;ll be looked after. No
            appointment hassles, no number in queues, no
            confusion, no pressure&mdash;just work done properly
            for whoever sits down.
          </motion.p>

          <motion.p variants={paragraphItem}>
            Some of this comes from lived experience&mdash;the
            frustration of calling around for an appointment, the
            surprise of being asked for a clipper number instead
            of being understood, the feeling of wanting a place
            that treats grooming as something personal, not
            procedural. That idea grew into a shop meant for real
            people who deserve a place that understands them.
          </motion.p>

          <motion.p variants={paragraphItem}>
            If you come in with a story, we listen. If you want
            quiet, we keep the space steady. If you need to talk
            while we work, we make room for it&mdash;that&rsquo;s
            the part of the job that matters just as much as the
            service. We are a space built around people, and a
            CHAIR that is waiting for you.{" "}
            <span className="font-medium text-oc-maroon-800">
              This is Open Chair.
            </span>
          </motion.p>
        </motion.div>

        {/* =======================================================
            CTA
        ======================================================= */}

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
            mt-8
            inline-flex
            items-center
            gap-3
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-oc-maroon-800
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-oc-gold-500/60
            sm:mt-9
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

        {/* =======================================================
            DIVIDER — small ornament bridging copy and image
        ======================================================= */}

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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 mb-10 flex items-center justify-center gap-3 sm:mt-12 sm:mb-12"
        >
          <span className="h-px w-10 bg-oc-gold-500/40" />
          <span className="size-1.5 rounded-full bg-oc-gold-500/70" />
          <span className="h-px w-10 bg-oc-gold-500/40" />
        </motion.div>

        {/* =======================================================
            IMAGE — rectangular, same width as the column above it
        ======================================================= */}

        <motion.div
          ref={imageRef}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full"
        >
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : imageY }}
            className="relative"
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
                aspect-video
                overflow-hidden
                rounded-[18px]
                bg-oc-maroon-900/5
                shadow-[0_30px_70px_-30px_rgba(42,15,20,0.35)]
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
                  from-oc-maroon-900/25
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

              {/* Hover ring highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[18px]
                  ring-1
                  ring-inset
                  ring-oc-gold-500/0
                  transition-all
                  duration-500
                  group-hover/image:ring-oc-gold-500/40
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
                  min-w-[104px]
                  flex-col
                  rounded-[8px]
                  bg-oc-maroon-800
                  px-4
                  py-3.5
                  text-white
                  shadow-[0_15px_35px_-12px_rgba(42,15,20,0.45)]
                  sm:-bottom-2
                  sm:-left-2
                  sm:min-w-[118px]
                  sm:px-5
                  sm:py-4
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
                  className="mb-1.5 size-3 text-oc-gold-300"
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

              {/* Caption chip */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="
                  absolute
                  right-4
                  top-4
                  z-10
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/30
                  bg-black/15
                  px-3
                  py-1.5
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

              {/* Corner highlight */}
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
          mt-16
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
