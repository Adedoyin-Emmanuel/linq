import React from "react";
import { Github, Twitter, BadgeInfo } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`${className} w-full max-w-[600px] py-3`}>
      <div className="mx-auto flex items-center justify-between p-3">
        <h1 className="font-extrabold text-2xl">Linq</h1>

        <div className="flex gap-x-5">
          <Link href={"/docs"}>
            <BadgeInfo className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href={"https://github.com/adedoyin-emmanuel/linq"}>
            <Github className="w-5 h-5 cursor-pointer" />
          </Link>
          <Link href={"https://x.com/Emmysoft_Tm"}>
            <Twitter className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
