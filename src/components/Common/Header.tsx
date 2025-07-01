import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?:string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <h1 className={`mb-6 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 ${className}`}>
      {children}
    </h1>
  );
};

export default Header;

