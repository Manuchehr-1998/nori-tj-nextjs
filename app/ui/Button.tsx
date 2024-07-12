// ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`py-3 px-5 m-2 bg-yellow-500 rounded-2xl text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
