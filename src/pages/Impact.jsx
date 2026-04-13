const impactInfo = [
  {
    txt: "API Latency (From 420ms)",
    value: "180ms",
  },
  {
    txt: "Daily Telemetry Events",
    value: " 150k+",
  },
  {
    txt: "Monthly Active Users",
    value: "50k+",
  },
  {
    txt: "Improved Response Times",
    value: "30%",
  },
];
export const Impact = () => {
  return (
    <section
      className="py-24 px-8 md:px-24 bg-surface-container-low overflow-hidden relative"
      id="impact"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <h2 className="font-headline text-6xl md:text-8xl font-black text-surface-bright tracking-tighter uppercase opacity-50 leading-none">
            Impact
          </h2>
          <p className="font-headline text-primary font-bold text-xl uppercase tracking-[0.2em] mb-4">
            Performance Metrics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {impactInfo.map((i, idx) => (
            <div className="p-10 bg-surface-container border-b-4 border-primary">
              <div
                key={idx}
                className="text-4xl font-headline font-black text-primary mb-2"
              >
                {i.value}
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                {i.txt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
