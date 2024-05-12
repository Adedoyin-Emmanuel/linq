"use client";

import Header from "@/app/components/header";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LinqDrawer from "@/app/components/drawer";

import { useState } from "react";
import Details from "./components/details";

export default function Home() {
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
          <Details />
        </LinqDrawer>
      </section>
    </section>
  );
}
