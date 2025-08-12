import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footer } from "@/contants";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-primary rounded-2xl max-w-[98%] mx-auto mb-4">
      <div className="max-w-[1440px] mx-auto p-8">
        <div className="flex flex-row gap-4 justify-center items-start">
          <Link href={footer.instagram.instagramLink}>
            <Image
              src={footer.instagram.icon}
              alt="instagram-link"
              width={42}
              height={42}
            />
          </Link>
          <p className="text-white text-4xl tracking-wider mb-6 text-center">
            {footer.title}
          </p>
        </div>
        <div className="text-white font-medium text-lg my-4">
          Copyright © White Gloves | Designed and developed by{" "}
          <Link href={footer.link.label} className="underline">
            {footer.link.label}
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 my-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
