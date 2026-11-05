import {
  Clapperboard,
  Drama,
  FileVideo,
  Film,
  MonitorPlay,
  Shapes,
  Smartphone,
  Tv,
} from "lucide-react";
import { FilmFormatTile } from "@/components/landing/film-format-tile";

const filmFormats = [
  { number: "01", title: "FEATURE FILMS", icon: Clapperboard },
  { number: "02", title: "SHORT FILMS", icon: Film },
  { number: "03", title: "DOCUMENTARIES", icon: FileVideo },
  { number: "04", title: "OTT & WEB SERIES", icon: MonitorPlay },
  { number: "05", title: "TELEVISION", icon: Tv },
  { number: "06", title: "MICRODRAMA", icon: Smartphone },
  { number: "07", title: "ANIMATION", icon: Shapes },
  { number: "08", title: "THEATRE", icon: Drama },
];

export function FilmFormats() {
  return (
    <section
      aria-labelledby="film-formats-title"
      className="bg-[#16191E] text-white"
      id="film-formats"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28 2xl:px-[3.25rem]">
        <p className="text-xs font-medium uppercase tracking-[0.19em] text-[#FF6572] sm:text-sm">
          Stories in every format
        </p>

        <h2
          className="mt-5 font-hero font-semibold uppercase leading-[0.92] tracking-[-0.02em]"
          id="film-formats-title"
        >
          <span className="block text-[clamp(1.8rem,4.5vw,3.5rem)]">
            One industry.
          </span>
          <span className="block text-[clamp(3rem,6vw,5.125rem)] text-[#FF6572]">
            Every format.
          </span>
          <span className="block text-[clamp(1.7rem,4vw,3.5rem)]">
            Endless possibilities.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
          From theatrical features to emerging digital storytelling, MarathiNEX
          connects professionals working across the entertainment landscape.
        </p>

        <ul
          aria-label="Entertainment formats connected by MarathiNEX FILM"
          className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4"
        >
          {filmFormats.map((format) => (
            <FilmFormatTile key={format.number} {...format} />
          ))}
        </ul>
      </div>
    </section>
  );
}
