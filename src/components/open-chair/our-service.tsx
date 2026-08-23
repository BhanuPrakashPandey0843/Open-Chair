"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Crown,
  Droplets,
  Heart,
  Sparkles,
  Waves,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: typeof Sparkles;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Home Massage Therapy",
    description:
      "Melt away tension with our expert full-body massage therapy, tailored to your comfort and needs.",
    price: "196",
    image: "/images/services/home-massage.jpg",
    icon: Waves,
  },
  {
    title: "Facial Treatments",
    description:
      "Revitalize your skin with our customized facial treatments using premium organic products.",
    price: "137",
    image: "/images/services/facial-treatments.jpg",
    icon: Sparkles,
  },
  {
    title: "Deep Skin Cleansing",
    description:
      "Purify and refresh with our deep cleansing rituals that leave your skin glowing and renewed.",
    price: "156",
    image: "/images/services/deep-cleansing.jpg",
    icon: Droplets,
  },
  {
    title: "Body Spa",
    description:
      "Indulge in a full-body spa experience with exfoliation, wraps, and hydration treatments.",
    price: "154",
    image: "/images/services/body-spa.jpg",
    icon: Heart,
  },
  {
    title: "Relaxation Sessions",
    description:
      "Unwind with our holistic relaxation sessions that combine aromatherapy and gentle techniques.",
    price: "160",
    image: "/images/services/relaxation.jpg",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Bridal Home Packages",
    description:
      "Purify and refresh with our deep cleansing rituals that leave your skin glowing and renewed.",
    price: "306",
    image: "/images/services/bridal-package.jpg",
    icon: Crown,
  },
];

const WHATSAPP_NUMBER = "910000000000";

function getWhatsAppHref(service: Service) {
  const message = encodeURIComponent(
    `Hello, I would like to book ${service.title}. Please share the available timings.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function Services() {
  return (
    <section
      id="services"
      className="
        group/services
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
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(
                circle,
                rgba(42,15,20,0.65) 0.55px,
                transparent 0.7px
              ),
              radial-gradient(
                circle,
                rgba(42,15,20,0.35) 0.45px,
                transparent 0.6px
              )
            `,
            backgroundPosition: "0 0, 8px 10px",
            backgroundSize: "13px 13px, 17px 17px",
          }}
        />

        {/* Ambient gold */}
        <motion.div
          className="
            absolute
            -left-56
            top-20
            size-[460px]
            rounded-full
            bg-oc-gold-500/[0.035]
            blur-[120px]
          "
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -right-56
            bottom-0
            size-[440px]
            rounded-full
            bg-oc-maroon-800/[0.025]
            blur-[120px]
          "
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fine horizontal line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-1/2
            hidden
            h-px
            bg-oc-maroon-900/[0.025]
            lg:block
          "
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
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-oc-gold-500/50" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-oc-gold-600">
              The Open Chair Experience
            </p>

            <span className="h-px w-7 bg-oc-gold-500/50" />
          </div>

          {/* Heading */}
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
            Our{" "}
            <span className="text-oc-maroon-800 italic">
              Services
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-[13px] leading-6 text-oc-ink-900/50 sm:text-sm">
            Thoughtfully designed treatments and rituals, created to
            make every visit feel effortless, personal, and worth
            slowing down for.
          </p>
        </motion.div>

        {/* =======================================================
            DIVIDER
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
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-9 flex max-w-xs items-center gap-3"
        >
          <div className="h-px flex-1 bg-oc-maroon-900/10" />

          <div className="flex items-center gap-1">
            <span className="size-1 rounded-full bg-oc-gold-500/40" />
            <span className="size-1.5 rounded-full bg-oc-gold-500/75" />
            <span className="size-1 rounded-full bg-oc-gold-500/40" />
          </div>

          <div className="h-px flex-1 bg-oc-maroon-900/10" />
        </motion.div>

        {/* =======================================================
            SERVICE GRID
        ======================================================= */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.985,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group/card
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-oc-maroon-900/[0.08]
                  bg-white/80
                  shadow-[0_3px_12px_rgba(42,15,20,0.035)]
                  backdrop-blur-sm
                  transition-shadow
                  duration-500
                  hover:shadow-[0_28px_65px_-30px_rgba(42,15,20,0.28)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <div className="relative aspect-[1.58/1] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="
                      absolute
                      inset-0
                      size-full
                      object-cover
                      transition-transform
                      duration-[1000ms]
                      ease-out
                      group-hover/card:scale-[1.07]
                    "
                  />

                  {/* Image overlay */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-black/5
                      transition-opacity
                      duration-500
                      group-hover/card:opacity-80
                    "
                  />

                  {/* Gold wash */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-oc-gold-500/[0.035]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover/card:opacity-100
                    "
                  />

                  {/* Category */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/25
                      bg-black/10
                      px-3
                      py-1.5
                      backdrop-blur-md
                    "
                  >
                    <span className="size-1.5 rounded-full bg-oc-gold-300" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/85">
                      Signature
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-black/10
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover/card:border-oc-gold-300/50
                      group-hover/card:bg-oc-gold-500/15
                      group-hover/card:text-oc-gold-200
                    "
                    whileHover={{
                      rotate: 8,
                    }}
                  >
                    <Icon
                      className="size-3.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Featured badge */}
                  {service.featured && (
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        rounded-full
                        bg-oc-gold-300
                        px-3
                        py-1.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-oc-maroon-900
                        shadow-lg
                      "
                    >
                      Most Loved
                    </div>
                  )}
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}
                <div className="relative flex flex-col p-5 sm:p-6">
                  {/* Title */}
                  <h3
                    className="
                      font-[family-name:var(--font-display)]
                      text-[20px]
                      leading-tight
                      font-medium
                      tracking-[-0.015em]
                      text-oc-ink-900
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 min-h-[50px] text-[12px] leading-[1.7] text-oc-ink-900/50">
                    {service.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-5 flex items-end justify-between border-t border-oc-ink-900/[0.07] pt-4">
                    {/* Price */}
                    <div className="flex flex-col">
                      <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-oc-ink-900/35">
                        From
                      </span>

                      <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-[10px] font-medium text-oc-maroon-800">
                          ₹
                        </span>

                        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-oc-maroon-800">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={getWhatsAppHref(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/button
                        relative
                        flex
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-full
                        border
                        border-oc-gold-500/30
                        bg-oc-gold-500/[0.045]
                        px-3.5
                        py-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-oc-maroon-800
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-oc-gold-500/55
                        hover:bg-oc-gold-500/[0.10]
                        hover:shadow-[0_8px_22px_rgba(198,161,91,0.12)]
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-oc-gold-500
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          inset-y-0
                          -left-10
                          w-8
                          skew-x-[-20deg]
                          bg-white/60
                          transition-all
                          duration-500
                          group-hover/button:left-[110%]
                        "
                      />

                      <span className="relative">
                        Book Now
                      </span>

                      <ArrowUpRight
                        className="
                          relative
                          size-3
                          transition-transform
                          duration-300
                          group-hover/button:-translate-y-0.5
                          group-hover/button:translate-x-0.5
                        "
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>

                {/* Bottom animated line */}
                <motion.span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-gradient-to-r
                    from-oc-gold-500/0
                    via-oc-gold-500/60
                    to-oc-gold-500/0
                  "
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + index * 0.08,
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM NOTE
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
            delay: 0.35,
          }}
          className="mt-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-oc-gold-500/60" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-oc-ink-900/35">
              Tailored to you
            </span>

            <span className="size-1 rounded-full bg-oc-gold-500/60" />
          </div>

          <p className="mt-3 max-w-md font-[family-name:var(--font-display)] text-lg leading-relaxed text-oc-maroon-900/65">
            Every appointment begins with a conversation,
            <br />
            <span className="italic text-oc-gold-600">
              because your experience should feel personal.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}