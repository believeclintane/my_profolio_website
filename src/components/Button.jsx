import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  as: Component = "button", // 1. Default to "button"
  ...props
}) => {
  const variants = {
    primary: `
          bg-primary text-background-dark font-display font-black 
          px-10 py-5 rounded-sm hover:bg-white hover:-translate-y-1 
          hover:shadow-[0_0_20px_rgba(0,230,118,0.6)]
        `,
    secondary: `
          group text-white font-display font-bold text-xs
          hover:text-primary
        `,
    outline: `
          border-2 border-primary text-primary hover:bg-primary 
          hover:text-background-dark px-5 py-2 rounded-md
        `,
  };

  return (
    /* 2. Changed <button> to <Component> */
    <Component
      {...props}
      onClick={onClick}
      className={`
        ${variants[variant]}
        px-5 py-2 
        font-headline font-bold text-xs 
        uppercase tracking-widest 
        rounded-md 
        transition-all duration-200
        hover:scale-95 active:scale-90
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default Button;
