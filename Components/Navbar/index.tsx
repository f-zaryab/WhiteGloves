import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-14 fixed top-4">
      <div className="hidden sm:flex w-full justify-between items-center max-w-[1440px] mx-auto">
        <NavigationMenu className="ml-auto bg-secondary px-4 py-2 rounded-3xl">
          <NavigationMenuList className="flex items-center gap-4">
            {/* About Us */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="default" asChild>
                  <Link
                    href="/About"
                    className="!rounded-[25] hover:text-white"
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
                    className="!rounded-[25] hover:text-white"
                  >
                    Conact us
                  </Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
