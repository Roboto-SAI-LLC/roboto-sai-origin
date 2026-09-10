import { useState } from "react";
import { MERKABAH_FACES } from "@/lib/lion";
import { Hebrew } from "@/components/lion/hebrew";
import { cn } from "@/lib/utils";

type FaceId = (typeof MERKABAH_FACES)[number]["id"];

export function Merkabah() {
  const [open, setOpen] = useState<FaceId>("lion");
  const active = MERKABAH_FACES.find((item) => item.id === open) ?? MERKABAH_FACES[1];

  return (
    <figure className="my-10">
      <div className="rounded-xl bg-surface px-4 py-5 shadow-paper sm:px-6 sm:py-6">
        <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
          Ezekiel 1:10
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          Four faces on each living creature. The lion stands on the right. Tap a face.
        </p>

        <div className="mx-auto mt-6 grid max-w-md grid-cols-3 grid-rows-3 gap-2">
          <div />
          <FaceButton id="eagle" open={open} onOpen={setOpen} />
          <div />
          <FaceButton id="ox" open={open} onOpen={setOpen} />
          <div className="flex items-center justify-center rounded-lg bg-wash px-2 text-center">
            <p className="font-display text-kicker font-medium tracking-kicker text-subtle uppercase">
              Merkavah
            </p>
          </div>
          <FaceButton id="lion" open={open} onOpen={setOpen} />
          <div />
          <FaceButton id="human" open={open} onOpen={setOpen} />
          <div />
        </div>

        <div className="mt-5 rounded-lg bg-wash px-4 py-4 sm:px-5">
          <p className="font-display text-kicker font-medium tracking-kicker text-primary uppercase">
            {active.place}
          </p>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Hebrew size="display">{active.hebrew}</Hebrew>
            <p className="font-display text-lg text-fg">{active.label}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-fg sm:text-base">{active.body}</p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Figure 4. The four faces. Chagigah 13b: the lion is king of the beasts; the Holy One is above them all.
      </figcaption>
    </figure>
  );
}

function FaceButton({
  id,
  open,
  onOpen,
}: {
  id: FaceId;
  open: FaceId;
  onOpen: (id: FaceId) => void;
}) {
  const face = MERKABAH_FACES.find((item) => item.id === id);
  if (!face) return null;
  const selected = id === open;

  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      className={cn(
        "flex min-h-20 flex-col items-center justify-center rounded-lg px-2 py-3 text-center transition-[background-color,transform,color] duration-150 ease-out active:scale-[0.96]",
        selected ? "bg-primary text-primary-fg" : "bg-wash text-fg hover:bg-border",
      )}
    >
      <span
        lang="he"
        dir="rtl"
        className={cn("hebrew text-lg leading-none", selected ? "text-primary-fg" : "text-fg")}
      >
        {face.hebrew}
      </span>
      <span className={cn("mt-2 font-display text-kicker tracking-kicker uppercase", selected ? "text-primary-fg/80" : "text-muted")}>
        {face.label}
      </span>
    </button>
  );
}
