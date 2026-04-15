export const About = () => {
  return (
    <section
      className="py-24 px-8 md:px-24 bg-surface-container-low"
      id="about"
    >
      <div className="max-w-screen-2xl mx-auto flex   flex-col-reverse   md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div className="aspect-square bg-surface-container rounded-lg relative border border-outline-variant/10">
            {/* BADGE ON THE BORDER */}
            <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-lg border bg-primary border-primary/50 shadow-[0_0_15px_rgba(0,230,118,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black "></span>
              </span>
              <span className="font-headline text-[10px] tracking-[0.2em] text-black uppercase font-bold">
                Available for Work
              </span>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover grayscale contrast-125 opacity-70 transition-transform duration-700 hover:scale-110"
                alt="Technical setup"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC9vFDWmh_qsiqOZYyGfHueQcBut1aDeFZxvAQ5HQc0qRS00zR4R_mw40-NlmZw-TFyWWRdiR6foZAlJXkFvVoQQrBkwNpvVSPbqcgZ2U-sQoCbqcACZdousWNF7dZ5zX4Z4jDBBuSDoV7MtQQSsL5Ds5E3J9Qmwf9BKD5c_JQjpTHTuy9yoEn9nVMqxRmkh6jKveHeekGy9Quasu3IeoifKNqh6mVNWH-g_FMDYoqmaoVRwIOoQpbpPnJhYSnsSnwRN3-XiyiBSc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Philosophy Box stays at the bottom right */}
          <div className="absolute -bottom-6 -right-6 glass-panel p-6 border border-outline-variant/20 rounded-lg max-w-xs shadow-xl z-20">
            <p className="font-headline text-primary font-bold text-xs uppercase tracking-widest mb-2">
              Key Philosophy
            </p>
            <p className="text-on-surface italic font-light leading-snug">
              "I don’t just write code; I refactor legacy systems into modern,
              testable powerhouses."
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight uppercase text-on-surface">
              The Vibe
            </h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Laravel & React.js Specialist focused on building the "engines" and
            "interfaces" of modern web apps. I bridge the gap between robust
            software engineering and high-level infrastructure to deliver fast,
            secure, and testable end-to-end solutions.
          </p>
          <div className="p-6 bg-surface-container rounded-lg border-l-4 border-tertiary">
            <h3 className="font-headline text-tertiary font-bold text-sm uppercase tracking-widest mb-3">
              Current Pursuit
            </h3>
            <p className="text-on-surface">
              Recently completed an MSc in Cyber Security to bridge the gap
              between robust development and airtight digital safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
