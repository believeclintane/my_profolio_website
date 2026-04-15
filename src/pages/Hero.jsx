import Button from "../components/Button";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-8 md:px-24 overflow-hidden bg-background-dark border-b border-primary/10"
      id="hero"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 hero1"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
      </div>
      <div className="z-10 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center">
        {/* <!-- Left Column: Content --> */}
        <div className="w-full md:w-3/5 py-12">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-background-dark border border-primary/20 rounded-sm mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
            <span className="font-display text-[10px] tracking-[0.3em] uppercase font-bold text-primary">
              System Status: Active // Cloud Architect
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[100px] lg:text-[120px] font-black tracking-tighter text-white mb-8 leading-[0.9] md:leading-[0.85] uppercase">
            {/* 'inline' on small, 'block' on large (lg) */}
            <span className="inline lg:block">Digital</span>{" "}
            <span className="inline lg:block text-transparent customtext">
              Solutions
            </span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed border-l-2 border-primary/30 pl-6">
            Architecting{" "}
            <span className="text-white font-semibold">
              scalable cloud ecosystems{" "}
            </span>
            and high-concurrency APIs. 4+ years of engineering the intersection
            between robust <span className="text-primary/80">Laravel</span>{" "}
            backends and reactive <span className="text-primary/80">React</span>{" "}
            interfaces.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button
              variant="primary"
              as="a"
              href="https://github.com/believeclintane"
              className="flex items-center gap-3"
            >
              Personal Work
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Button>
            <Button
              as="a"
              variant="secondary"
              href="/Okharuclinton_Cv.pdf"
              target="_blank"
              rel="noopener noreferrer" // Security best practice for opening new tabs
              className="tracking-widest flex items-center gap-3"
            >
              <span className="w-10 h-[1px] bg-primary/50 group-hover:w-16 transition-all"></span>
              Download CV
            </Button>
          </div>
        </div>
        {/* <!-- Right Column: Visual Accent (Asymmetrical) --> */}
        <div className="hidden md:flex w-2/5 justify-end relative">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 border border-primary/20"></div>
            <div className="absolute -inset-8 border border-primary/10"></div>
            <div className="bg-surface-container-low p-8 border border-primary/30">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-primary/50"></div>
              </div>
              <div className="font-mono text-[10px] space-y-2 text-primary/70">
                <p>&gt; initializing_vault_sequence...</p>
                <p>&gt; decrypting_architectural_layers...</p>
                <p>&gt; security_check: PASSED</p>
                <p>&gt; connection: ENCRYPTED</p>
                <p className="text-white animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
