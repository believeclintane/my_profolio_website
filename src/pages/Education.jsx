const edu = [
  {
    deg: "Post-graduate",
    course: "MSc Cyber Security & Human Factors",
    uni: "Bournemouth University",
  },
  {
    deg: "Undergraduate",
    course: "BSc Computer Science",
    uni: "University of Benin",
  },
  {
    deg: "Diploma",
    course: "Web development & Programming ",
    uni: "HIIT",
  },
  {
    deg: "Certification",
    course: "Certified Full Stack Web Development",
    uni: "IToline Learning",
  },
];
export const Education = () => {
  return (
    <section
      className="py-24 px-8 md:px-24 bg-surface-container-low"
      id="education"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {edu.map((i, idx) => (
            <div
              key={idx}
              className="group p-8 bg-surface-container border border-outline-variant/10 rounded-lg hover:border-primary"
            >
              <h4 className="font-headline text-tertiary font-bold text-xs uppercase tracking-widest mb-4">
                {i.deg}
              </h4>
              <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary">
                {i.course}
              </h3>
              <p className="text-on-surface-variant text-sm">{i.uni}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
