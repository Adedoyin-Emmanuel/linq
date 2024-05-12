"use client";
import React from "react";
import Image from "next/image";

interface DetailsProps {
  className?: string;
  text?: string;
}

const Details = ({ className, text }: DetailsProps) => {
  return (
    <div className={`p-4 pb-0 ${className}`}>
      <section className="my-4 w-full flex items-center justify-between">
        <Image
          src={"/facebook.png"}
          alt="Facebook logo"
          width={40}
          height={40}
        />
        <Image src={"/x.png"} alt="Twitter logo" width={35} height={35} />
        <Image
          src={"/instagram.png"}
          alt="Instagram logo"
          width={45}
          height={45}
        />

        <Image
          src={"/telegram.png"}
          alt="Telegram logo"
          width={50}
          height={50}
        />

        <Image
          src={"/whatsapp.png"}
          alt="Twitter logo"
          width={50}
          height={50}
        />
      </section>
    </div>
  );
};

export default Details;
