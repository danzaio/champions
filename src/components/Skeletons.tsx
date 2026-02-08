export const ChampionCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-zinc-900 rounded-2xl aspect-[2/3] border border-white/5 relative overflow-hidden">
      {/* Top badges area */}
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="w-16 h-6 bg-white/10 rounded-lg" />
      </div>
      {/* Bottom content area */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <div className="h-2 w-8 bg-white/10 rounded mb-2" />
        <div className="h-6 w-32 bg-white/10 rounded" />
      </div>
    </div>
  );
};
