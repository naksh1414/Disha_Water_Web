type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const Link = ({ to, children, className }: LinkProps) => (
  <a href={to} className={`cursor-pointer ${className}`}>
    {children}
  </a>
);

export default Link;