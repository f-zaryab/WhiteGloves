import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import MenuToggle from "./menu-toggle";
import { Button } from "../ui/button";
import { NavLinks } from "@/contants";

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button onClick={() => setIsOpen(true)}>
          <MenuToggle isOpen={isOpen} />
        </button>
      </DialogTrigger>
      <DialogContent className="min-h-screen min-w-screen">
        <DialogHeader>
          <DialogTitle className="mb-4">
            <Image
              src="/temp_images/logo_01.png"
              alt="logo"
              width={70}
              height={70}
              className="object-cover block object-center drop-shadow-xl/50"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <p className="text-sm uppercase text-left w-full mb-1 mt-4 tracking-[0.4em]">
              WhiteGloves
            </p>
            <p className="text-4xl  font-bold text-left w-full mb-2">
              Your go to movers!
            </p>
          </DialogTitle>
          <div className="flex flex-col gap-2 justify-start">
            <span className="cursor-pointer text-lg text-left text-primary border-2 border-white font-bold hover:border-2 hover:border-primary rounded-full">
              <Button
                variant="primary"
                className="text-white rounded-4xl min-w-24"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="/">Home</Link>
              </Button>
            </span>
            {NavLinks.map((item) => (
              <span
                key={item.id}
                className="cursor-pointer text-lg text-left text-primary border-2 border-white font-bold hover:border-2 hover:border-primary rounded-full"
              >
                <Button
                  variant="primary"
                  className="text-white rounded-4xl min-w-24"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </span>
            ))}
          </div>
          <div className="my-4">
            <div className="flex flex-col gap-4 rounded-3xl p-2">
              <div className="flex flex-col justify-items-start text-left">
                <p className="text-sm md:text-lg font-normal">Email us</p>
                <Link
                  href="mailto:Whitegloves.cc@gmail.com"
                  className="text-sm md:text-lg font-bold"
                >
                  Whitegloves.cc@gmail.com
                </Link>
              </div>

              <div className="flex flex-col justify-items-start text-left">
                <p className="text-sm md:text-lg font-normal">
                  Connect on a call
                </p>
                <Link
                  href="tel:+971501773013"
                  className="text-sm md:text-lg font-bold"
                >
                  +971501773013
                </Link>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MobileMenu;
