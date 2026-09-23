"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Baby,
  BadgePercent,
  Check,
  Crown,
  Flame,
  Phone,
  Scissors,
  Sparkles,
} from "lucide-react";

import shot1 from "@/assets/IMG_20260903_204142.jpg.jpeg";
import husseinPortrait from "@/assets/baarber/Barber Hussien.jpeg";
import anmolPortrait from "@/assets/baarber/Barber Anmol.jpeg";
import meganPortrait from "@/assets/baarber/Megan Profile Pic.png";

/* =============================================================
   REAL MENU DATA — sourced from the printed Barbershop / Salon
   service cards. Keep in sync if pricing changes in-shop.
============================================================= */

type FeaturedService = {
  title: string;
  description: string;
  price: string;
  image: string;
  imagePosition?: string;
  icon: typeof Sparkles;
  tag: "Barbershop" | "Salon";
  featured?: boolean;
  /** First name of the barber/stylist shown performing this service. */
  stylist?: string;
  stylistImage?: string;
};

const FEATURED_SERVICES: FeaturedService[] = [
  {
    title: "Haircut",
    description:
      "A precision cut, shaped and finished exactly the way you like it — the Open Chair everyday essential.",
    price: "25",
    image: husseinPortrait.src,
    imagePosition: "50% 14%",
    icon: Scissors,
    tag: "Barbershop",
    stylist: "Hussein",
    stylistImage: husseinPortrait.src,
  },
  {
    title: "Haircut & Beard Trim",
    description:
      "A clean cut paired with a sharp beard shape-up — the classic Open Chair combo.",
    price: "40",
    image: anmolPortrait.src,
    imagePosition: "50% 11%",
    icon: Flame,
    tag: "Barbershop",
    featured: true,
    stylist: "Anmol",
    stylistImage: anmolPortrait.src,
  },
  {
    title: "Senior Haircut",
    description:
      "An unhurried, comfortable cut for our senior clients, handled with a patient, steady hand.",
    price: "20",
    image: meganPortrait.src,
    imagePosition: "50% 20%",
    icon: Crown,
    tag: "Barbershop",
    stylist: "Megan",
    stylistImage: meganPortrait.src,
  },
  {
    title: "Kids' Haircut",
    description:
      "A quick, friendly cut for our youngest clients, aged 12 and under — patient, gentle, fuss-free.",
    price: "20",
    image: shot1.src,
    icon: Baby,
    tag: "Barbershop",
  },
];

type PriceItem = {
  name: string;
  price?: string;
  /** Pre-discount price, shown struck through next to the new price. */
  originalPrice?: string;
  from?: boolean;
  /** Small muted line under the service name, e.g. "Long or short hair". */
  note?: string;
};

type PriceGroup = {
  title?: string;
  items: PriceItem[];
};

const BARBERSHOP_GROUPS: PriceGroup[] = [
  {
    items: [
      { name: "Haircut", price: "25" },
      { name: "Zero Fade", price: "30" },
      { name: "Kids' Haircut (12 and Under)", price: "20" },
      { name: "Senior Haircut (60+)", price: "20" },
      { name: "Beard Trim", price: "20" },
      { name: "Haircut & Beard Trim", price: "40" },
      { name: "Hot Towel Shave", price: "20" },
      { name: "Hot Towel, Haircut & Shave", price: "45" },
      { name: "Facial", price: "35" },
      { name: "Haircut & Facial", price: "50" },
      { name: "Head Massage (10 min)", price: "20" },
      { name: "Haircut & Head Massage", price: "40" },
      { name: "Head Shave", price: "30" },
      { name: "Head Shave & Beard Trim", price: "40" },
      { name: "Premium Service", price: "60" },
      { name: "Add Head Massage to Any Service (10 min)", price: "15" },
    ],
  },
];

const SALON_DISCOUNT_PERCENT = 15;

const SALON_GROUPS: PriceGroup[] = [
  {
    title: "Core Services",
    items: [
      { name: "Women's Haircut", price: "35", note: "Long or short hair" },
      { name: "Women's Wash & Style", price: "35" },
    ],
  },
  {
    title: "Colour & Highlight Packages",
    items: [
      {
        name: "Roots + Highlights & Style",
        price: "128",
        originalPrice: "150",
        from: true,
      },
      {
        name: "Roots + Highlights, Cut & Style",
        price: "140",
        originalPrice: "165",
        from: true,
      },
      {
        name: "Full Colour + Highlights & Style",
        price: "140",
        originalPrice: "165",
        from: true,
      },
      {
        name: "Full Colour + Highlights, Cut & Style",
        price: "153",
        originalPrice: "180",
        from: true,
      },
    ],
  },
  {
    title: "Colour Services",
    items: [
      { name: "Root Touch-Up & Style", price: "85", originalPrice: "100" },
      { name: "Root Touch-Up, Cut & Style", price: "98", originalPrice: "115" },
      { name: "Full Colour & Style", price: "111", originalPrice: "130" },
      { name: "Full Colour, Cut & Style", price: "123", originalPrice: "145" },
    ],
  },
  {
    title: "Highlight Services",
    items: [
      {
        name: "½ Highlights & Style",
        price: "115",
        originalPrice: "135",
        from: true,
      },
      {
        name: "½ Highlights, Cut & Style",
        price: "128",
        originalPrice: "150",
        from: true,
      },
      {
        name: "Full Highlights & Style",
        price: "140",
        originalPrice: "165",
        from: true,
      },
      {
        name: "Full Highlights, Cut & Style",
        price: "153",
        originalPrice: "180",
        from: true,
      },
    ],
  },
  {
    title: "Specialty Services",
    items: [
      { name: "Mini Foil Service & Style", price: "84", originalPrice: "99" },
      { name: "Face Framing (up to 10 foils)" },
    ],
  },
];

const BOOKING_HREF = "https://openchairbarbershopchatham.setmore.com/book";
const PHONE_HREF = "tel:+15193519193";
const PHONE_DISPLAY = "519-351-9193";

type Tab = "barbershop" | "salon";

const TABS: { id: Tab; label: string }[] = [
  { id: "barbershop", label: "Barbershop" },
  { id: "salon", label: "Salon" },
];

export function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("barbershop");
  const groups = activeTab === "barbershop" ? BARBERSHOP_GROUPS : SALON_GROUPS;

  return (
    <section
      id="services"
      className="
        group/services
        relative
        isolate
        overflow-hidden
        bg-gradient-to-b from-[#fcfbf8] via-[#f8f6f1] to-[#f0ede5]
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
                rgba(15,30,51,0.65) 0.55px,
                transparent 0.7px
              ),
              radial-gradient(
                circle,
                rgba(15,30,51,0.35) 0.45px,
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
            bg-oc-gold-500/[0.16]
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
            bg-oc-maroon-800/[0.10]
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
            <span className="text-sapphire italic">
              Services
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-[13px] leading-6 text-oc-ink-900/62 sm:text-sm">
            Barbershop precision and salon craft, under one roof —
            every price, plainly stated, no surprises in the chair.
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
            FEATURED SERVICES
        ======================================================= */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURED_SERVICES.map((service, index) => {
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
                  border-oc-gold-500/30
                  bg-white/90
                  shadow-[0_3px_12px_rgba(15,30,51,0.05)]
                  backdrop-blur-sm
                  transition-shadow
                  duration-500
                  hover:shadow-[0_28px_65px_-30px_rgba(15,30,51,0.28)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <div className="relative aspect-[1.1/1] overflow-hidden">
                  <img
                    src={service.image}
                    alt={
                      service.stylist
                        ? `${service.stylist} performing the ${service.title} service at Open Chair`
                        : service.title
                    }
                    loading={index < 3 ? "eager" : "lazy"}
                    style={
                      service.imagePosition
                        ? { objectPosition: service.imagePosition }
                        : undefined
                    }
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
                      {service.tag}
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

                  {/* Stylist chip — who performs this service */}
                  {service.stylist && (
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/25
                        bg-black/20
                        py-1
                        pl-1
                        pr-3
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover/card:border-oc-gold-300/55
                        group-hover/card:bg-black/35
                      "
                    >
                      <span className="relative size-6 shrink-0 overflow-hidden rounded-full border border-white/40">
                        <img
                          src={service.stylistImage}
                          alt=""
                          aria-hidden="true"
                          style={
                            service.imagePosition
                              ? { objectPosition: service.imagePosition }
                              : undefined
                          }
                          className="size-full object-cover"
                        />
                      </span>

                      <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/90">
                        With {service.stylist}
                      </span>
                    </div>
                  )}

                  {/* Featured badge */}
                  {service.featured && (
                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
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
                <div className="relative flex flex-col p-5">
                  {/* Title */}
                  <h3
                    className="
                      font-[family-name:var(--font-display)]
                      text-[18px]
                      leading-tight
                      font-medium
                      tracking-[-0.015em]
                      text-oc-ink-900
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 min-h-[55px] text-[12px] leading-[1.7] text-oc-ink-900/62">
                    {service.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-4 flex items-end justify-between border-t border-oc-ink-900/[0.07] pt-4">
                    {/* Price */}
                    <div className="flex flex-col">
                      <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-oc-ink-900/35">
                        From
                      </span>

                      <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-[10px] font-medium text-oc-maroon-800">
                          $
                        </span>

                        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-oc-maroon-800">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={BOOKING_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/button
                        relative
                        flex
                        items-center
                        gap-1.5
                        overflow-hidden
                        rounded-full
                        border
                        border-oc-gold-500/30
                        bg-oc-gold-500/[0.045]
                        px-3
                        py-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-oc-maroon-800
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-oc-gold-500/55
                        hover:bg-oc-gold-500/[0.10]
                        hover:shadow-[0_8px_22px_rgba(74,106,154,0.18)]
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
                        Book
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
            TAB SWITCHER — Barbershop / Salon full price list
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
            margin: "-60px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 flex flex-col items-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              border
              border-oc-gold-500/35
              bg-white/70
              p-1.5
              shadow-[0_3px_12px_rgba(15,30,51,0.06)]
              backdrop-blur-sm
            "
          >
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                aria-pressed={activeTab === id}
                className={`
                  relative
                  rounded-full
                  px-5
                  py-2.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-300
                  ${
                    activeTab === id
                      ? "text-oc-cream-50"
                      : "text-oc-ink-900/50 hover:text-oc-ink-900/80"
                  }
                `}
              >
                {activeTab === id && (
                  <motion.span
                    layoutId="services-tab-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-sapphire"
                    style={{ zIndex: -1 }}
                  />
                )}

                {label}
              </button>
            ))}
          </div>

          <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-medium text-oc-ink-900 sm:text-3xl">
            {activeTab === "barbershop" ? "Barbershop Services" : "Salon Services"}
          </h3>

          {activeTab === "salon" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-oc-gold-500/30
                bg-oc-gold-500/[0.08]
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-oc-maroon-800
              "
            >
              <Sparkles className="size-3" strokeWidth={1.75} aria-hidden="true" />
              {SALON_DISCOUNT_PERCENT}% off colour, highlight &amp; specialty services
            </motion.p>
          )}
        </motion.div>

        {/* =======================================================
            PRICE LIST
        ======================================================= */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={`${activeTab}-${group.title ?? "list"}`}
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.55,
                delay: groupIndex * 0.07,
              }}
              className={`
                rounded-[20px]
                border
                border-oc-gold-500/30
                bg-white/90
                p-6
                shadow-[0_3px_12px_rgba(15,30,51,0.05)]
                backdrop-blur-sm
                ${groups.length === 1 ? "sm:col-span-2" : ""}
              `}
            >
              {group.title && (
                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    rounded-full
                    bg-oc-maroon-800
                    px-4
                    py-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-oc-cream-50
                  "
                >
                  {group.title}
                </div>
              )}

              <ul
                className={
                  groups.length === 1
                    ? "grid grid-cols-1 gap-x-8 sm:grid-cols-2"
                    : "flex flex-col"
                }
              >
                {group.items.map((item, itemIndex) => (
                  <li
                    key={item.name}
                    className={`
                      -mx-2
                      flex
                      items-start
                      justify-between
                      gap-4
                      rounded-lg
                      px-2
                      py-2.5
                      transition-colors
                      duration-300
                      hover:bg-oc-gold-500/[0.05]
                      ${
                        itemIndex !== group.items.length - 1
                          ? "border-b border-oc-ink-900/[0.06]"
                          : ""
                      }
                    `}
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="flex items-start gap-2 text-[13px] leading-5 text-oc-ink-900/80">
                        <Check
                          className="mt-0.5 size-3 shrink-0 text-oc-gold-500"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {item.name}
                      </span>

                      {item.note && (
                        <span className="pl-5 text-[10px] leading-4 text-oc-ink-900/40">
                          {item.note}
                        </span>
                      )}
                    </span>

                    <span className="flex shrink-0 flex-col items-end gap-1 whitespace-nowrap">
                      {item.price ? (
                        <>
                          {item.from && (
                            <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-oc-ink-900/35">
                              From
                            </span>
                          )}

                          <span className="flex items-baseline gap-1.5">
                            {item.originalPrice && (
                              <span className="text-[10px] font-medium text-oc-ink-900/30 line-through">
                                ${item.originalPrice}
                              </span>
                            )}

                            <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-oc-maroon-800">
                              ${item.price}
                            </span>
                          </span>

                          {item.originalPrice && (
                            <span
                              className="
                                inline-flex
                                items-center
                                gap-0.5
                                rounded-full
                                bg-oc-gold-500/15
                                px-1.5
                                py-[1px]
                                text-[7px]
                                font-bold
                                uppercase
                                tracking-[0.08em]
                                text-oc-maroon-700
                              "
                            >
                              <BadgePercent
                                className="size-2.5"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                              Save {SALON_DISCOUNT_PERCENT}%
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-[11px] font-medium text-oc-ink-900/40">
                          Ask in-shop
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* =======================================================
            BOOKING NOTE
        ======================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
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
            mx-auto
            mt-10
            flex
            max-w-2xl
            flex-col
            items-center
            gap-3
            text-center
          "
        >
          {activeTab === "salon" && (
            <p className="text-[12px] text-oc-ink-900/45">
              A private room is available for clients who prefer a
              closed-off space.
            </p>
          )}

          <a
            href={PHONE_HREF}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-oc-gold-500/30
              bg-oc-gold-500/[0.06]
              px-5
              py-2.5
              text-[12px]
              font-semibold
              text-oc-maroon-800
              transition-all
              duration-300
              hover:border-oc-gold-500/55
              hover:bg-oc-gold-500/[0.12]
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-oc-gold-500
            "
          >
            <Phone className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
            Prefer to book by phone? Call {PHONE_DISPLAY}
          </a>
        </motion.div>

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
