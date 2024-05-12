"use client";
import React from "react";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

interface DetailsProps {
  className?: string;
  text: string;
}

const Details = ({ className, text }: DetailsProps) => {
  const { toast } = useToast();

  const copyToClipboard = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      toast({
        title: "Link copied 🚀",
        description: "Link copied to clipboard!",
      });
    } catch (error) {
      toast({
        title: "Oh sugar 😞",
        description: `An error occured ${error}`,
      });
    }
  };
  const generateLink = (
    platform: "Facebook" | "Instagram" | "Twitter" | "Telegram" | "Whatsapp"
  ) => {
    switch (platform) {
      case "Facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          text
        )}`;
      case "Twitter":
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`;
      //   case "Instagram":
      //     return `https://www.instagram.com/share?url=${encodeURIComponent( // I can't find a way to construct a post on instagram using url parameters
      //       text
      //     )}`;
      case "Telegram":
        return `https://t.me/share/url?url=${encodeURIComponent(text)}`;

      case "Whatsapp":
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      default:
        return "";
    }
  };
  return (
    <div className={`p-4 pb-0 ${className}`}>
      <section className="my-4 w-full flex items-center justify-between">
        <div
          onClick={() => {
            copyToClipboard(generateLink("Facebook"));
          }}
        >
          <Image
            src={"/facebook.png"}
            alt="Facebook logo"
            width={40}
            height={40}
          />
        </div>

        <div
          onClick={() => {
            copyToClipboard(generateLink("Twitter"));
          }}
        >
          <Image src={"/x.png"} alt="Twitter logo" width={35} height={35} />
        </div>

        {/* <div
          onClick={() => {
            copyToClipboard(generateLink("Instagram"));
          }}
        >
          <Image
            src={"/instagram.png"}
            alt="Instagram logo"
            width={45}
            height={45}
          />
        </div> */}

        <div
          onClick={() => {
            copyToClipboard(generateLink("Telegram"));
          }}
        >
          <Image
            src={"/telegram.png"}
            alt="Telegram logo"
            width={50}
            height={50}
          />
        </div>

        <div
          onClick={() => {
            copyToClipboard(generateLink("Whatsapp"));
          }}
        >
          <Image
            src={"/whatsapp.png"}
            alt="Whatsapp logo"
            width={50}
            height={50}
          />
        </div>
      </section>
    </div>
  );
};

export default Details;
