import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false); // New state to track hover

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the element under the cursor is a button or link
      const target = e.target;
      const isOverInteractive =
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHidden(!!isOverInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block transition-opacity duration-300 ${
        isHidden ? "opacity-0 scale-50" : "opacity-100 scale-100"
      }`}
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "#22c55e",
        boxShadow: `
          inset 0 0 10px #ffffff,
          0 0 20px #22c55e,
          0 0 60px #166534
        `,
        backdropFilter: "brightness(1.5) saturate(1.5)",
        WebkitBackdropFilter: "brightness(1.5) saturate(1.5)",
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        // We keep the transform transition for smoothness
        transition:
          "transform 0.1s ease-out, opacity 0.3s ease, scale 0.3s ease",
      }}
    >
      <div className="absolute inset-[-10px] border border-green-500/30 rounded-full animate-ping opacity-20" />
    </div>
  );
};

export default MouseFollower;
