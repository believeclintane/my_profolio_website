import { FaMagic } from "react-icons/fa";
import Button from "../components/Button";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const navLists = [
  {
    href: "#about",
    label: "about me",
  },
  {
    href: "#stack",
    label: "Stack",
  },
  {
    href: "#impact",
    label: "Impact",
  },
  {
    href: "#journey",
    label: "Journey",
  },
  {
    href: "#education",
    label: "Education",
  },
];

export const Navbar = () => {
  const [isMobileopen, setIsMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c0e11]/70 backdrop-blur-xl">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-sm md:text-2xl font-black tracking-tighter text-primary font-display">
          &lt;CLINTON_OKHARU /&gt;
        </div>

        {/* start- pc mode  navlinks */}
        <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight text-sm uppercase font-bold">
          {navLists.map((list, idk) => (
            <a
              key={idk}
              className="text-slate-400 font-medium /* The Hover Colors */
            hover:text-primary 
            px-4
            /* The Left and Right Borders */
            border-l-2 border-r-2 border-transparent 
            hover:border-primary
            
            /* Optional: subtle background glow on hover */
            hover:bg-primary/5"
              href={list.href}
            >
              {list.label}
            </a>
          ))}
        </div>
        {/* Cta button */}
        <div className="flex justify-between items-center md:gap-0  sm:gap-4">
          <Button
            variant="primary"
            as="a"
            href="#contact"
            className="!px-4 !py-2 text-[10px] md:text-sm md:!px-10 md:!py-5"
          >
            {" "}
            Secure Connection
          </Button>

          {/* end - pc mode  navlinks */}

          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="text-white cursor-pointer md:hidden p-2"
          >
            {isMobileopen ? <IoMdClose /> : <CiMenuFries />}
          </button>
        </div>
        {/* --- ----  */}
      </nav>
      {/* start- mobile mode  navlinks */}
      {isMobileopen && (
        <div className="md:hidden mx-auto px-6 py-6 flex flex-col items-center gap-8 font-display tracking-tight uppercase font-bold border-b border-primary/20 bg-surface/90 backdrop-blur-md">
          {navLists.map((list, idk) => (
            <a
              key={idk}
              className="
            relative px-4 py-1
            text-on-surface-variant font-medium uppercase tracking-widest
            transition-all duration-300
            
            /* The Hover Colors */
            hover:text-primary 
            
            /* The Left and Right Borders */
            border-l-2 border-r-2 border-transparent 
            hover:border-primary
            
            /* Optional: subtle background glow on hover */
            hover:bg-primary/5
          "
              href={list.href}
            >
              {list.label}
            </a>
          ))}
        </div>
      )}
      {/* end- mobile mode  navlinks */}
    </header>
  );
};
