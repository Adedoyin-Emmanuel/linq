"use client";
import React from "react";

interface DrawerProps {
  className?: string;
}

const Drawer = ({ className }: DrawerProps) => {
  return <div className={`${className}`}></div>;
};

export default Drawer;
