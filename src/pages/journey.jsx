export const Journey = () => {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface" id="journey">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl font-bold tracking-tight uppercase text-on-surface mb-16">
          Professional Journey
        </h2>
        <div className="space-y-12 relative border-l border-outline-variant/30 pl-8">
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-primary rounded-full"></div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-headline text-xl font-bold">
                Software Engineer | Solution4U
              </h3>
              <span className="text-primary font-mono text-xs uppercase">
                Remote
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Driving analytics and securing workflows with OAuth2/JWT.
              Architectural decision-making for high-security enterprise
              solutions.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-outline-variant rounded-full"></div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-headline text-xl font-bold">
                Software Engineer | Muzzlab
              </h3>
              <span className="text-on-surface-variant font-mono text-xs uppercase">
                Remote
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Building Dockerized environments and automating deployments. Focus
              on container orchestration and environment parity.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-outline-variant rounded-full"></div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-headline text-xl font-bold">
                Full Stack Developer | Tramigo
              </h3>
              <span className="text-on-surface-variant font-mono text-xs uppercase">
                Nigeria
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Reengineering legacy modules and API contracts. Modernizing
              monolithic systems into scalable microservices.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-4 h-4 bg-outline-variant rounded-full"></div>
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="font-headline text-xl font-bold">
                Freelance Developer
              </h3>
              <span className="text-on-surface-variant font-mono text-xs uppercase">
                Nigeria
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Mentoring in secure, testable backend principles. Scaling human
              capital through rigorous technical training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
