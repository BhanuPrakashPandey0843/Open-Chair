"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";

/* =============================================================
   IMAGES — every real Open Chair photo in the project. The
   exterior shot anchors a full storefront hero at the top;
   everything else lives in the filterable gallery below.
============================================================= */

import storefront from "@/assets/baground.jpg";
import galleryCover from "@/assets/galarya.jpg";
import aboutMoment from "@/assets/about.jpg";
import shot1 from "@/assets/IMG_20260903_204142.jpg.jpeg";
import shot2 from "@/assets/IMG_20260903_204227.jpg.jpeg";
import shot3 from "@/assets/IMG_20260903_204255.jpg.jpeg";
import shot4 from "@/assets/IMG_20260903_204336.jpg.jpeg";
import shot5 from "@/assets/IMG_20260903_204358.jpg.jpeg";
import shot6 from "@/assets/IMG_20260903_204415.jpg.jpeg";

import imgLounge from "@/assets/images/as.jpeg";
import imgB from "@/assets/images/b.jpeg";
import imgC from "@/assets/images/c.jpeg";
import imgD from "@/assets/images/d.jpeg";
import imgE from "@/assets/images/e.jpeg";
import imgF from "@/assets/images/f.jpeg";
import imgFdr from "@/assets/images/fdr.jpeg";
import imgG from "@/assets/images/g.jpeg";
import imgH from "@/assets/images/h.jpeg";
import imgI from "@/assets/images/i.jpeg";
import imgJ from "@/assets/images/j.jpeg";
import imgK from "@/assets/images/k.jpeg";
import imgL from "@/assets/images/l.jpeg";
import imgLkjh from "@/assets/images/lkjh.jpeg";
import imgM from "@/assets/images/m.jpeg";
import imgN from "@/assets/images/n.jpeg";
import imgO from "@/assets/images/o.jpeg";
import imgP from "@/assets/images/p.jpeg";
import imgPl from "@/assets/images/pl.jpeg";
import imgQ from "@/assets/images/q.jpeg";
import imgQw from "@/assets/images/qw.jpeg";
import imgQwer from "@/assets/images/qwer.jpeg";
import imgQww from "@/assets/images/qww.jpeg";
import imgQwwq from "@/assets/images/qwwq.jpeg";
import imgS from "@/assets/images/s.jpeg";
import imgT from "@/assets/images/t.jpeg";
import imgU from "@/assets/images/u.jpeg";
import imgV from "@/assets/images/v.jpeg";
import imgVfd from "@/assets/images/vfd.jpeg";
import imgVfss from "@/assets/images/vfss.jpeg";
import imgW from "@/assets/images/w.jpeg";
import imgWq from "@/assets/images/wq.jpeg";
import imgX from "@/assets/images/x.jpeg";
import imgY from "@/assets/images/y.jpeg";
import imgZ from "@/assets/images/z.jpeg";
import imgWhatsapp1 from "@/assets/images/WhatsApp Image 2026-09-15 at 8.18.01 PM.jpeg";

const MAPS_HREF = "https://maps.app.goo.gl/EbtKfvNmXtoGFZmH9?g_st=ac";

type Category = "space" | "craft" | "results" | "team" | "lounge";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: Category;
  big?: "wide" | "tall";
};

const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "space", label: "The Space" },
  { id: "craft", label: "The Craft" },
  { id: "results", label: "Results" },
  { id: "team", label: "Faces" },
  { id: "lounge", label: "The Lounge" },
];

/*
  Real Open Chair photography — every usable shot from the shop's
  camera roll, sorted into five honest categories rather than
  dumped in as one long scroll.
*/
const GALLERY_ITEMS: GalleryItem[] = [
  // ---- Space -----------------------------------------------
  {
    src: galleryCover.src,
    alt: "Open Chair barbershop and salon interior",
    title: "The Chair Room",
    category: "space",
    big: "wide",
  },
  {
    src: imgPl.src,
    alt: "A stylist at work on the shop floor",
    title: "On The Floor",
    category: "space",
    big: "wide",
  },
  {
    src: imgW.src,
    alt: "Wide view of the barbershop under its hexagon lighting",
    title: "Under The Hex Lights",
    category: "space",
    big: "tall",
  },
  {
    src: imgU.src,
    alt: "The full row of styling stations and mirrors",
    title: "Down The Line",
    category: "space",
  },
  {
    src: imgI.src,
    alt: "A finished cut with the shop floor behind it",
    title: "End Of The Day",
    category: "space",
  },
  {
    src: aboutMoment.src,
    alt: "A calm moment at Open Chair",
    title: "Quiet Luxury",
    category: "space",
  },

  // ---- Craft -------------------------------------------------
  {
    src: imgQww.src,
    alt: "A hot towel steam treatment at Open Chair",
    title: "The Steam Finish",
    category: "craft",
    big: "tall",
  },
  {
    src: imgFdr.src,
    alt: "A barber combing a client's hair into place",
    title: "Precision, Comb In Hand",
    category: "craft",
  },
  {
    src: shot2.src,
    alt: "Open Chair barbershop craft in motion",
    title: "Precision at Work",
    category: "craft",
  },
  {
    src: shot1.src,
    alt: "Open Chair barbershop styling session",
    title: "The Finishing Touch",
    category: "craft",
  },
  {
    src: imgWq.src,
    alt: "A reclined beard trim beside the hot towel warmer",
    title: "Reclined & Refined",
    category: "craft",
  },
  {
    src: imgQ.src,
    alt: "A barber finishing a cut with talc powder",
    title: "The Last Detail",
    category: "craft",
  },
  {
    src: imgV.src,
    alt: "A barber lining up a hard part design",
    title: "The Hard Part",
    category: "craft",
  },
  {
    src: imgZ.src,
    alt: "A reclined client mid-shave finish",
    title: "The Close Shave",
    category: "craft",
  },
  {
    src: imgX.src,
    alt: "A client reclined and relaxed in the chair",
    title: "Fully Reclined",
    category: "craft",
  },
  {
    src: imgP.src,
    alt: "An Open Chair Barbers branded cape",
    title: "The Open Chair Cape",
    category: "craft",
  },
  {
    src: imgO.src,
    alt: "A finished beard shape beside the barber's station",
    title: "Sharp Lines",
    category: "craft",
  },
  {
    src: imgLkjh.src,
    alt: "A barber shaping a full beard",
    title: "Full Beard, Steady Hand",
    category: "craft",
  },
  {
    src: imgVfss.src,
    alt: "A barber trimming a client's beard",
    title: "Beard Day",
    category: "craft",
  },

  // ---- Results -------------------------------------------------
  {
    src: shot4.src,
    alt: "Open Chair barbershop signature look",
    title: "Signature Looks",
    category: "results",
    big: "wide",
  },
  {
    src: imgY.src,
    alt: "A fade with a hand-cut design line",
    title: "The Design Line",
    category: "results",
    big: "wide",
  },
  {
    src: imgN.src,
    alt: "A sharp pompadour fade with full beard",
    title: "Pomp & Beard",
    category: "results",
  },
  {
    src: imgK.src,
    alt: "A textured fade with a taper",
    title: "Textured Taper",
    category: "results",
  },
  {
    src: imgL.src,
    alt: "A low bun over a taper fade, from behind",
    title: "Fade To Bun",
    category: "results",
  },
  {
    src: imgM.src,
    alt: "A clean buzz cut with a crisp fade",
    title: "Clean & Cropped",
    category: "results",
  },
  {
    src: imgG.src,
    alt: "A short fade on an adult client",
    title: "The Everyday Fade",
    category: "results",
  },
  {
    src: imgH.src,
    alt: "A tight crew cut profile",
    title: "Crew Cut Profile",
    category: "results",
  },
  {
    src: imgS.src,
    alt: "A textured crop on a mature client",
    title: "Sharp At Any Age",
    category: "results",
  },
  {
    src: imgQw.src,
    alt: "A senior client's finished cut",
    title: "Golden Years, Good Cut",
    category: "results",
  },
  {
    src: imgJ.src,
    alt: "A client's hair before styling",
    title: "Before The Cut",
    category: "results",
  },
  {
    src: shot6.src,
    alt: "Open Chair barbershop finished result",
    title: "The Open Chair Standard",
    category: "results",
  },
  {
    src: imgB.src,
    alt: "A kid's fresh haircut",
    title: "First-Day Fresh",
    category: "results",
  },
  {
    src: imgC.src,
    alt: "A spiky textured kid's cut",
    title: "Spiked & Set",
    category: "results",
  },
  {
    src: imgD.src,
    alt: "A kid's fade with a textured top",
    title: "Little Guy, Big Fade",
    category: "results",
  },
  {
    src: imgE.src,
    alt: "A young client's finished look",
    title: "Ready To Go",
    category: "results",
  },
  {
    src: imgF.src,
    alt: "A kid's fade in the waiting area",
    title: "Fresh Out The Chair",
    category: "results",
  },

  // ---- Faces (team + candid clients) -------------------------
  {
    src: shot3.src,
    alt: "Open Chair barbershop client experience",
    title: "A Moment to Unwind",
    category: "team",
  },
  {
    src: shot5.src,
    alt: "Open Chair barbershop details",
    title: "Details Matter",
    category: "team",
    big: "tall",
  },
  {
    src: imgT.src,
    alt: "A client smiling mid-cut",
    title: "Good Chair, Good Mood",
    category: "team",
  },
  {
    src: imgQwer.src,
    alt: "A kid smiling at the wash station",
    title: "Wash Day",
    category: "team",
  },
  {
    src: imgQwwq.src,
    alt: "A kid smiling in the cape",
    title: "All Smiles",
    category: "team",
  },
  {
    src: imgWhatsapp1.src,
    alt: "A crew cut client with the lounge in the background",
    title: "Sharp & Settled",
    category: "team",
  },

  // ---- The Lounge --------------------------------------------
  {
    src: imgVfd.src,
    alt: "A kid playing foosball in the Open Chair lounge",
    title: "Game On",
    category: "lounge",
    big: "wide",
  },
  {
    src: imgLounge.src,
    alt: "The pool table and foosball lounge at Open Chair",
    title: "More Than A Wait",
    category: "lounge",
    big: "wide",
  },
];

const INITIAL_COUNT = 12;
const LOAD_STEP = 10;

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<
    Category | "all"
  >("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  function handleCategoryChange(next: Category | "all") {
    setActiveCategory(next);
    setVisibleCount(INITIAL_COUNT);
  }

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  function showPrev() {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current - 1 + filteredItems.length) % filteredItems.length;
    });
  }

  function showNext() {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + 1) % filteredItems.length;
    });
  }

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filteredItems.length]);

  return (
    <>
      {/* =========================================================
          STOREFRONT HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-oc-ink-900">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[62vh] min-h-[420px] w-full sm:h-[68vh]"
        >
          <img
            src={storefront.src}
            alt="The Open Chair storefront in Chatham, Ontario"
            className="absolute inset-0 size-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-oc-ink-900 via-oc-ink-900/35 to-oc-ink-900/10"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-oc-maroon-900/10"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-14 text-center sm:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-7 bg-oc-gold-300/60" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-oc-gold-300">
                56 Grand Ave East, Chatham
              </p>
              <span className="h-px w-7 bg-oc-gold-300/60" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.4 }}
              className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-medium tracking-[-0.025em] text-white sm:text-6xl"
            >
              Step inside{" "}
              <span className="italic text-foil">Open Chair</span>
            </motion.h2>

            <motion.a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              whileHover={{ y: -2 }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-colors duration-300 hover:border-oc-gold-300/50 hover:bg-oc-gold-500/15"
            >
              <MapPin className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              Get Directions
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          GALLERY SECTION
      ========================================================= */}
      <section
        id="gallery"
        className="group/gallery relative isolate overflow-hidden bg-gradient-to-b from-[#f0ede5] via-[#f8f6f1] to-[#fcfbf8] px-6 py-24 text-oc-ink-900 sm:px-10 sm:py-28 lg:py-32"
      >
        {/* Background texture */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(15,30,51,0.65) 0.55px, transparent 0.7px),
                radial-gradient(circle, rgba(15,30,51,0.35) 0.45px, transparent 0.6px)
              `,
              backgroundPosition: "0 0, 8px 10px",
              backgroundSize: "13px 13px, 17px 17px",
            }}
          />

          <motion.div
            className="absolute -left-48 top-10 size-[420px] rounded-full bg-oc-gold-500/[0.16] blur-[110px]"
            animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -right-48 bottom-0 size-[400px] rounded-full bg-oc-maroon-800/[0.10] blur-[110px]"
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-oc-gold-500/50" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-oc-gold-600">
                The Open Chair Journal
              </p>
              <span className="h-px w-7 bg-oc-gold-500/50" />
            </div>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-medium tracking-[-0.025em] sm:text-5xl">
              Our <span className="text-sapphire italic">Gallery</span>
            </h2>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-oc-ink-900/62 sm:text-sm">
              Real cuts, real clients, real chairs — every photo here
              was taken on our floor, not a stock shelf.
            </p>
          </motion.div>

          {/* CATEGORY FILTER */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2"
          >
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`
                    rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em]
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-oc-maroon-800 bg-sapphire text-oc-cream-50"
                        : "border-oc-maroon-900/12 bg-white/70 text-oc-ink-900/55 hover:border-oc-gold-500/40 hover:text-oc-ink-900/85"
                    }
                  `}
                >
                  {cat.label}
                  <span
                    className={`ml-1.5 ${
                      isActive ? "text-oc-gold-300" : "text-oc-ink-900/30"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* GRID */}
          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[180px] lg:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, index) => {
                const spanClass =
                  item.big === "wide"
                    ? "lg:col-span-2 lg:row-span-1"
                    : item.big === "tall"
                    ? "lg:col-span-1 lg:row-span-2"
                    : "lg:col-span-1 lg:row-span-1";

                return (
                  <motion.button
                    key={item.src}
                    type="button"
                    layout
                    onClick={() => setSelectedIndex(index)}
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index, 8) * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -3 }}
                    className={`
                      group/item relative min-h-[230px] overflow-hidden rounded-2xl
                      bg-oc-maroon-900/5 text-left shadow-[0_2px_8px_rgba(15,30,51,0.06)]
                      transition-shadow duration-500
                      hover:shadow-[0_25px_55px_-25px_rgba(15,30,51,0.28)]
                      focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oc-gold-500
                      sm:min-h-[260px] lg:min-h-0 ${spanClass}
                    `}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="absolute inset-0 size-full object-cover transition-transform duration-[1000ms] ease-out group-hover/item:scale-[1.06]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover/item:opacity-90"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-oc-gold-500/[0.035] opacity-0 transition-opacity duration-500 group-hover/item:opacity-100"
                    />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                      <div className="translate-y-1 transition-transform duration-500 group-hover/item:translate-y-0">
                        <p className="font-[family-name:var(--font-display)] text-lg text-white sm:text-xl">
                          {item.title}
                        </p>
                        <span className="mt-1 block h-px w-0 bg-oc-gold-300 transition-all duration-500 group-hover/item:w-10" />
                      </div>

                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition-all duration-500 group-hover/item:-translate-y-1 group-hover/item:border-oc-gold-300/50 group-hover/item:bg-oc-gold-500/15 group-hover/item:text-oc-gold-200">
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-300 group-hover/item:rotate-45"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </motion.button>
                );
              })}

              {/* FIND US — pinned utility tile, always visible */}
              <motion.a
                key="find-us"
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -3 }}
                className="group/item relative flex min-h-[230px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-oc-maroon-900/10 bg-oc-maroon-900 text-center text-oc-cream-50 shadow-[0_2px_8px_rgba(15,30,51,0.12)] transition-shadow duration-500 hover:shadow-[0_25px_55px_-25px_rgba(15,30,51,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oc-gold-500 sm:min-h-[260px] lg:col-span-1 lg:row-span-1 lg:min-h-0"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--oc-gold-300) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <span className="relative flex size-12 items-center justify-center rounded-full border border-oc-gold-300/30 bg-oc-gold-300/10 text-oc-gold-200 transition-all duration-500 group-hover/item:scale-110 group-hover/item:border-oc-gold-300/60">
                  <MapPin className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>

                <span className="relative font-[family-name:var(--font-display)] text-lg text-white">
                  Find Us
                </span>

                <span className="relative text-[10px] uppercase tracking-[0.18em] text-oc-gold-200/70">
                  View on Google Maps
                </span>
              </motion.a>
            </AnimatePresence>
          </motion.div>

          {/* LOAD MORE */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10 flex justify-center"
            >
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + LOAD_STEP)}
                className="rounded-full border border-oc-maroon-900/15 bg-white/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-oc-maroon-800 transition-all duration-300 hover:border-oc-gold-500/50 hover:bg-oc-gold-500/[0.08]"
              >
                Show {Math.min(LOAD_STEP, filteredItems.length - visibleCount)}{" "}
                More
              </button>
            </motion.div>
          )}

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-14 flex flex-col items-center gap-4 text-center"
          >
            <p className="max-w-lg font-[family-name:var(--font-display)] text-lg leading-relaxed text-oc-maroon-900/70 sm:text-xl">
              Good hair is a detail.
              <br />
              <span className="italic text-oc-gold-600">
                Feeling good is the whole point.
              </span>
            </p>

            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-oc-ink-900/30">
              <span className="size-1 rounded-full bg-oc-gold-500/60" />
              Open Chair
              <span className="size-1 rounded-full bg-oc-gold-500/60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX — with prev/next navigation
      ========================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-oc-ink-900/90 p-5 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl bg-black shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-h-[82vh] w-auto max-w-full object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-oc-gold-300">
                  {selectedIndex !== null &&
                    `${selectedIndex + 1} / ${filteredItems.length}`}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-white">
                  {selectedItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close gallery image"
                className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-oc-gold-300/50 hover:bg-oc-gold-500/15 hover:text-oc-gold-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oc-gold-300"
              >
                <X className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-oc-gold-300/50 hover:bg-oc-gold-500/15 hover:text-oc-gold-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oc-gold-300"
              >
                <ChevronLeft className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-oc-gold-300/50 hover:bg-oc-gold-500/15 hover:text-oc-gold-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oc-gold-300"
              >
                <ChevronRight className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
