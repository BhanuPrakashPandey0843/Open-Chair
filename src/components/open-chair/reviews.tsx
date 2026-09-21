"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const ROW_ONE: Testimonial[] = [
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
    name: "Eric Blaire",
    quote:
      "Absolutely the best barber experience I've had. The team at Open Chair pays attention to every detail, and my haircut came out exactly how I wanted. Clean space, great atmosphere, and top-notch service.",
    role: "Verified client",
  },
  {
    name: "Simon Claude",
    quote:
      "Open Chair delivers premium grooming from start to finish. The barber understood my style instantly and gave me a sharp, modern cut. Highly recommend this place if you're looking for quality.",
    role: "Verified client",
  },
  {
    name: "Wendy Stone",
    quote:
      "I booked a haircut and beard styling for my husband, and he loved the results. Professional staff, relaxing environment, and excellent customer service. We'll definitely be coming back.",
    role: "Verified client",
  },
  {
    name: "Kabir Verma",
    quote:
      "Hands down one of the finest salons in town. The fade was incredibly clean, the beard trim was perfect, and the styling advice was genuinely helpful. Worth every penny.",
    role: "Verified client",
  },
  {
    name: "Mohammed Aslam",
    quote:
      "Very impressed with the professionalism at Open Chair. The appointment was on time, the service was exceptional, and the haircut exceeded my expectations. A place you can trust for consistent quality.",
    role: "Verified client",
  },
  {
    name: "Caleb Morrison",
    quote:
      "From the warm welcome to the final styling, everything felt premium. The barber took time to understand what I wanted and delivered an outstanding haircut. Five stars without a doubt.",
    role: "Verified client",
  },
  {
    name: "Jenna Carver",
    quote:
      "The salon has such a modern and welcoming vibe. The staff are friendly, skilled, and make you feel comfortable throughout the appointment. My haircut and styling turned out amazing.",
    role: "Verified client",
  },
  {
    name: "Omar Farouq",
    quote:
      "Excellent attention to detail and fantastic service. My beard shaping was precise, and the haircut looked fresh and stylish. Open Chair has become my go-to grooming spot.",
    role: "Verified client",
  },
  {
    name: "Linda McKinnon",
    quote:
      "A premium salon experience with talented professionals. The service was smooth, hygienic, and personalized. I left feeling refreshed and confident with my new look.",
    role: "Verified client",
  },
  {
    name: "Sofia DeLuca",
    quote:
      "Loved everything about Open Chair. The team is incredibly talented, the salon is spotless, and they genuinely care about giving clients the perfect style. Highly recommended.",
    role: "Verified client",
  },
  {
    name: "Ryan Hales",
    quote:
      "I've tried several barber shops, but Open Chair stands out for its consistency and quality. Great haircut, relaxing experience, and friendly professionals who know exactly what they're doing.",
    role: "Verified client",
  },
  {
    quote:
      "Booking online took thirty seconds and the confirmation landed instantly. The chair itself is the comfiest I've sat in.",
    name: "Priya Nair",
    role: "First-time client",
  },
  {
    quote:
      "The beard trim and hot towel combo is now a monthly ritual. Consistent, careful, and never rushed even on a busy Saturday.",
    name: "Kabir Verma",
    role: "Regular, 1 year",
  },
];

const ROW_TWO: Testimonial[] = [
  {
    quote:
      "Brought my son in for his first proper haircut and the team was so patient with him. He asks to come back every time now.",
    name: "Simran Kaur",
    role: "Parent, kids' cuts",
  },
  {
    quote:
      "Asked for something low-maintenance before a big move and got exactly that — a cut that still looks sharp three weeks later.",
    name: "Devansh Rao",
    role: "Haircut & styling",
  },
  {
    quote:
      "The bridal package took the stress out of my whole week. Hair, skin, everything handled by people who clearly do this often.",
    name: "Ananya Iyer",
    role: "Bridal package",
  },
  {
    quote:
      "Been to a lot of barbershops that rush the fade. This is the first place that actually slows down and gets the blend right.",
    name: "Rohan Kapoor",
    role: "Regular, 6 months",
  },
];

const CLIENT_INITIALS = ["RS", "AM", "PN", "KV", "SK"];

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function MarqueeCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className="
        group/card
        relative
        flex
        w-[300px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-oc-maroon-900/[0.08]
        bg-white/80
        p-6
        shadow-[0_2px_8px_rgba(15,30,51,0.05)]
        backdrop-blur-sm
        transition-shadow
        duration-500
        hover:shadow-[0_22px_50px_-28px_rgba(15,30,51,0.28)]
        sm:w-[340px]
        sm:p-7
      "
    >
      {/* Card gold glow */}
      <span
        aria-hidden="true"
        className="
          absolute
          -right-16
          -top-16
          size-32
          rounded-full
          bg-oc-gold-500/[0.05]
          blur-3xl
        "
      />

      <div className="relative flex h-full flex-col">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5 text-oc-gold-500" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, starIdx) => (
              <Star
                key={starIdx}
                className="size-3.5"
                fill="currentColor"
                strokeWidth={0}
              />
            ))}
          </div>

          <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-oc-ink-900/25">
            Verified
          </span>
        </div>

        <span className="sr-only">Rated 5 out of 5 stars</span>

        {/* Quote mark */}
        <div
          className="
            mt-5
            font-[family-name:var(--font-display)]
            text-4xl
            leading-none
            text-oc-maroon-800/[0.10]
            transition-colors
            duration-500
            group-hover/card:text-oc-gold-500/20
          "
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote className="-mt-1 flex-1 text-[13px] leading-[1.75] text-oc-ink-900/72 sm:text-[14px]">
          {testimonial.quote}
        </blockquote>

        {/* Author */}
        <figcaption className="mt-6 flex items-center gap-3 border-t border-oc-ink-900/[0.07] pt-4">
          <span
            aria-hidden="true"
            className="
              relative
              flex
              size-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-oc-maroon-800
              font-[family-name:var(--font-display)]
              text-[10px]
              font-medium
              text-oc-gold-300
              shadow-sm
            "
          >
            {initialsFor(testimonial.name)}
          </span>

          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="truncate text-[12px] font-semibold text-oc-ink-900">
              {testimonial.name}
            </span>

            <span className="truncate text-[9px] font-medium uppercase tracking-[0.14em] text-oc-ink-900/40">
              {testimonial.role}
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

function MarqueeRow({
  testimonials,
  direction,
}: {
  testimonials: Testimonial[];
  direction: "left" | "right";
}) {
  // Duplicate the row so the loop is seamless.
  const doubled = [...testimonials, ...testimonials];

  return (
    <div
      className="marquee-row relative w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-4 sm:gap-5 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((testimonial, i) => (
          <MarqueeCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="group/reviews relative isolate overflow-hidden bg-oc-mist-100 py-24 text-oc-ink-900 sm:py-32">
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
              radial-gradient(circle, rgba(15,30,51,0.7) 0.55px, transparent 0.7px),
              radial-gradient(circle, rgba(15,30,51,0.45) 0.45px, transparent 0.6px)
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
            bg-oc-maroon-700/[0.16]
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
            bg-oc-maroon-800/[0.12]
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

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 sm:px-10">
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

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-oc-gold-600">
            From the chair
          </p>

          <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-medium tracking-[-0.025em] sm:text-5xl">
            What our clients
            <br />
            <span className="text-sapphire italic">
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
      </div>

      {/* =======================================================
          Testimonials — two infinite marquee rows
      ======================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-14 flex w-full flex-col gap-4 sm:mt-16 sm:gap-5"
      >
        <MarqueeRow testimonials={ROW_ONE} direction="left" />
        <MarqueeRow testimonials={ROW_TWO} direction="right" />
      </motion.div>

      <div className="relative mx-auto mt-14 flex w-full max-w-7xl flex-col items-center px-6 sm:mt-16 sm:px-10">
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
            delay: 0.1,
          }}
          className="
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
                  delay: 0.25 + i * 0.06,
                }}
                className="
                  flex
                  size-9
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-oc-mist-100
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
      </div>
    </section>
  );
}
