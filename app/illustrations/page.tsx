export default function Illustrations() {
  const placeholders = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    aspect: i % 3 === 0 ? "aspect-square" : i % 5 === 0 ? "aspect-[4/5]" : "aspect-[3/4]",
  }));

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#4a4a4a] mb-4">
          Creative Work
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.9] text-[#1a1a1a] max-w-2xl">
          Illustrations & Artwork
        </h1>
        <p className="text-[#4a4a4a] mt-6 max-w-md">
          Design strategy is my job. Drawing is how I think. These are the
          pieces that live outside the brief.
        </p>
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {placeholders.map((item) => (
          <div
            key={item.id}
            className={`break-inside-avoid rounded-xl overflow-hidden bg-[#e0ddd8] ${item.aspect} w-full`}
          >
            <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#e8e5e0] to-[#c8c4be] hover:from-[#E84E3A]/10 hover:to-[#e0ddd8] transition-all duration-500" />
          </div>
        ))}
      </div>

      <p className="text-center text-[#4a4a4a] text-sm mt-16">
        More work coming soon — follow along on{" "}
        <a
          href="https://instagram.com"
          className="text-[#E84E3A] underline hover:no-underline"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
