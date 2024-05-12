"use client";

import Header from "@/app/components/header";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LinqDrawer from "@/app/components/drawer";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const ShareItemsDetails = () => {
    return (
      <div className="p-4 pb-0">
        <section className="my-4 w-full flex items-center justify-between">
          <Link href="/">
            <Image
              src={"/facebook.png"}
              alt="Facebook logo"
              width={40}
              height={40}
            />
          </Link>
          <Link href="/">
            <Image src={"/x.png"} alt="Twitter logo" width={35} height={35} />
          </Link>
          <Link href="/">
            <Image
              src={"/instagram.png"}
              alt="Instagram logo"
              width={45}
              height={45}
            />
          </Link>

          <Link href="/">
            <Image
              src={"/telegram.png"}
              alt="Telegram logo"
              width={50}
              height={50}
            />
          </Link>

          <Link href="/">
            <Image
              src={"/whatsapp.png"}
              alt="Twitter logo"
              width={50}
              height={50}
            />
          </Link>
        </section>
      </div>
    );
  };
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <section className="w-full flex items-center justify-around flex-col">
      <Header />
      <br></br>
      <section className="w-full max-w-[600px]  flex flex-col items-center  justify-center my-4 p-3">
        <Textarea
          placeholder="Text content here"
          className="w-full outline-none border"
          rows={5}
        ></Textarea>

        <br />

        <Button className="w-full p-8" onClick={handleButtonClick}>
          Generate links
        </Button>
        <LinqDrawer
          title="Generate link"
          description="Copy generated links for various social platforms"
          isOpen={openDrawer}
          setIsOpen={setOpenDrawer}
        >
          <ShareItemsDetails />
        </LinqDrawer>
      </section>
    </section>
  );
}
