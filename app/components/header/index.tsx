import React from "react";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div
      className={`${className} w-full flex items-center md:justify-around justify-between my-4 p-3`}
    >
      <h1 className="font-extrabold text-[22px]">Linq</h1>
      <section className="flex gap-x-5">
        <Link href={"https://github.com/adedoyin-emmanuel/linq"}>
          <Github className="w-5 h-5 cursor-pointer" />
        </Link>
        <Link href={"https://x.com/Emmysoft_Tm"}>
          <Twitter className="w-5 h-5 cursor-pointer" />
        </Link>
      </section>
    </div>
  );
};

export default Header;
