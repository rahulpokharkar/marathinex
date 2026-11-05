import Image from "next/image";

type EventProgramCardProps = {
  number: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  illustration?: "sessions" | "meetings" | "showcase" | "desks";
};

function ProgramIllustration({
  variant,
}: {
  variant: NonNullable<EventProgramCardProps["illustration"]>;
}) {
  if (variant === "sessions") {
    return (
      <div
        aria-label="Illustrative graphic of an industry panel and audience"
        className="relative flex h-full items-end justify-center overflow-hidden bg-[#1B1D23]"
        role="img"
      >
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[#262A30]" />
        <div className="absolute inset-x-[16%] top-[13%] h-[3px] bg-[#DC1023]" />
        <div className="absolute left-1/2 top-[24%] h-[29%] w-[42%] -translate-x-1/2 border border-white/15 bg-[#16191E]" />
        <div className="absolute left-[32%] top-[32%] h-[2px] w-[36%] bg-white/30" />
        <div className="absolute left-[38%] top-[39%] h-[2px] w-[24%] bg-white/20" />
        <div className="relative z-10 mb-[12%] flex w-[72%] items-end justify-center gap-[5%] border-b border-[#DC1023]/80 pb-2">
          {[0, 1, 2, 3].map((person) => (
            <span
              aria-hidden="true"
              className="relative h-[clamp(2rem,4vw,3rem)] w-[15%] rounded-t-full border border-white/10 bg-[#45474E]"
              key={person}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[15%] bg-[#111216]"
          style={{
            clipPath:
              "polygon(0 100%, 0 58%, 8% 58%, 8% 36%, 16% 36%, 16% 62%, 24% 62%, 24% 30%, 33% 30%, 33% 56%, 42% 56%, 42% 22%, 50% 22%, 50% 54%, 60% 54%, 60% 31%, 68% 31%, 68% 60%, 78% 60%, 78% 35%, 87% 35%, 87% 56%, 94% 56%, 94% 40%, 100% 40%, 100% 100%)",
          }}
        />
      </div>
    );
  }

  if (variant === "meetings") {
    return (
      <div
        aria-label="Illustrative graphic of two professionals meeting across a table"
        className="relative flex h-full items-center justify-center overflow-hidden bg-[#22252B]"
        role="img"
      >
        <div className="absolute left-[12%] top-[18%] size-[18%] rounded-full border border-white/25 bg-[#3A3D44]" />
        <div className="absolute right-[12%] top-[18%] size-[18%] rounded-full border border-[#FF7A84]/50 bg-[#3A3D44]" />
        <div className="absolute left-[8%] top-[39%] h-[34%] w-[27%] rounded-t-[45%] border border-white/15 bg-[#30333A]" />
        <div className="absolute right-[8%] top-[39%] h-[34%] w-[27%] rounded-t-[45%] border border-[#FF7A84]/25 bg-[#30333A]" />
        <div className="absolute inset-x-[18%] bottom-[17%] h-[17%] border border-white/20 bg-[#16191E]" />
        <div className="absolute left-1/2 bottom-[34%] h-[2px] w-[24%] -translate-x-1/2 bg-[#FF7A84]" />
        <span className="absolute left-[38%] bottom-[22%] h-[8%] w-[10%] border border-white/20 bg-[#262A30]" />
        <span className="absolute right-[38%] bottom-[22%] h-[8%] w-[10%] border border-white/20 bg-[#262A30]" />
      </div>
    );
  }

  if (variant === "showcase") {
    return (
      <div
        aria-label="Illustrative graphic of a performance spotlight on a cinema stage"
        className="relative flex h-full items-center justify-center overflow-hidden bg-[#17191F]"
        role="img"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-[24%] top-0 h-[86%] bg-[#DC1023]/15"
          style={{ clipPath: "polygon(42% 0, 58% 0, 100% 100%, 0 100%)" }}
        />
        <div className="absolute top-[15%] size-[14%] rounded-full border border-[#FF7A84]/60 bg-[#FF7A84]/10" />
        <div className="absolute bottom-[18%] h-[38%] w-[32%] border-b-2 border-[#DC1023]">
          <div className="absolute bottom-0 left-[38%] h-[75%] w-[24%] rounded-t-full border border-white/20 bg-[#363940]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[18%] border-t border-white/10 bg-[#111216]" />
      </div>
    );
  }

  return (
    <div
      aria-label="Illustrative graphic of professional film-market meeting desks"
      className="relative flex h-full items-center justify-center overflow-hidden bg-[#202329]"
      role="img"
    >
      <div className="grid w-[78%] grid-cols-3 gap-[5%]">
        {[0, 1, 2, 3, 4, 5].map((desk) => (
          <div
            aria-hidden="true"
            className={`flex aspect-[1.25] items-center justify-center border border-white/15 bg-[#16191E] ${
              desk === 1 || desk === 4 ? "border-t-2 border-t-[#DC1023]" : ""
            }`}
            key={desk}
          >
            <span className="h-[34%] w-[34%] rounded-full border border-white/25" />
          </div>
        ))}
      </div>
      <span className="absolute inset-x-[11%] bottom-[14%] h-px bg-white/20" />
    </div>
  );
}

export function EventProgramCard({
  number,
  title,
  description,
  image,
  illustration,
}: EventProgramCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-[#E5E5E5] bg-white">
      <div className="relative aspect-[8/5] overflow-hidden bg-[#1B1D23]">
        {image ? (
          <>
            <Image
              alt={image.alt}
              className="absolute inset-0 size-full object-cover"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={image.src}
            />
            <span className="absolute bottom-2 right-2 bg-[#111216]/75 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-white">
              Illustrative concept
            </span>
          </>
        ) : (
          <ProgramIllustration variant={illustration ?? "sessions"} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-medium tracking-[0.14em] text-[#DC1023]">
          {number}
        </span>
        <h3 className="mt-3 font-heading text-2xl font-semibold uppercase leading-[1.02] tracking-[0.02em] text-[#16191E]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#565F6C] sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </article>
  );
}
