import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#0c0e11] w-full border-t border-[#46484b]/15">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-8 gap-4 max-w-screen-2xl mx-auto">
        <div className="font-['Inter'] text-xs tracking-widest uppercase text-slate-500">
          © 2026{" "}
          <span className="text-[#3fff8b] font-bold">CLINTON OKHARU</span> //
          SECURE LAYER
        </div>
        <div className="flex gap-8 font-['Inter'] text-lg tracking-widest uppercase">
          <a
            className="text-slate-500 hover:text-[#367c51] transition-colors opacity-80 hover:opacity-100"
            href="https://linkedin.com/in/clinton-okharu"
          >
            <CiLinkedin />
          </a>
          <a
            className="text-slate-500 hover:text-[#367c51] transition-colors opacity-80 hover:opacity-100"
            href="https://github.com/believeclintane"
          >
            <FaGithub />
          </a>
          <a
            className="text-slate-500 hover:text-[#367c51] transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
