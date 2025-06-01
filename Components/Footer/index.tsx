import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footer } from "@/contants";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-primary rounded-2xl max-w-[98%] mx-auto">
      <div className="max-w-[1440px] mx-auto p-8">
        <p className="text-white text-4xl tracking-wider mb-6 text-center">
          {footer.title}
        </p>
        <p className="text-white font-medium text-lg my-4">{footer.subtitle}</p>
        <div className="flex justify-center items-center gap-4 my-2">
          <div>
            <Link href={footer.instagram.instagramLink}>
              <Image
                src={footer.instagram.icon}
                alt="instagram-link"
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div>
            <Link href={footer.snapchat.snapchatLink}>
              <Image
                src={footer.snapchat.icon}
                alt="snapchat-link"
                width={28}
                height={28}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
