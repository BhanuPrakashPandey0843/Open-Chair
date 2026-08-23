"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
  className?: string;
};

/*
  Replace these paths with your actual gallery images.
*/
const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/gallery/spa-treatment.jpg",
    alt: "Relaxing spa treatment",
    title: "A Moment to Unwind",
    category: "Treatments",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/gallery/hair-styling.jpg",
    alt: "Professional hair styling",
    title: "The Finishing Touch",
    category: "Styling",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/gallery/hero-treatment.jpg",
    alt: "Premium salon treatment",
    title: "Quiet Luxury",
    category: "Experience",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/images/gallery/spa-interior.jpg",
    alt: "Elegant spa interior",
    title: "Your Space to Relax",
    category: "Our Space",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/gallery/spa-table.jpg",
    alt: "Luxury spa setup",
    title: "Details Matter",
    category: "Experience",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="
          group/gallery
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
        {/* =====================================================
            Background texture
        ===================================================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Fine paper texture */}
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

          {/* Ambient gold glow */}
          <motion.div
            className="
              absolute
              -left-48
              top-10
              size-[420px]
              rounded-full
              bg-oc-gold-500/[0.035]
              blur-[110px]
            "
            animate={{
              x: [0, 25, 0],
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
              -right-48
              bottom-0
              size-[400px]
              rounded-full
              bg-oc-maroon-800/[0.025]
              blur-[110px]
            "
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          {/* ===================================================
              HEADER
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
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

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-oc-gold-500">
                The Open Chair Journal
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
                tracking-[-0.025em]
                sm:text-5xl
              "
            >
              Our{" "}
              <span className="text-oc-maroon-800 italic">
                Gallery
              </span>
            </h2>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-oc-ink-900/50 sm:text-sm">
              A glimpse into the world of Open Chair — where every
              detail is considered, every appointment is personal.
            </p>
          </motion.div>

          {/* ===================================================
              DECORATIVE DIVIDER
          =================================================== */}
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
            className="
              mx-auto
              mt-9
              flex
              max-w-xs
              items-center
              gap-3
            "
          >
            <div className="h-px flex-1 bg-oc-maroon-900/10" />

            <div className="flex items-center gap-1">
              <span className="size-1 rounded-full bg-oc-gold-500/40" />
              <span className="size-1.5 rounded-full bg-oc-gold-500/75" />
              <span className="size-1 rounded-full bg-oc-gold-500/40" />
            </div>

            <div className="h-px flex-1 bg-oc-maroon-900/10" />
          </motion.div>

          {/* ===================================================
              GALLERY
          =================================================== */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              sm:gap-4
              lg:grid-cols-4
              lg:auto-rows-[170px]
              lg:gap-4
          "
          >
            {GALLERY_ITEMS.map((item, index) => (
              <motion.button
                key={item.src}
                type="button"
                onClick={() => setSelectedImage(item)}
                initial={{
                  opacity: 0,
                  y: 28,
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
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className={`
                  group/item
                  relative
                  min-h-[230px]
                  overflow-hidden
                  rounded-2xl
                  bg-oc-maroon-900/5
                  text-left
                  shadow-[0_2px_8px_rgba(42,15,20,0.04)]
                  transition-shadow
                  duration-500
                  hover:shadow-[0_25px_55px_-25px_rgba(42,15,20,0.28)]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-oc-gold-500
                  sm:min-h-[260px]
                  lg:min-h-0
                  ${item.className ?? ""}
                `}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="
                    absolute
                    inset-0
                    size-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-out
                    group-hover/item:scale-[1.06]
                  "
                />

                {/* Image contrast */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/5
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-500
                    group-hover/item:opacity-90
                  "
                />

                {/* Subtle gold wash */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-oc-gold-500/[0.035]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover/item:opacity-100
                  "
                />

                {/* Top category */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/20
                    bg-black/10
                    px-3
                    py-1.5
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover/item:border-oc-gold-300/40
                  "
                >
                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {item.category}
                  </span>
                </div>

                {/* Bottom content */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-end
                    justify-between
                    p-4
                    sm:p-5
                  "
                >
                  <div
                    className="
                      translate-y-1
                      transition-transform
                      duration-500
                      group-hover/item:translate-y-0
                    "
                  >
                    <p className="font-[family-name:var(--font-display)] text-lg text-white sm:text-xl">
                      {item.title}
                    </p>

                    <span
                      className="
                        mt-1
                        block
                        h-px
                        w-0
                        bg-oc-gold-300
                        transition-all
                        duration-500
                        group-hover/item:w-10
                      "
                    />
                  </div>

                  {/* Expand button */}
                  <span
                    className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/10
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover/item:-translate-y-1
                      group-hover/item:border-oc-gold-300/50
                      group-hover/item:bg-oc-gold-500/15
                      group-hover/item:text-oc-gold-200
                    "
                  >
                    <ArrowUpRight
                      className="
                        size-3.5
                        transition-transform
                        duration-300
                        group-hover/item:rotate-45
                      "
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* ===================================================
              Bottom statement
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.25,
            }}
            className="mt-12 flex flex-col items-center gap-4 text-center"
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
          LIGHTBOX
      ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-oc-ink-900/90
              p-5
              backdrop-blur-md
              sm:p-10
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 10,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                max-h-[90vh]
                max-w-6xl
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
              "
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="
                  max-h-[82vh]
                  w-auto
                  max-w-full
                  object-contain
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/75
                  to-transparent
                  px-5
                  pb-5
                  pt-16
                "
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-oc-gold-300">
                  {selectedImage.category}
                </p>

                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-white">
                  {selectedImage.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close gallery image"
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-oc-gold-300/50
                  hover:bg-oc-gold-500/15
                  hover:text-oc-gold-200
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-oc-gold-300
                "
              >
                <X
                  className="size-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}