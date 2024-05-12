"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Docs = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Docs works!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default Docs;
