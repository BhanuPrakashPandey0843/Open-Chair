"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import {
  ArrowUpRight,
  Quote,
  Scissors,
  Sparkles,
} from "lucide-react";

import naveedPortrait from "@/assets/baarber/Danny Pasha.jpeg";
import saleemPortrait from "@/assets/baarber/SALEEM AKTHAR.png";
import anmolPortrait from "@/assets/baarber/Barber Anmol.jpeg";
import husseinPortrait from "@/assets/baarber/Barber Hussien.jpeg";
// TODO: swap for a proper Megan portrait once one is added to assets/baarber.
import meganPortrait from "@/assets/baarber/megan awarm.jpeg";

/* =============================================================
   CONSTANTS
============================================================= */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BOOKING_HREF = "https://openchairbarbershopchatham.setmore.com/book";

/* Shared class fragments (kept as literals so Tailwind can see them) */
const DISPLAY = "font-[family-name:var(--font-display)]";
const EYEBROW =
  "text-[9px] font-semibold uppercase tracking-[0.25em] text-oc-gold-300";

/* =============================================================
   DATA
============================================================= */

type Founder = {
  name: string;
  image: StaticImageData;
  objectPosition: string;
};

type TeamMember = {
  id: string;
  firstName: string;
  name: string;
  role: string;
  years: number;
  yearsLabel: string;
  bio: string;
  skills: readonly string[];
  image: StaticImageData;
  /** Where the face sits inside the photo, so every crop stays on it. */
  objectPosition: string;
  /** Optional extra zoom for wide, candid shots. */
  zoom?: number;
};

const FOUNDERS: readonly [Founder, Founder] = [
  {
    name: "NAVEED PASHA",
    image: naveedPortrait,
    objectPosition: "50% 40%",
  },
  {
    name: "Saleem Akhtar",
    image: saleemPortrait,
    objectPosition: "50% 12%",
  },
];

const STORY_PARAGRAPHS = [
  "Open Chair started from something small: the simple struggle of trying to get a haircut without turning it into a whole process. I’d heard stories about how, back in the U.S., my dad could walk in to any salon, wait a few minutes to get things done and get on with his day. When he moved to Canada, he realised that wasn’t the norm. Everything needed an appointment, and even then, the experience didn’t always feel personal.",
  "That bothered him and, gradually, me too. I kept thinking about a place where people could walk in without stress, sit down, and know they’d be understood—whether it was their hair type, their cultural style, or just the kind of day they were having. I shared the idea with my dad and Saleem Akhtar, and that was the beginning.",
  "We wanted a space that felt easy for families. A place where parents didn’t have to rush, where kids had a corner to play, and where anyone—from any background—could walk in and feel comfortable. Not a themed shop. Not a trendy experiment. Not a money-minting machine. We wanted to create a steady, reliable grooming space built for a growing, diverse community of Chatham-Kent.",
] as const;

const TEAM: readonly TeamMember[] = [
  {
    id: "anmol",
    firstName: "Anmol",
    name: "Anmol",
    role: "Barber",
    years: 5,
    yearsLabel: "Years behind the chair",
    bio: "Anmol brings five years behind the chair and a calm, focused way of working. He blends global techniques with everyday modern cuts, moving with the kind of ease that makes clients trust him quickly. Fades, textured styles, beard work—he handles it all with steady detail. People leave his chair looking sharp and feeling settled.",
    skills: ["Fades", "Textured styles", "Beard work"],
    image: anmolPortrait,
    objectPosition: "45% 8%",
  },
  {
    id: "hussein",
    firstName: "Hussein",
    name: "Hussein",
    role: "Barber",
    years: 7,
    yearsLabel: "Years behind the chair",
    bio: "Hussein’s seven years of experience show in the way he pays attention. His work is shaped by Middle Eastern barbering traditions and clean modern detailing. Skin fades, lineups, beard shaping—he works with unapologetic accuracy, making sure every finish feels exactly how it should. Clients sit down relaxed because they know he’ll get it right.",
    skills: ["Skin fades", "Lineups", "Beard shaping"],
    image: husseinPortrait,
    objectPosition: "47% 8%",
  },
  {
    id: "megan",
    firstName: "Megan",
    name: "Megan Awarm",
    role: "Senior Stylist",
    years: 10,
    yearsLabel: "Years in women’s hairstyling",
    bio: "Megan brings a decade of women’s hairstyling experience and a clear eye for colour, shape, and balance. She specializes in cuts, highlights, root touchups, colour work, and wash-and-style. Her approach is simple but effective: understand the client, create what feels natural, and make sure you walk out feeling like yourself—just better.",
    skills: ["Cuts", "Highlights", "Root touch-ups", "Colour work", "Wash & style"],
    image: meganPortrait,
    objectPosition: "39% 37%",
    zoom: 1.25,
  },
];

/* =============================================================
   MOTION VARIANTS
============================================================= */

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const riseItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* =============================================================
   SMALL REUSABLE PIECES
============================================================= */

/** Gold hairline flanking a small uppercase label. */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 bg-oc-gold-300/50" />
      <p className={EYEBROW}>{children}</p>
      <span className="h-px w-7 bg-oc-gold-300/50" />
    </div>
  );
}

/** Counts from 00 to `value` once `run` flips true. No React re-renders. */
function CountUp({
  value,
  run,
  className,
}: {
  value: number;
  run: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const text = useTransform(count, (latest) =>
    Math.round(latest).toString().padStart(2, "0"),
  );

  useEffect(() => {
    if (reduceMotion) {
      count.set(value);
      return undefined;
    }
    if (!run) return undefined;

    const controls = animate(count, value, { duration: 1.4, ease: EASE });
    return () => controls.stop();
  }, [count, reduceMotion, run, value]);

  return (
    <motion.span aria-hidden="true" className={className}>
      {text}
    </motion.span>
  );
}

function YearsStat({ years, label }: { years: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  return (
    <div ref={ref} className="flex items-end gap-3">
      <CountUp
        value={years}
        run={inView}
        className={`${DISPLAY} bg-gradient-to-b from-oc-cream-50 to-oc-gold-200 bg-clip-text text-6xl font-medium leading-[0.85] tracking-[-0.04em] text-transparent`}
      />
      <span className="sr-only">{`${years} ${label}`}</span>
      <p
        aria-hidden="true"
        className="max-w-[9rem] pb-0.5 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-oc-cream-50/55"
      >
        {label}
      </p>
    </div>
  );
}

function SkillChips({ name, skills }: { name: string; skills: readonly string[] }) {
  return (
    <ul aria-label={`${name}’s specialties`} className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-oc-gold-300/25 bg-oc-gold-300/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-oc-gold-200"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

function BookButton({ firstName }: { firstName: string }) {
  return (
    <a
      href={BOOKING_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Book a chair with ${firstName} (opens in a new tab)`}
      className="group/button relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-oc-gold-300/30 bg-oc-gold-300/[0.06] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-oc-gold-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-oc-gold-300/55 hover:bg-oc-gold-300/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oc-gold-300"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 -left-10 w-8 skew-x-[-20deg] bg-white/25 transition-all duration-500 group-hover/button:left-[110%]"
      />
      <span className="relative">Book with {firstName}</span>
      <ArrowUpRight
        className="relative size-3 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </a>
  );
}

/* =============================================================
   BACKGROUND
============================================================= */

function Background({ animated }: { animated: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Top spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_38%_at_50%_0%,rgba(74,106,154,0.34),transparent)]" />

      {/* Fine dot texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(217,217,217,0.9) 0.5px, transparent 0.6px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Drifting gold glows */}
      <motion.div
        className="absolute -left-40 top-0 size-[440px] rounded-full bg-oc-maroon-700/[0.28] blur-[130px]"
        animate={animated ? { x: [0, 25, 0], y: [0, -20, 0] } : undefined}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-0 size-[420px] rounded-full bg-oc-maroon-700/[0.20] blur-[130px]"
        animate={animated ? { x: [0, -20, 0], y: [0, 20, 0] } : undefined}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* =============================================================
   SECTION HEADER
============================================================= */

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mx-auto flex max-w-2xl flex-col items-center text-center"
    >
      <Eyebrow>The People Behind The Chair</Eyebrow>

      <h2
        id="stars-heading"
        className={`${DISPLAY} mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl`}
      >
        Our <span className="italic text-silver">Stars</span>
      </h2>

      <p className="mt-4 max-w-lg text-[13px] leading-6 text-oc-cream-50/55 sm:text-sm">
        From the founders who imagined a simpler way to get a haircut to the
        hands behind every cut, colour, and finish — meet the people who make
        Open Chair work.
      </p>
    </motion.div>
  );
}

/* =============================================================
   FOUNDERS — arched portraits, rotating seal, editorial story
============================================================= */

function Seal() {
  const pathId = useId().replace(/:/g, "");

  return (
    <div
      aria-hidden="true"
      className="absolute left-[53%] top-[53%] z-20 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-oc-gold-300/40 bg-oc-maroon-950/90 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:size-28"
    >
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 size-full animate-spin text-oc-gold-300 [animation-duration:28s] motion-reduce:animate-none"
      >
        <defs>
          <path
            id={pathId}
            d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0"
          />
        </defs>
        <text fill="currentColor" fontSize="8.5" fontWeight="600">
          <textPath href={`#${pathId}`} textLength="292" lengthAdjust="spacing">
            OPEN CHAIR • BARBERSHOP &amp; SALON • CHATHAM-KENT •
          </textPath>
        </text>
      </svg>

      <Scissors className="size-5 text-oc-gold-300" strokeWidth={1.5} />
    </div>
  );
}

function FounderArch({
  founder,
  y,
  delay,
  className,
}: {
  founder: Founder;
  y: MotionValue<number>;
  delay: number;
  className: string;
}) {
  return (
    <motion.div style={{ y }} className={`absolute ${className}`}>
      <motion.figure
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
        className="group/founder relative"
      >
        {/* Offset gold arch outline */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-t-full border border-oc-gold-300/30 transition-colors duration-500 group-hover/founder:border-oc-gold-300/65 sm:-inset-3"
        />

        {/* Arch-cropped photo — warm duotone so any backdrop suits the palette */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-oc-maroon-900">
          <Image
            src={founder.image}
            alt={`${founder.name}, co-founder of Open Chair`}
            fill
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 260px, 50vw"
            placeholder="blur"
            style={{ objectPosition: founder.objectPosition }}
            className="object-cover transition-[filter,scale] duration-[900ms] ease-out [filter:grayscale(1)_contrast(1.05)_brightness(0.95)] group-hover/founder:scale-[1.05] group-hover/founder:[filter:grayscale(0.55)_contrast(1.05)_brightness(1)] motion-reduce:transition-none"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-oc-maroon-700/55 mix-blend-multiply"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-oc-maroon-950/85 via-transparent to-transparent"
          />
        </div>

        <figcaption className="absolute inset-x-0 bottom-0 px-2 pb-3 text-center sm:pb-5">
          <span
            className={`${DISPLAY} block text-[15px] italic leading-tight text-oc-cream-50 sm:text-lg`}
          >
            {founder.name}
          </span>
          <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.2em] text-oc-gold-300">
            Founder
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

function FoundersStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const firstY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [36, -36]);
  const secondY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-28, 28]);
  const wordX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [90, -90]);

  return (
    <div ref={ref} className="relative mt-20 sm:mt-24">
      {/* Giant outlined wordmark drifting behind the story */}
      <motion.div
        aria-hidden="true"
        style={{ x: wordX }}
        className={`${DISPLAY} pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[clamp(5rem,17vw,15rem)] font-medium leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(217,217,217,0.09)]`}
      >
        OPEN CHAIR
      </motion.div>

      <div className="relative grid items-center gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20">
        {/* ---------------- Portraits ---------------- */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/4.7] w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none">
            <FounderArch
              founder={FOUNDERS[0]}
              y={firstY}
              delay={0}
              className="left-0 top-0 w-[56%]"
            />
            <FounderArch
              founder={FOUNDERS[1]}
              y={secondY}
              delay={0.15}
              className="bottom-0 right-0 w-[50%]"
            />
            <Seal />
          </div>
        </div>

        {/* ---------------- Story ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-7"
        >
          <motion.div variants={riseItem} className="flex items-center gap-3">
            <span className="h-px w-8 bg-oc-gold-300/50" />
            <p className={EYEBROW}>From The Founders</p>
          </motion.div>

          <motion.h3
            variants={riseItem}
            className={`${DISPLAY} mt-5 text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[2.6rem]`}
          >
            A chair that’s{" "}
            <span className="italic text-silver">always open</span>.
          </motion.h3>

          <div className="mt-6 space-y-4 text-[13.5px] leading-[1.85] text-oc-cream-50/65 sm:text-[15px]">
            {STORY_PARAGRAPHS.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={riseItem}
                className={
                  index === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-[family-name:var(--font-display)] first-letter:text-[3.4rem] first-letter:font-medium first-letter:leading-[0.8] first-letter:text-oc-gold-300"
                    : undefined
                }
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            variants={riseItem}
            className="relative mt-10 rounded-2xl border border-oc-gold-300/15 bg-oc-cream-50/[0.03] px-6 pb-6 pt-8 sm:px-8 sm:pb-8"
          >
            <span
              aria-hidden="true"
              className="absolute -top-5 left-6 grid size-10 place-items-center rounded-full border border-oc-gold-300/30 bg-oc-maroon-950"
            >
              <Quote
                className="size-4 rotate-180 fill-oc-gold-300/25 text-oc-gold-300"
                strokeWidth={1.5}
              />
            </span>
            <p
              className={`${DISPLAY} text-xl italic leading-snug tracking-[-0.01em] text-oc-cream-50 sm:text-2xl`}
            >
              Open Chair is our way of giving Chatham something we always wished
              existed here:{" "}
              <span className="text-oc-gold-200">
                a place that respects your time, understands your style,
              </span>{" "}
              and treats grooming as part of everyday life, not a chore you have
              to plan around.
            </p>
          </motion.blockquote>

          <motion.div
            variants={riseItem}
            className="mt-9 flex items-center gap-5"
          >
            <span className="h-px w-12 shrink-0 bg-oc-gold-300/50" />
            <div>
              <p className={`${DISPLAY} text-2xl italic text-oc-gold-200`}>
                Danny Pasha{" "}
                <span className="not-italic text-oc-gold-300/60">&amp;</span>{" "}
                Saleem Akhtar
              </p>
              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-oc-cream-50/45">
                Founders, Open Chair Barbershop &amp; Salon
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* =============================================================
   TEAM — expanding portrait panels (desktop) / stacked cards (mobile)
============================================================= */

type TeamPanelProps = {
  member: TeamMember;
  index: number;
  active: boolean;
  stageId: string;
  onActivate: (index: number) => void;
};

function TeamPanel({ member, index, active, stageId, onActivate }: TeamPanelProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.li
      data-active={active}
      onMouseEnter={() => onActivate(index)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      className="group/panel relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-oc-gold-300/15 bg-oc-maroon-900 shadow-[0_3px_16px_rgba(0,0,0,0.25)] md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:w-[calc(50%-0.75rem)] lg:flex-1 lg:last:odd:col-span-1 lg:last:odd:mx-0 lg:last:odd:w-auto lg:transition-[flex-grow,box-shadow] lg:duration-[900ms] lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:data-[active=true]:flex-[2.6] lg:data-[active=true]:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)] motion-reduce:transition-none"
    >
      {/* ---------------- Portrait ---------------- */}
      <div className="relative aspect-[4/4.6] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at Open Chair`}
          fill
          sizes="(min-width: 1024px) 55vw, (min-width: 768px) 45vw, 100vw"
          placeholder="blur"
          style={{
            objectPosition: member.objectPosition,
            ...(member.zoom
              ? {
                  transform: `scale(${member.zoom})`,
                  transformOrigin: member.objectPosition,
                }
              : null),
          }}
          className="object-cover transition-[filter,scale] duration-[1200ms] ease-out motion-reduce:transition-none lg:scale-[1.1] lg:[filter:grayscale(1)_contrast(1.05)_brightness(0.8)] lg:group-data-[active=true]/panel:scale-100 lg:group-data-[active=true]/panel:[filter:none]"
        />

        {/* Depth gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-oc-maroon-900 via-oc-maroon-900/10 to-transparent lg:from-oc-maroon-950 lg:via-oc-maroon-950/35"
        />

        {/* Index */}
        <div
          aria-hidden="true"
          className="absolute left-4 top-4 flex items-center gap-2 lg:left-6 lg:top-6"
        >
          <span
            className={`${DISPLAY} text-sm tracking-[0.2em] text-oc-gold-300`}
          >
            {number}
          </span>
          <span className="h-px w-6 bg-oc-gold-300/40" />
        </div>

        {/* Collapsed (desktop): vertical name */}
        <span
          aria-hidden="true"
          className={`${DISPLAY} absolute bottom-7 left-1/2 hidden -translate-x-1/2 rotate-180 text-[1.7rem] tracking-[0.04em] text-oc-cream-50/90 transition-opacity duration-500 [writing-mode:vertical-rl] lg:block lg:group-data-[active=true]/panel:opacity-0`}
        >
          {member.name}
        </span>

        {/* Expanded (desktop): name + role */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden translate-y-3 p-8 opacity-0 transition-[opacity,translate] duration-500 lg:block lg:group-data-[active=true]/panel:translate-y-0 lg:group-data-[active=true]/panel:opacity-100 lg:group-data-[active=true]/panel:delay-500"
        >
          <p className={EYEBROW}>{member.role}</p>
          <p
            className={`${DISPLAY} mt-2 whitespace-nowrap text-[2.6rem] leading-none tracking-[-0.02em] text-oc-cream-50`}
          >
            {member.name}
          </p>
        </div>
      </div>

      {/* Desktop: keyboard + click target for the whole panel */}
      <button
        type="button"
        aria-pressed={active}
        aria-controls={stageId}
        onClick={() => onActivate(index)}
        onFocus={() => onActivate(index)}
        className="absolute inset-0 z-10 hidden cursor-pointer rounded-[22px] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-oc-gold-300 lg:block"
      >
        <span className="sr-only">{`Show ${member.name}’s profile`}</span>
      </button>

      {/* ---------------- Mobile / tablet: full card content ---------------- */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:hidden">
        <p className={EYEBROW}>{member.role}</p>
        <h4
          className={`${DISPLAY} mt-2 text-[2rem] leading-none tracking-[-0.02em] text-oc-cream-50`}
        >
          {member.name}
        </h4>

        <div className="mt-5">
          <YearsStat years={member.years} label={member.yearsLabel} />
        </div>

        <p className="mt-5 text-[13px] leading-[1.75] text-oc-cream-50/65">
          {member.bio}
        </p>

        <div className="mt-5">
          <SkillChips name={member.firstName} skills={member.skills} />
        </div>

        <div className="mt-6">
          <BookButton firstName={member.firstName} />
        </div>
      </div>

      {/* Active ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[22px] ring-1 ring-inset ring-oc-gold-300/15 transition-shadow duration-700 lg:group-data-[active=true]/panel:ring-oc-gold-300/45"
      />
    </motion.li>
  );
}

/** Desktop-only detail card that swaps beneath the panels. */
function TeamStage({ member, stageId }: { member: TeamMember; stageId: string }) {
  return (
    <div
      id={stageId}
      role="region"
      aria-live="polite"
      aria-label="Selected team member"
      className="mt-3 hidden overflow-hidden rounded-[22px] border border-oc-gold-300/15 bg-oc-cream-50/[0.03] backdrop-blur-sm lg:block"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="grid min-h-[15rem] grid-cols-12 items-center gap-10 p-9 xl:p-11"
        >
          <div className="col-span-3">
            <p className={`${EYEBROW} mb-4`}>{member.role}</p>
            <YearsStat years={member.years} label={member.yearsLabel} />
          </div>

          <div className="col-span-6 border-x border-oc-gold-300/10 px-10">
            <h4
              className={`${DISPLAY} text-3xl leading-none tracking-[-0.02em] text-oc-cream-50`}
            >
              {member.name}
            </h4>
            <p className="mt-4 text-sm leading-[1.8] text-oc-cream-50/65">
              {member.bio}
            </p>
          </div>

          <div className="col-span-3 flex flex-col items-start gap-6">
            <SkillChips name={member.firstName} skills={member.skills} />
            <BookButton firstName={member.firstName} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TeamShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageId = useId();
  const combinedYears = TEAM.reduce((sum, member) => sum + member.years, 0);

  return (
    <div className="mt-24 sm:mt-28">
      {/* Bridge from the founders' story into the team */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mx-auto flex max-w-xl flex-col items-center text-center"
      >
        <Eyebrow>The Team</Eyebrow>

        <h3
          className={`${DISPLAY} mt-4 text-3xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-4xl`}
        >
          Behind every <span className="italic text-silver">chair</span>
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-oc-cream-50/55 sm:text-sm">
          This is the story we began with. And the team you’re about to meet is
          the reason it works.
        </p>

        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-oc-gold-300/20 bg-oc-gold-300/[0.05] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-oc-gold-200">
          <Sparkles className="size-3" strokeWidth={1.5} aria-hidden="true" />
          {combinedYears} years of combined craft
        </p>
      </motion.div>

      <ul
        role="list"
        className="mx-auto mt-12 grid max-w-md gap-6 sm:max-w-lg md:max-w-none md:grid-cols-2 lg:flex lg:h-[34rem] lg:gap-3 xl:h-[36rem]"
      >
        {TEAM.map((member, index) => (
          <TeamPanel
            key={member.id}
            member={member}
            index={index}
            active={index === activeIndex}
            stageId={stageId}
            onActivate={setActiveIndex}
          />
        ))}
      </ul>

      <TeamStage member={TEAM[activeIndex]} stageId={stageId} />

      <p className="mt-6 hidden items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-oc-cream-50/35 lg:flex">
        <span className="h-px w-6 bg-oc-cream-50/15" />
        Hover or tap a portrait to meet each star
        <span className="h-px w-6 bg-oc-cream-50/15" />
      </p>
    </div>
  );
}

/* =============================================================
   SECTION
============================================================= */

export function OurStars() {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="stars"
        aria-labelledby="stars-heading"
        className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0f1e33_0%,#0c1421_55%,#12161d_100%)] px-6 py-24 text-oc-cream-50 sm:px-10 sm:py-28 lg:py-32"
      >
        <Background animated={!reduceMotion} />

        <div className="relative mx-auto w-full max-w-7xl">
          <SectionHeader />
          <FoundersStory />
          <TeamShowcase />

          {/* Closing note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 flex items-center justify-center gap-2"
          >
            <Scissors
              className="size-3 text-oc-gold-300/70"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-oc-cream-50/40">
              Every chair, every time
            </span>
            <Sparkles
              className="size-3 text-oc-gold-300/70"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
