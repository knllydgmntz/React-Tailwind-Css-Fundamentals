const Typography = () => {
  return (
    <>
      <div className="font-sans">Tailwind is awesome</div>
      <div className="font-serif">Tailwind is awesome</div>
      <div className="font-mono">Tailwind is awesome</div>

      {/* Font Size */}
      <div className="text-xs">Tailwind is awesome</div>
      <div className="text-sm">Tailwind is awesome</div>
      <div className="text-base">Tailwind is awesome</div>
      <div className="text-lg">Tailwind is awesome</div>
      <div className="text-xl">Tailwind is awesome</div>
      <div className="text-2xl">Tailwind is awesome</div>
      <div className="text-3xl">Tailwind is awesome</div>

      {/* Font Weight */}
      <div className="font-light">Tailwind is awesome</div>
      <div className="font-normal">Tailwind is awesome</div>
      <div className="font-medium">Tailwind is awesome</div>
      <div className="font-semibold">Tailwind is awesome</div>
      <div className="font-bold">Tailwind is awesome</div>

      {/* Letter Spacing */}
      <div className="tracking-tight">Tailwind is awesome</div>
      <div className="tracking-normal">Tailwind is awesome</div>
      <div className="tracking-wide">Tailwind is awesome</div>

      {/* Text Alignment */}
      <div className="text-left">Tailwind is awesome</div>
      <div className="text-center">Tailwind is awesome</div>
      <div className="text-right">Tailwind is awesome</div>

      {/* Text Decoration */}
      <div className="underline decoration-4 decoration-blue-400">
        Tailwind is awesome
      </div>

      {/* Decoration Style */}
      <div className="underline decoration-double">Tailwind is awesome</div>
      <div className="underline decoration-dotted">Tailwind is awesome</div>
      <div className="underline decoration-dashed">Tailwind is awesome</div>
      <div className="underline decoration-wavy">Tailwind is awesome</div>

      {/* Decoration Offset */}
      <div className="underline decoration-4 decoration-blue-400 underline-offset-8">
        Tailwind is awesome
      </div>
      {/* Text Transform */}
      <p className="normal-case">Tailwind is awesome</p>
      <p className="uppercase">Tailwind is awesome</p>
      <p className="lowercase">Tailwind is awesome</p>
      <p className="capitalize">Tailwind is awesome</p>
    </>
  );
};

export default Typography;
