import { useState } from "react";
import { Navbar } from "./pages/NavBar";
import { Hero } from "./pages/Hero";
import { About } from "./pages/aboutme";
import { Stack } from "./pages/Stack";
import { Impact } from "./pages/Impact";
import { Journey } from "./pages/journey";
import { Education } from "./pages/Education";
import { Contact } from "./pages/Contact";
import MouseFollower from "./assets/layout/mouse";
import { Footer } from "./assets/layout/Footer";

function App() {
  // const [count, setCount] = useState(0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // This "forces" the smoothness
  });
  return (
    <div className="bg-background text-on-surface">
      <Navbar />
      <MouseFollower />
      <main className="pt-20">
        <Hero />
        <About />
        <Stack />
        <Impact />
        <Journey />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
