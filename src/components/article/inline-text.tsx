const TOKEN = /(\*\*[^*]+?\*\*|\*[^*]+?\*|\[\d+\])/g;

export function InlineText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((part) => part.length > 0);

  return (
    <>
      {parts.map((part, index) => {
        const cite = part.match(/^\[(\d+)\]$/);
        if (cite) {
          return (
            <sup key={index} className="font-serif text-xs font-medium text-primary">
              <a
                href={`#ref-${cite[1]}`}
                className="no-underline hover:underline"
                aria-label={`Reference ${cite[1]}`}
              >
                {cite[1]}
              </a>
            </sup>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
