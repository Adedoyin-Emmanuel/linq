import Header from "@/app/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Docs() {
  return (
    <section className="w-full flex items-center justify-around flex-col">
      <Header />
      <br></br>
      <section className="w-full max-w-[600px]  flex flex-col items-center  justify-center my-4 p-3">
        <h2 className="font-extrabold text-[20px] w-full text-start my-2">
          About Me | Docs
        </h2>
        <p className="text-justify">
          Hi there, I'm Adedoyin Emmanuel Adeniyi, I'm from Lagos Nigeria 🇳🇬.
          I'm a Fullstack Engineer with over {new Date().getFullYear() - 2020}{" "}
          years of experience. I love building open-source projects and sharing
          stuff I learn online through my{" "}
          <Link href={"https://adedoyin.hashnode.dev"} className="underline">
            Blog{" "}
          </Link>{" "}
          or{" "}
          <Link href={"https://x.com/Emmysoft_Tm"} className="underline">
            Twitter.{" "}
          </Link>
          I built <strong>Linq</strong> to help users construct social sharable
          links from their text. I had this issue while building the{" "}
          <Link href={"https://clipsave.space/support"} className="underline">
            support{" "}
          </Link>
          page for{" "}
          <Link href={"https://clipsave.space/app"} className="underline">
            Clipsave.{" "}
          </Link>
          If you find this project useful, you can give it a star on{" "}
          <Link
            href={"https://github.com/adedoyin-emmanuel/linq"}
            className="underline"
          >
            Github{" "}
          </Link>
          . Thank you for using my product 🙌
        </p>

        <br />
        <Link href={"https://x.com/Emmysoft_Tm"} className="w-full">
          <Button className="w-full p-6 my-3">Connect with me</Button>
        </Link>
      </section>
    </section>
  );
}
