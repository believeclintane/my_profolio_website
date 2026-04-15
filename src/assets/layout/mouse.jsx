import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHidden, setIsHidden] = useState(true); // Default to true (hidden until moved)

  useEffect(() => {
    const updatePosition = (x, y, target) => {
      setPosition({ x, y });

      const isOverInteractive =
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          window.getComputedStyle(target).cursor === "pointer");

      setIsHidden(!!isOverInteractive);
    };

    const handleMouseMove = (e) => {
      // If it was hidden because it left the screen, show it again
      setIsHidden(false);
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseLeave = () => {
      setIsHidden(true); // Hide when cursor leaves the browser window
    };

    const handleMouseEnter = () => {
      setIsHidden(false); // Show when cursor enters the browser window
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY, touch.target);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className={` hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ${
        isHidden ? "opacity-0 scale-0" : "opacity-100 scale-100"
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
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)`,
        transition:
          "transform 0.1s ease-out, opacity 0.3s ease, scale 0.3s ease",
      }}
    >
      <div className="absolute inset-[-10px] border border-green-500/30 rounded-full animate-ping opacity-20" />
    </div>
  );
};

export default MouseFollower;
