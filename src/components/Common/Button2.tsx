type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center";
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white",
  };
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;