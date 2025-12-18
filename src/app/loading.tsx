export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin"></div>
        <p className="text-sm font-medium tracking-widest uppercase text-neutral-900 animate-pulse">Loading Anjum Furnitures...</p>
      </div>
    </div>
  );
}
