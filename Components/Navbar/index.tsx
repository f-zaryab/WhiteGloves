"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
// import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // const { scrollY } = useScroll();
  // const [scrollAmount, setScrollAmount] = useState(0);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setScrollAmount(latest);
  // });

  // const showScrolledStyles = scrollAmount > 400;
  // const buttonWidth = 140; // approx width of button + margin

  return (
    <div className="w-full flex justify-between items-center h-14 fixed top-8 z-50">
      <div className="flex w-full justify-between items-center max-w-[600px] lg:max-w-[1440px] mx-auto">
        <NavigationMenu className="flex justify-between h-16 px-4 py-2 bg-white/40 max-w-[100%] backdrop-blur-3xl rounded-4xl">
          <Link href="/">
            <Image
              src="/temp_images/logo_01.png"
              alt="logo"
              width={110}
              height={110}
              className="object-cover block object-center drop-shadow-xl/50"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Link>

          {/* -------------- Mobile Menu ---------------- */}
          <motion.nav
            className="block md:hidden pt-2 ml-auto"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
          >
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.nav>

          {/* -------------- Desktop Menu ---------------- */}
          <NavigationMenuList className="hidden md:flex items-center gap-4">
            {/* About Us */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="default" asChild>
                  <Link
                    href="/About"
                    className="!rounded-[25] hover:text-primary px-6"
                  >
                    About us
                  </Link>
                </Button>
              </NavigationMenuLink>
              {/* Contact Us */}
            </NavigationMenuItem>
            {/* Contact Us */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="default" asChild>
                  <Link
                    href="#Contact"
                    className="!rounded-[25] hover:text-primary px-6"
                  >
                    Conact us
                  </Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Call CTA */}
            <Button variant="secondary" asChild>
              <Link
                href="tel:+971 501773013"
                className="!rounded-[25] hover:text-white text-[1rem]"
              >
                <IoIosCall className="w-5! h-5!" />
                +971 501773013
              </Link>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
