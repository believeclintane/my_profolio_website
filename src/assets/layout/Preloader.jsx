import React, { useState, useEffect } from "react";

export const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Optional: slight delay before switching to main site
          setTimeout(() => onFinished?.(), 500);
          return 100;
        }
        // Realistic loading: fast at first, slows down at the end
        const increment = prev > 80 ? 0.5 : 2;
        return prev + increment;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-[100] bg-background-dark text-on-surface font-body overflow-hidden flex items-center justify-center">
      {/* ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #aaabaf 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-container-low/20 to-surface-container-low"></div>
      </div>

      {/* SCANLINE EFFECT */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 z-50 pointer-events-none animate-pulse"></div>

      <main className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
        {/* TOP METADATA */}
        <div className="w-full flex justify-between items-end mb-16 md:mb-24 opacity-60">
          <div className="flex flex-col">
            <span className="font-headline text-[10px] tracking-[0.2em] text-primary">
              STATUS
            </span>
            <span className="font-headline text-xs uppercase text-on-surface">
              Vault_Lock_Active
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-headline text-[10px] tracking-[0.2em] text-primary">
              VERSION
            </span>
            <span className="font-headline text-xs uppercase text-on-surface">
              V1.0.4_INIT
            </span>
          </div>
        </div>

        {/* CENTER IDENTITY */}
        <div className="relative group text-center">
          <div className="absolute -inset-8 bg-primary/10 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-on-surface relative z-10">
            &lt;<span className="text-primary">Okharu_clinton</span> /&gt;
          </h1>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00e676]"></span>
            <p className="font-headline text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary font-medium">
              {progress < 100 ? "Syncing Neural Link" : "Access Granted"}
            </p>
          </div>
        </div>

        {/* LOADING BAR */}
        <div className="w-full max-w-sm mt-16">
          <div className="flex justify-between items-center mb-3">
            <span className="font-headline text-[9px] tracking-widest text-on-surface-variant">
              MEM_ALLOCATION
            </span>
            <span className="font-headline text-[9px] tracking-widest text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-[1px] w-full bg-surface-container relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_#00e676] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </main>

      {/* DECORATIVE CORNER LOGS (Bottom Left) */}
      <aside className="fixed bottom-10 left-10 z-20 hidden lg:block">
        <div className="bg-surface-container/30 backdrop-blur-md p-5 rounded-lg border border-on-surface-variant/10 w-64">
          <div className="flex gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-primary opacity-30"></div>
            <div className="w-2 h-2 rounded-full bg-primary opacity-10"></div>
          </div>
          <div className="space-y-1 font-mono text-[9px] text-on-surface-variant/80 uppercase tracking-tighter">
            <p>&gt; Booting secure_shell...</p>
            <p>&gt; Establishing handshake...</p>
            <p>
              &gt; <span className="text-primary">Success:</span> encrypted_node
            </p>
            <p className="animate-pulse">_</p>
          </div>
        </div>
      </aside>

      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border border-primary/5 rounded-full pointer-events-none"></div>
    </div>
  );
};
