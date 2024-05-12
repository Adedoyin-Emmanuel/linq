import React from "react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`${className}`}>
      <h1>Header works!</h1>
    </div>
  );
};

export default Header;
