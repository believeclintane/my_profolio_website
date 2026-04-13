import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (x, y, target) => {
      setPosition({ x, y });

      const isOverInteractive =
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHidden(!!isOverInteractive);
    };

    const handleMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleTouchMove = (e) => {
      // Use the first touch point
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY, touch.target);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-300 ${
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
