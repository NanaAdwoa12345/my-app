import React from "react";

/**
 * Creative Portfolio – React + Tailwind
 * Replace the `img` values below with your real image paths/URLs.
 * Fonts: add this to your index.html <head>:
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Rubik:wght@800;900&display=swap" rel="stylesheet">
 */

const IMAGES = {
  heroTop: "/images/hero-door.jpg",
  heroBottom: "/images/hero-mirror.jpg",
  aboutLeft: "/images/about-red-drink.jpg",
  aboutRight: "/images/about-red-dress.jpg",
};

const FLYERS = [
  {
    img: "/images/flyer-asseye.png",
    alt: "Aseye Adzo Mbeele ASSOW Organising Secretary campaign poster",
    caption:
      "A campaign poster designed for a University of Ghana Association of Students of Social Work (ASSOW) executive candidate.",
  },
  {
    img: "/images/flyer-lux-lobe.png",
    alt: "Lux & Lobe piercing studio promotional flyer",
    caption:
      "A full promotional design suite created in Ghana for a campus-based piercing studio (Kwapong Hall, Legon Campus).",
  },
  {
    img: "/images/flyer-pierced.png",
    alt: "Pierced by Kay price list poster",
    caption:
      "This set includes an Instagram-style brand poster, a service price list, and a local promotional flyer.",
  },
];

const ATTRIBUTES = [
  "Highly Organized",
  "Proactive Problem Solver",
  "Fast Feedback Implementation",
  "Deadline-Driven",
];

function Photo({ src, alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`bg-fuchsia-200 object-cover ${className}`}
      onError={(e) => (e.currentTarget.style.visibility = "hidden")}
    />
  );
}

export default function CreativePortfolio() {
  return (
    <main className="min-h-screen bg-neutral-100 font-['Inter',sans-serif] text-black">
      <div className="mx-auto max-w-5xl bg-[#efd3e6]">
        {/* ---------- HERO ---------- */}
        <header className="relative overflow-hidden border-b-2 border-fuchsia-700 bg-[#e6b0d9] px-5 pb-10 pt-8 sm:h-[330px] sm:px-0 sm:py-0">
          {/* circular photos */}
          <div className="relative mx-auto h-[260px] w-[260px] sm:absolute sm:left-0 sm:top-0 sm:mx-0 sm:h-full sm:w-[300px]">
            <Photo
              src={IMAGES.heroTop}
              alt="Portrait by a wooden door"
              className="absolute left-0 top-0 h-[190px] w-[190px] rounded-br-full sm:h-[220px] sm:w-[220px]"
            />
            <Photo
              src={IMAGES.heroBottom}
              alt="Mirror selfie"
              className="absolute bottom-0 left-12 h-[160px] w-[160px] rounded-full border-4 border-[#e6b0d9] sm:bottom-[-10px] sm:left-[75px] sm:h-[200px] sm:w-[200px]"
            />
          </div>

          {/* name pill */}
          <div className="mx-auto mt-6 w-fit rounded-2xl border border-fuchsia-900/50 bg-[#d9a0cf] px-5 py-3 text-center shadow-md sm:absolute sm:left-[300px] sm:top-[100px] sm:mt-0">
            <p className="text-sm font-bold uppercase leading-tight tracking-wide text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,.25)]">
              Wilhelmina Nana Adwoa
              <br />
              Bronya Antwi
            </p>
          </div>

          {/* title card */}
          <div className="mx-auto mt-4 w-fit rounded-3xl bg-[#f0d2e8] px-8 py-6 sm:absolute sm:left-[250px] sm:top-[190px] sm:mt-0 sm:w-[420px] sm:px-12 sm:py-8">
            <h1 className="font-['Rubik',sans-serif] text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
              Creative
              <br />
              Portfolio
            </h1>
          </div>
        </header>

        {/* ---------- ABOUT ---------- */}
        <section className="border-2 border-fuchsia-700 bg-[#f6e0f2] px-5 pb-10 pt-8 sm:px-8">
          <div className="grid items-start gap-6 md:grid-cols-[200px_1fr_300px]">
            <Photo
              src={IMAGES.aboutLeft}
              alt="Wilhelmina holding a red drink"
              className="mx-auto h-56 w-48 self-center rounded-sm md:h-52 md:w-full"
            />

            <div className="md:pt-4">
              <h2 className="mb-4 text-center text-lg font-extrabold underline">About</h2>
              <p className="text-sm font-semibold leading-snug">
                I'm a Computer Science undergraduate at the University of Ghana with a passion for
                visual storytelling and brand design — I genuinely love designing. I've been creating
                content for a while, with a strong eye for trend-driven, aesthetic visuals — though I
                took a step back from active content creation recently. Due to losing access to my
                previous Canva account, this portfolio features a select few recent designs, with more
                to come as I rebuild my archive. I combine AI-assisted content tools with hands-on
                design software to create graphics, promotional material, and social media content
                that looks polished and on-brand.
              </p>

              <div className="mt-6 text-center">
                <h3 className="text-xs font-bold">Professional Attributes</h3>
                <ul className="mt-1 flex flex-wrap justify-center gap-x-2 text-[10px] text-neutral-700">
                  {ATTRIBUTES.map((a, i) => (
                    <li key={a}>
                      {a}
                      {i < ATTRIBUTES.length - 1 && <span aria-hidden="true"> •</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Photo
              src={IMAGES.aboutRight}
              alt="Wilhelmina in a red dress"
              className="mx-auto h-80 w-60 rounded-sm md:-mt-8 md:h-[360px] md:w-full"
            />
          </div>

          <h2 className="mt-10 text-center text-xl font-medium">MY RECENT FLYERS</h2>
        </section>

        {/* ---------- FLYERS ---------- */}
        <section className="px-5 py-8 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {FLYERS.map((f) => (
              <figure key={f.img} className="flex flex-col items-center">
                <Photo
                  src={f.img}
                  alt={f.alt}
                  className="h-80 w-56 object-cover shadow-sm md:h-[340px] md:w-full md:max-w-[240px]"
                />
                <figcaption className="mt-3 max-w-[220px] text-[10px] leading-snug text-neutral-600">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <footer className="px-5 pb-20 pt-12 text-center">
          <p className="mx-auto max-w-md text-xl font-bold leading-snug">
            Let's create something great together.
            <br />
            <a href="tel:0537414435" className="hover:underline focus-visible:underline">
              0537414435
            </a>
            <span aria-hidden="true"> | </span>
            <a href="mailto:antwiwilhelmina@gmail.com" className="hover:underline focus-visible:underline">
              antwiwilhelmina@gmail.com
            </a>
            <span aria-hidden="true"> | </span>
            <br />
            Legon, Accra, Ghana
          </p>
        </footer>
      </div>
    </main>
  );
}
