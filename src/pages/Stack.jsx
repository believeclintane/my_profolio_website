const LF = [
  "PHP 7/8",
  " Laravel",
  "JavaScript (ES6+)",
  "React Native",
  "Python",
  " React.js",
  "WordPress",
];
const Frontend = [
  "PHPUnit",
  "Bootstrap",
  "tailwind css",
  "feature tests",
  "jQuery",
  " responsive UI",
];
const Databases = ["MySQL", "PostgreSQL", "AWS", "Redis", "Linux"];
export const Stack = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface" id="stack">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-headline text-4xl font-bold tracking-tight uppercase text-on-surface mb-16 text-center">
          Core Infrastructure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="group md:col-span-2 p-8 bg-surface-container rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-12">
              <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">
                Languages & Frameworks
              </h3>
              <span className="material-symbols-outlined text-white text-4xl styleStack group-hover:text-primary ">
                terminal
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {LF.map((i, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-surface-container-low text-xs font-mono border border-outline-variant/20 group-hover:text-primary"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          {/* 1. Added "group" here */}
          <div className="group p-8 bg-surface-container rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="mb-8">
              {/* 2. Added "group-hover:text-white" here */}
              <span className="material-symbols-outlined  text-4xl mb-4 transition-colors group-hover:text-primary">
                database
              </span>

              {/* You can even change the heading color on parent hover */}
              <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">
                Data & Ops
              </h3>
            </div>

            <ul className="space-y-2 text-on-surface-variant font-mono text-xs">
              {Databases.map((i, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {/* Even the bullets can react to the main div hover! */}
                  <span className="w-1.5 h-1.5 bg-tertiary  bg-primary transition-colors"></span>
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className=" group p-8 bg-surface-container rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all ">
            <div className="mb-8">
              <span className="material-symbols-outlined text-on-surface-variant text-4xl mb-4 transition-color  group-hover:text-primary">
                layers
              </span>
              <h3 className="font-headline text-xl font-bold group-hover:text-primary">
                Frontend & Testing
              </h3>
            </div>
            <ul className="space-y-2 text-on-surface-variant font-mono text-xs">
              {Frontend.map((i, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-tertiary  bg-primary transition-colors"></span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 p-8 bg-surface-container-high rounded-lg border border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-8 hover:border-primary/30 transition-all ">
            <div>
              <h3 className="font-headline text-xl font-bold mb-2 uppercase tracking-wide">
                DevOps &amp; API Management
              </h3>
              <p className="text-on-surface-variant text-sm">
                Automating delivery pipelines and documenting robust API
                contracts.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary mb-1">
                  sync_alt
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  CI/CD Pipelines
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary mb-1">
                  api
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  OpenAPI / Swagger
                </span>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};
