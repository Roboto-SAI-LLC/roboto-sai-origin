export function PhotoFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-xl bg-surface shadow-paper">
        <img
          src={src}
          alt={alt}
          className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
